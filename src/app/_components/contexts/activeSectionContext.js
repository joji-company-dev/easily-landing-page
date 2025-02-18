"use client";

import { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext({
  activeSectionId: null,
  setActiveSectionId: () => {},
});

const initialValue =
  typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";

export const useActiveSectionContext = () => {
  const { activeSectionId, setActiveSectionId } =
    useContext(ActiveSectionContext);
  return { activeSectionId, setActiveSectionId };
};

export const ActiveSectionProvider = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState(initialValue);

  const handleSetActiveSectionId = (id) => {
    setActiveSectionId(id);
  };

  return (
    <ActiveSectionContext.Provider
      value={{ activeSectionId, setActiveSectionId: handleSetActiveSectionId }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

"use client";

import { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext({
  activeSectionId: null,
  setActiveSectionId: () => {},
});

export const useActiveSectionContext = () => {
  const { activeSectionId, setActiveSectionId } =
    useContext(ActiveSectionContext);
  return { activeSectionId, setActiveSectionId };
};

export const ActiveSectionProvider = ({ children }) => {
  const [activeSectionId, setActiveSectionId] = useState(
    window.location.hash.replace("#", "")
  );

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

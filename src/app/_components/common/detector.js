"use client";

import React, { Fragment, useEffect, useMemo, useRef } from "react";
import { useLatest } from "react-use";

/**
 * @typedef {Object} DetectorProps
 * @property {React.ReactNode} children - The child element to observe
 * @property {IntersectionObserverCallback} onIntersect - The callback function to be called when the child element intersects the viewport
 * @property {IntersectionObserverInit} options - The options for the IntersectionObserver
 */

/**
 * @param {DetectorProps} props
 * @returns {React.ReactNode}
 */
export function Detector({ children, onIntersect, options }) {
  const ref = useRef(null);

  const clonedChild = useMemo(() => {
    if (!children) {
      return null;
    }
    const childrenArray = React.Children.toArray(children);
    if (childrenArray.length === 0) {
      throw new Error("Detector must have at least one child");
    }
    if (childrenArray.length > 1) {
      throw new Error("Detector can only have one child");
    }
    if (childrenArray[0].$$typeof === Fragment.$$typeof) {
    }

    return React.cloneElement(childrenArray[0], { ref });
  }, [children]);

  const onIntersectRef = useLatest(onIntersect);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersectRef.current(entry);
        }
      });
    }, options);

    if (ref.current) {
      io.observe(ref.current);
    }

    return () => {
      io.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    clonedChild,
    options?.root,
    options?.rootMargin,
    options?.threshold,
    onIntersectRef,
  ]);

  return <>{clonedChild}</>;
}

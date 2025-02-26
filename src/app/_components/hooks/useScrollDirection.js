import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

export function useWindowScrollDirection() {
  const [prevY, setPrevY] = useState(0);
  const { y } = useWindowScroll();

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    if (prevY === y) return;
    if (y > prevY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setPrevY(y);
  }, [y, prevY]);

  return {
    direction: scrollDirection,
    y,
  };
}

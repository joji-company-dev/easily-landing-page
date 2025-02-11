"use client";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./mobileNavBar";
import DesktopNavbar from "./desktopNavBar";

export default function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isMobile && <MobileNavbar />}

      {/*데스크톱*/}
      {!isMobile && <DesktopNavbar />}
    </>
  );
}

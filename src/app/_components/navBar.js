"use client";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./mobileNavBar";
import DesktopNavbar from "./desktopNavBar";
import useAuth from "./hooks/useAuth";

export default function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const auth = useAuth();

  return (
    <>
      {isMobile && <MobileNavbar {...auth} />}

      {/*데스크톱*/}
      {!isMobile && <DesktopNavbar {...auth} />}
    </>
  );
}

"use client";

import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./mobileNavBar";
import DesktopNavbar from "./desktopNavBar";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const auth = useAuth();

  return (
    <>
      {isMobile && (
        <MobileNavbar
          isLoggedIn={auth.isLoggedIn}
          isLoading={auth.isLoading}
          userName={auth.userName}
          onLoginButtonClick={auth.redirectToLogin}
          onLogoutButtonClick={auth.handleLogout}
        />
      )}

      {/*데스크톱*/}
      {!isMobile && (
        <DesktopNavbar
          isLoggedIn={auth.isLoggedIn}
          isLoading={auth.isLoading}
          userName={auth.userName}
          onLoginButtonClick={auth.redirectToLogin}
          onLogoutButtonClick={auth.handleLogout}
        />
      )}
    </>
  );
}

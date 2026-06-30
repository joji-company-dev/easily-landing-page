"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./mobileNavBar";
import DesktopNavbar from "./desktopNavBar";
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const [isMounted, setIsMounted] = useState(false);
  const auth = useAuth();
  const NavbarComponent = isMounted && isMobile ? MobileNavbar : DesktopNavbar;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <NavbarComponent
      isLoggedIn={auth.isLoggedIn}
      isLoading={auth.isLoading}
      userName={auth.userName}
      onLoginButtonClick={auth.redirectToLogin}
      onLogoutButtonClick={auth.handleLogout}
    />
  );
}

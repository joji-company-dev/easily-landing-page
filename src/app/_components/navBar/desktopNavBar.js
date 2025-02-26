import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useActiveSectionContext } from "../contexts/activeSectionContext";
import { Button } from "../ui/button";
import { NAV_BAR_MENU_ITEMS } from "../../_consts/nav_bar_menu_items";
import { AuthDropdown } from "./authDropdown";

export const NAVBAR_HEIGHT = 64;
const DROPDOWN_BAR_HEIGHT = 256;
const MENU_BUTTON_HEIGHT = 20;

if (typeof window !== "undefined") {
  function setScrollbarWidthVariables() {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`
    );
  }

  setTimeout(setScrollbarWidthVariables, 100);

  window.addEventListener("resize", setScrollbarWidthVariables);
}

const DesktopNavbar = ({
  isLoggedIn,
  isLoading,
  userName,
  onLoginButtonClick,
  onLogoutButtonClick,
}) => {
  const { activeSectionId } = useActiveSectionContext();
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 md:top-8 bg-slate-50 z-50 w-[calc(100vw-var(--scrollbar-width)-4rem)] translate-x-[2rem] flex items-center shadow-md rounded-2xl transition-[border-radius] duration-100 ease-in-out lg:px-10"
      style={{
        height: `${NAVBAR_HEIGHT}px`,
        ...(isMenuDropdownOpen
          ? {
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }
          : {
              transitionDelay: "0.2s",
            }),
      }}
    >
      <div
        className={`fixed left-0 bg-slate-50 shadow-md rounded-b-lg p-5 w-full transition-all duration-300 ease-in-out`}
        style={{
          top: `${NAVBAR_HEIGHT}px`,
          height: isMenuDropdownOpen ? `${DROPDOWN_BAR_HEIGHT}px` : "0px",
          padding: isMenuDropdownOpen ? "1.25rem" : "0px",
        }}
      ></div>
      <div className="flex items-center justify-between px-6 w-full">
        {/* 로고 */}
        <Link href="/" className="flex items-center z-10">
          <Image
            src="/logo(2).svg"
            alt="Easily Beta Logo"
            width={120}
            height={40}
            className="h-10"
          />
        </Link>

        {/* 메뉴 */}
        <div
          className={`absolute flex items-start gap-24 flex-1 justify-center left-1/2 -translate-x-1/2 w-full`}
          style={{
            top: `${NAVBAR_HEIGHT / 2 - MENU_BUTTON_HEIGHT / 2}px`,
            overflow: isMenuDropdownOpen ? "visible" : "hidden",
            bottom: isMenuDropdownOpen ? "auto" : "0px",
          }}
          onMouseLeave={() => setIsMenuDropdownOpen(false)}
        >
          {NAV_BAR_MENU_ITEMS.map((menu, index) => (
            <div
              onMouseEnter={() => setIsMenuDropdownOpen(true)}
              key={index}
              className={`relative flex flex-col w-14`}
              style={{
                gap: `${NAVBAR_HEIGHT / 2 - MENU_BUTTON_HEIGHT / 2}px`,
              }}
            >
              <button
                className={
                  "text-sm font-semibold transition-colors text-muted-foreground hover:text-primary"
                }
                style={{ height: `${MENU_BUTTON_HEIGHT}px` }}
              >
                <Link href={menu.baseUrl} className="text-left">
                  {menu.label}
                </Link>
              </button>

              <div
                key={index}
                className={`space-y-2 flex flex-col items-center gap-3 transition-opacity duration-200 ease-in-out pt-4
                      ${isMenuDropdownOpen ? "opacity-100" : "opacity-0"}`}
              >
                {menu.children.map((child, subIndex) => (
                  <Link
                    key={subIndex}
                    href={menu.baseUrl + child.href}
                    className={`block text-sm font-semibold text-gray-700 hover:text-primary transition-colors text-left text-nowrap ${
                      activeSectionId === child.href.replace("#", "")
                        ? "text-primary font-bold underline underline-offset-4"
                        : "text-muted-foreground"
                    } hover:text-primary`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 z-10">
          <Link href="https://easily-dashboard.jojicompany.com">
            <Button variant="link">대시보드</Button>
          </Link>

          <AuthDropdown
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            userName={userName}
            onLoginButtonClick={onLoginButtonClick}
            onLogoutButtonClick={onLogoutButtonClick}
          />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

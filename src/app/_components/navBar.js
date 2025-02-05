"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const NAVBAR_HEIGHT = 72;
const DROPDOWN_BAR_HEIGHT = 256;
const MENU_BUTTON_HEIGHT = 20;

export default function NavBar() {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false); // 메뉴 드롭다운 상태
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); // 사용자메뉴 드롭다운 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 여부 상태
  const [isLoading, setIsLoading] = useState(true); //로그인 시도중인 상태
  const [userName, setUserName] = useState(""); // 사용자 이름
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/profile`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 401) {
          throw new Error("Unauthorized");
        } else {
          throw new Error("Unexpected error");
        }
      })
      .then((data) => {
        setIsLoggedIn(true);
        setUserName(data.name);
      })
      .catch((error) => {
        if (error.message === "Unauthorized") {
          setIsLoggedIn(false);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  //로그아웃 기능 미완성
  const handleLogout = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.status === 201) {
        setIsLoggedIn(false);
        setIsUserDropdownOpen(false);
      } else {
        console.error("Failed to logout.");
      }
    });
  };

  const redirectToLogin = () => {
    window.location.href = `https://easily-dashboard.jojicompany.com/login?fallback=${window.location.href}`;
  };

  const menuItems = [
    {
      label: "홈",
      baseUrl: "/",
      children: [
        { label: "소개", href: "#hero" },
        { label: "서비스", href: "#service" },
        { label: "FAQ", href: "#faq" },
        { label: "구독", href: "#subscribe" },
        { label: "문의", href: "#contact" },
      ],
    },
    {
      label: "가격",
      baseUrl: "/price",
      children: [
        { label: "정책", href: "#policy" },
        { label: "결제", href: "#purchase" },
      ],
    },
    {
      label: "공지사항",
      baseUrl: "/post",
      children: [
        { label: "공지사항", href: "/post" },
        { label: "게시판", href: "#board" },
      ],
    },
  ];

  const mobileMenuItems = [
    {
      label: "홈",
      baseUrl: "/",
      children: [
        { label: "홈", href: "/" },
        { label: "소개", href: "#hero" },
        { label: "서비스", href: "#service" },
        { label: "FAQ", href: "#faq" },
        { label: "구독", href: "#subscribe" },
        { label: "문의", href: "#contact" },
      ],
    },
    {
      label: "가격",
      baseUrl: "/price",
      children: [
        { label: "가격", href: "/price" },
        { label: "정책", href: "#policy" },
        { label: "결제", href: "#purchase" },
      ],
    },
    {
      label: "공지사항",
      baseUrl: "/post",
      children: [
        { label: "공지사항", href: "/post" },
        { label: "게시판", href: "#board" },
      ],
    },
  ];

  const toggleMenu = (menuLabel) => {
    setOpenMenu(openMenu === menuLabel ? null : menuLabel);
  };

  return (
    <>
      {isMobile && (
        <>
          <nav
            className="sticky bg-white top-0 z-50 w-full flex items-center shadow-sm"
            style={{ height: `${NAVBAR_HEIGHT}px` }}
          >
            <div className="flex items-center justify-between w-full px-4">
              {/* 로고 */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo(2).svg"
                  alt="Easily Beta Logo"
                  width={120}
                  height={40}
                  className="h-10"
                />
              </Link>

              {/* 오른쪽 영역: 로그인 버튼 + 햄버거 메뉴 */}
              <div className="flex items-center gap-4">
                {/* 로그인 버튼 */}
                {isLoggedIn ? (
                  <span className="text-lg font-semibold">
                    환영합니다 {userName}님
                  </span>
                ) : (
                  <button
                    className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                    onClick={redirectToLogin}
                  >
                    로그인
                  </button>
                )}

                {/* 햄버거 메뉴 버튼 */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-2xl"
                >
                  {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>
            </div>

            {/* 모바일 메뉴 */}
            {isMobile && isMobileMenuOpen && (
              <>
                <div
                  className={`absolute left-0 w-full bg-white z-50 flex flex-col items-center p-6 shadow-lg`}
                  style={{
                    top: `${NAVBAR_HEIGHT}px`,
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(-100%)",
                    opacity: isMobileMenuOpen ? 1 : 0,
                  }}
                >
                  {mobileMenuItems.map((item) => (
                    <div key={item.label} className="w-full items-center">
                      {/* 메인 메뉴 버튼 */}
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className="text-lg font-semibold py-2 w-full"
                      >
                        {item.label}
                        {openMenu === item.label ? (
                          <ExpandLess className="ml-2" />
                        ) : (
                          <ExpandMore className="ml-2" />
                        )}
                      </button>

                      {openMenu === item.label && (
                        <div className="flex flex-col items-center w-full py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="py-1 text-gray-700"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* 대시보드 버튼 */}
                  <Link
                    href="https://easily-dashboard.jojicompany.com"
                    className="bg-[#FF6B2B] text-white py-2 px-4 rounded-md hover:bg-[#e55a1f] mt-2"
                  >
                    대시보드
                  </Link>
                  {isLoggedIn && (
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-2"
                    >
                      로그아웃
                    </button>
                  )}
                </div>
              </>
            )}
          </nav>
          {/* 오버레이 배경 */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-30 z-40"
              onClick={() => setIsMobileMenuOpen(false)} // 오버레이 클릭 시 메뉴 닫기
            ></div>
          )}
        </>
      )}

      {!isMobile && (
        <nav
          className="sticky bg-white top-0 z-50 w-full flex items-center shadow-sm"
          style={{ height: `${NAVBAR_HEIGHT}px` }}
        >
          <div
            className={`fixed left-0 bg-white shadow-md rounded-b-lg p-5 w-full
          transition-all duration-300 ease-in-out`}
            style={{
              top: `${NAVBAR_HEIGHT}px`,
              height: isMenuDropdownOpen ? `${DROPDOWN_BAR_HEIGHT}px` : "0px",
              padding: isMenuDropdownOpen ? "1.25rem" : "0px",
            }}
          ></div>
          {!isMobile && (
            <div className="flex items-center justify-between px-6 w-full">
              {/* 로고 */}
              <Link href="/" className="flex items-center">
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
                className={`absolute flex items-start gap-28 flex-1 justify-center left-1/2 -translate-x-1/2 w-full`}
                style={{
                  top: `${NAVBAR_HEIGHT / 2 - MENU_BUTTON_HEIGHT / 2}px`,
                }}
                onMouseLeave={() => setIsMenuDropdownOpen(false)}
              >
                {menuItems.map((menu, index) => (
                  <div
                    onMouseEnter={() => setIsMenuDropdownOpen(true)}
                    key={index}
                    className={`relative flex flex-col w-14`}
                    style={{
                      gap: `${NAVBAR_HEIGHT / 2 - MENU_BUTTON_HEIGHT / 2}px`,
                    }}
                  >
                    <button
                      className={`text-sm font-semibold text-muted-foreground hover:text-primary transition-colors`}
                      style={{
                        height: `${MENU_BUTTON_HEIGHT}px`,
                      }}
                    >
                      <Link href={menu.baseUrl} className="text-left">
                        {menu.label}
                      </Link>
                    </button>

                    <div
                      key={index}
                      className={`space-y-2 flex flex-col items-center gap-3 transition-opacity duration-200 ease-in-out pt-4
                      ${isMenuDropdownOpen ? "opacity-100" : "opacity-0"}
                    `}
                    >
                      {menu.children.map((child, subIndex) => (
                        <Link
                          key={subIndex}
                          href={`${menu.baseUrl}${child.href}`}
                          className="block text-sm text-gray-700 hover:text-primary transition-colors text-left text-nowrap"
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
                  <button className="bg-[#FF6B2B] text-white py-2 px-4 rounded-md hover:bg-[#e55a1f]">
                    대시보드
                  </button>
                </Link>

                {/* 로그인 여부에 따른 사용자 정보 */}
                <div className="relative w-40">
                  {isLoading ? null : isLoggedIn ? (
                    <div>
                      <button
                        className="text-sm font-semibold text-muted-foreground"
                        onMouseEnter={() =>
                          setIsUserDropdownOpen((prev) => !prev)
                        }
                      >
                        환영합니다! {userName}님
                      </button>
                      {isUserDropdownOpen && (
                        <div
                          className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-40"
                          onMouseLeave={() => setIsUserDropdownOpen(false)}
                        >
                          <Link
                            href="/myinfo"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            내 정보
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            로그아웃
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                      onClick={redirectToLogin}
                    >
                      로그인
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}

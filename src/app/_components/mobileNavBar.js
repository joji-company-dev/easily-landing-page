import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, TableOfContents, ChevronDown, ChevronUp } from "lucide-react";
import useAuth from "./hooks/useAuth";

const NAVBAR_HEIGHT = 72;

export default function MobileNavbar({
  isLoggedIn,
  isLoading,
  userName,
  onLoginButtonClick,
  onLogoutButtonClick,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

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

  return (
    <>
      <nav
        className="sticky bg-white top-0 z-50 w-full flex items-center shadow-sm"
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="flex items-center justify-between w-full px-4 z-50">
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

          <div className="flex items-center gap-4">
            {/* 로그인 버튼 */}
            {isLoading ? null : isLoggedIn ? (
              <span className="text-lg font-semibold">
                환영합니다 {userName}님
              </span>
            ) : (
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                onClick={onLoginButtonClick}
              >
                로그인
              </button>
            )}

            <button
              onClick={() => {
                setIsMobileMenuOpen((prev) => {
                  return !prev;
                });
              }}
              className="text-2xl test"
            >
              {isMobileMenuOpen ? <X /> : <TableOfContents />}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}

        <div
          className={`absolute left-0 w-full bg-white z-40 flex flex-col items-center p-6 shadow-lg 
                 duration-300 ease-in-out ${
                   isMobileMenuOpen
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 -translate-y-full"
                 }`}
          style={{ top: `${NAVBAR_HEIGHT}px` }}
        >
          {mobileMenuItems.map((item) => (
            <div key={item.label} className="w-full items-center">
              {/* 메인 메뉴 버튼 */}
              <button
                onClick={() => toggleMenu(item.label)}
                className="text-lg font-semibold py-2 w-full flex justify-center items-center"
              >
                {item.label}
                {openMenu === item.label ? (
                  <ChevronDown className="ml-2" />
                ) : (
                  <ChevronUp className="ml-2" />
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
              onClick={onLogoutButtonClick}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-2"
            >
              로그아웃
            </button>
          )}
        </div>
      </nav>

      {/* 오버레이 배경 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리
  const [userName, setUserName] = useState("지현수"); // 가상의 사용자 이름

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
      baseUrl: "/",
      children: [
        { label: "정책", href: "#policy" },
        { label: "결제", href: "#purchase" },
      ],
    },
    {
      label: "공지사항",
      baseUrl: "/",
      children: [
        { label: "공지사항", href: "#announcement" },
        { label: "게시판", href: "#board" },
      ],
    },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav
      className="border-b sticky bg-white top-0 z-50"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
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

        <div
          className="relative flex items-center gap-28 flex-1 justify-center"
          onMouseEnter={() => setIsDropdownOpen(true)}
        >
          {menuItems.map((menu, index) => (
            <div key={index} className="relative">
              <button className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                <Link href={menu.baseUrl} className="text-left">
                  {menu.label}
                </Link>
              </button>
            </div>
          ))}

          {isDropdownOpen && (
            <div
              className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-b-lg p-4 w-[550px] mt-2"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex justify-around gap-2">
                {menuItems.map((menu, index) => (
                  <div key={index} className="space-y-2">
                    {menu.children.map((child, subIndex) => (
                      <Link
                        key={subIndex}
                        href={`${menu.baseUrl}${child.href}`}
                        className="block text-sm text-gray-700 hover:text-primary transition-colors text-left"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://easily-dashboard.jojicompany.com/dashboard/proposal/create">
            <button className="bg-[#FF6B2B] text-white py-2 px-4 rounded-md hover:bg-[#e55a1f]">
              대시보드
            </button>
          </Link>

          {/* 로그인 여부에 따른 사용자 정보 */}
          <div className="relative w-40">
            {isLoggedIn ? (
              <div>
                <button
                  className="text-sm font-semibold text-muted-foreground"
                  onMouseEnter={() => setIsDropdownOpen((prev) => !prev)}
                >
                  환영합니다! {userName}님
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 w-40"
                    onMouseLeave={() => setIsDropdownOpen(false)}
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
                onClick={handleLogin}
                className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

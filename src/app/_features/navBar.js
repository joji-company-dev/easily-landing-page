"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    {
      label: "홈",
      baseUrl: "/",
      children: [
        { label: "소개", href: "#hero" },
        { label: "서비스", href: "#service" },
        { label: "문의/구독", href: "#contact" },
      ],
    },
    {
      label: "가격",
      baseUrl: "/",
      children: [
        { label: "정책", href: "#policy" },
        { label: "결제", href: "#purcahse" },
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

  return (
    <nav
      className="border-b sticky bg-white top-0 z-50"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo(2).svg"
            alt="Easily Beta Logo"
            width={120}
            height={40}
            className="h-10"
          />
        </Link>

        {/* Center: Menu Items */}
        <div
          className="relative flex items-center gap-28"
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

          {/* 드롭다운 전체 메뉴 */}
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

        {/* Right: Dashboard and Login Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <button className="bg-[#FF6B2B] text-white py-2 px-4 rounded-md hover:bg-[#e55a1f]">
              대시보드
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400">
              로그인
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

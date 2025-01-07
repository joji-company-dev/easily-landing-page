"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = {
    home: [
      { label: "소개", href: "/#hero" },
      { label: "서비스", href: "/#service" },
      { label: "문의/구독", href:"/#contact"}
    ],
    service: [
      { label: "정책", href: "#plans" },
      { label: "결제", href: "#pricing" },
    ],
    contact: [
      { label: "지원", href: "#email" },
      { label: "고객센터", href: "#support" },  
    ],
  };

  return (
    <nav
      className="border-b sticky bg-white top-0 z-50"
      onMouseLeave={() => setIsDropdownOpen(false)} // 드롭다운 메뉴에서 나가면 드롭다운 비활성화
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Easily Beta Logo"
            width={120}
            height={40}
            className="h-10"
          />
        </Link>

        {/* Center: Menu Items */}
        <div
          className="relative flex items-center gap-28"
          onMouseEnter={() => setIsDropdownOpen(true)} // 전체 메뉴 hover 시 드롭다운 활성화
        >
          {/* Home */}
          <div className="relative">
            <button className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <Link href="#hero" className="text-left">
                Home
              </Link>
            </button>
          </div>

          {/* Service */}
          <div className="relative">
            <button className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <Link href="#service" className="text-left">
                Service
              </Link>
            </button>
          </div>

          {/* Contact */}
          <div className="relative">
            <button className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <Link href="#contact" className="text-left">
                Contact
              </Link>
            </button>
          </div>

          {/* 드롭다운 전체 메뉴 */}
          {isDropdownOpen && (
            <div
              className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-b-lg p-4 w-[550px] mt-2"
              onMouseEnter={() => setIsDropdownOpen(true)} // 드롭다운 메뉴 안에 들어가면 드롭다운 유지
              onMouseLeave={() => setIsDropdownOpen(false)} // 드롭다운 메뉴에서 나가면 드롭다운 비활성화
            >
              <div className="flex justify-around gap-2">
                {/* Home 드롭다운 항목들 */}
                <div className="space-y-2">
                  {menuItems.home.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-sm text-gray-700 hover:text-primary transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Service 드롭다운 항목들 */}
                <div className="space-y-2">
                  {menuItems.service.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-sm text-gray-700 hover:text-primary transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Contact 드롭다운 항목들 */}
                <div className="space-y-2">
                  {menuItems.contact.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-sm text-gray-700 hover:text-primary transition-colors text-left"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
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

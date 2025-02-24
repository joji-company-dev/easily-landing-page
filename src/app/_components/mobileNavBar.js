import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, TableOfContents, ChevronDown, ChevronUp } from "lucide-react";
import { NAVBAR_HEIGHT } from "./desktopNavBar";
import { Button } from "./ui/button";
import { useActiveSectionContext } from "./contexts/activeSectionContext";
import { useWindowScrollDirection } from "./hooks/useScrollDirection";

export default function MobileNavbar({
  isLoggedIn,
  isLoading,
  userName,
  onLoginButtonClick,
}) {
  const { direction } = useWindowScrollDirection();
  const isNavBarHidden = useMemo(() => direction === "down", [direction]);

  const { activeSectionId } = useActiveSectionContext();
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
        { label: "소개", href: "#hero" },
        { label: "서비스", href: "#service" },
        { label: "예시", href: "#proposal" },
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
        className="sticky bg-white top-0 z-50 w-full flex items-center shadow-sm transition-transform"
        style={{
          height: `${NAVBAR_HEIGHT}px`,
          ...(isNavBarHidden
            ? { transform: "translateY(-100%)" }
            : { transform: "translateY(0)" }),
        }}
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
            <Button
              variant="ghost"
              onClick={() => {
                setIsMobileMenuOpen((prev) => {
                  return !prev;
                });
              }}
            >
              {isMobileMenuOpen ? <X /> : <TableOfContents />}
            </Button>
          </div>
        </div>

        {/* 모바일 메뉴 */}

        <div
          className={`absolute left-0 w-full bg-white z-40 flex flex-col gap-4 p-6 shadow-lg 
                 duration-300 ease-in-out ${
                   isMobileMenuOpen
                     ? "opacity-100 translate-y-0"
                     : "opacity-0 -translate-y-full"
                 }`}
          style={{ top: `${NAVBAR_HEIGHT}px` }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              {mobileMenuItems.map((item) => (
                <div key={item.label} className="">
                  {/* 메인 메뉴 버튼 */}
                  <Button
                    variant="ghost"
                    onClick={() => toggleMenu(item.label)}
                    className={"font-semibold py-2 flex items-center"}
                  >
                    <div className=" flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="text-muted-foreground">
                        {openMenu === item.label ? (
                          <ChevronUp className="ml-2" size={16} />
                        ) : (
                          <ChevronDown className="ml-2" size={16} />
                        )}
                      </span>
                    </div>
                  </Button>

                  {openMenu === item.label && (
                    <div className="flex flex-col gap-1 pl-8 w-full py-2 transition-all overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={`${item.baseUrl}${child.href}`}
                          className={`transition-colors text-sm py-1 text-gray-700 ${activeSectionId === child.href.replace("#", "") ? "text-primary" : "text-gray-900"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Button asChild>
              <Link href="https://easily-dashboard.jojicompany.com">
                대시보드
              </Link>
            </Button>
            {/* 로그인 버튼 */}
            {isLoading ? null : isLoggedIn ? (
              <span className="text-muted-foreground  font-semibold">
                환영합니다 {userName}!
              </span>
            ) : (
              <Button variant="secondary" onClick={onLoginButtonClick}>
                로그인
              </Button>
            )}
          </div>
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

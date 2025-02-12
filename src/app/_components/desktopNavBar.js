import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAVBAR_HEIGHT = 72;
const DROPDOWN_BAR_HEIGHT = 256;
const MENU_BUTTON_HEIGHT = 20;

const DesktopNavbar = ({
  isLoggedIn,
  isLoading,
  userName,
  onLoginButtonClick,
  onLogoutButtonClick,
}) => {
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menuItems = [
    {
      label: "홈",
      baseUrl: "/",
      children: [
        { label: "소개", id: "hero" },
        { label: "서비스", id: "service" },
        { label: "FAQ", id: "faq" },
        { label: "구독", id: "subscribe" },
      ],
    },
    {
      label: "가격",
      baseUrl: "/price",
      children: [
        { label: "정책", id: "policy" },
        { label: "결제", id: "purchase" },
      ],
    },
    {
      label: "공지사항",
      baseUrl: "/post",
      children: [
        { label: "공지사항", id: "notice" },
        { label: "게시판", id: "board" },
      ],
    },
  ];

  const [sectionRefs, setSectionRefs] = useState([]);

  useEffect(() => {
    // 문서에서 섹션 ID 기반으로 요소 가져오기
    const refs = menuItems.flatMap((menu) =>
      menu.children.map((child) => ({
        label: child.label,
        element: document.getElementById(child.id),
      }))
    );

    setSectionRefs(refs.filter((ref) => ref.element !== null));
  }, []);

  useEffect(() => {
    if (sectionRefs.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedMenu(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.forEach(({ element }) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionRefs.forEach(({ element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionRefs]);

  return (
    <nav
      className="sticky bg-white top-0 z-50 w-full flex items-center shadow-sm"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div
        className={`fixed left-0 bg-white shadow-md rounded-b-lg p-5 w-full transition-all duration-300 ease-in-out`}
        style={{
          top: `${NAVBAR_HEIGHT}px`,
          height: isMenuDropdownOpen ? `${DROPDOWN_BAR_HEIGHT}px` : "0px",
          padding: isMenuDropdownOpen ? "1.25rem" : "0px",
        }}
      ></div>
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
                className={`text-sm font-semibold transition-colors ${
                  selectedMenu === menu.label
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                } hover:text-primary`}
                style={{ height: `${MENU_BUTTON_HEIGHT}px` }}
                onClick={() => setSelectedMenu(menu.label)}
              >
                <Link href={menu.baseUrl} className="text-left">
                  {menu.label}
                </Link>
              </button>
              <div
                className={`space-y-2 flex flex-col items-center gap-3 transition-opacity duration-200 ease-in-out pt-4
                      ${isMenuDropdownOpen ? "opacity-100" : "opacity-0"}`}
              >
                {menu.children.map((child, subIndex) => (
                  <Link
                    key={subIndex}
                    href={`#${child.id}`}
                    className={`block text-sm text-gray-700 hover:text-primary transition-colors text-left text-nowrap ${
                      selectedMenu === child.id
                        ? "text-primary font-bold underline underline-offset-4"
                        : "text-muted-foreground"
                    } hover:text-primary`}
                    onClick={() => setSelectedMenu(child.id)}
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
                  onMouseEnter={() => setIsUserDropdownOpen((prev) => !prev)}
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
                      onClick={onLogoutButtonClick}
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
                onClick={onLoginButtonClick}
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;

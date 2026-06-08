export const NAV_BAR_MENU_ITEMS = [
  {
    label: "홈",
    baseUrl: "/",
    children: [
      { label: "소개", href: "#hero" },
      { label: "서비스", href: "#service" },
      { label: "예시", href: "#proposal" },
      { label: "FAQ", href: "#faq" },
      { label: "뉴스레터", href: "#subscribe" },
    ],
  },
  {
    label: "요금제",
    baseUrl: "/price",
    children: [],
  },
  {
    label: "공지사항",
    baseUrl: "/post",
    children: [{ label: "전체보기", href: "#notice" }],
  },
];

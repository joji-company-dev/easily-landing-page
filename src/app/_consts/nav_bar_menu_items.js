export const NAV_BAR_MENU_ITEMS = [
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
  // TODO: 가격정책 정해진 후 추가
  // {
  //   label: "가격",
  //   baseUrl: "/price",
  //   children: [
  //     { label: "정책", href: "#policy" },
  //     { label: "결제", href: "#purchase" },
  //   ],
  // },
  {
    label: "공지사항",
    baseUrl: "/post",
    children: [{ label: "전체보기", href: "#notice" }],
  },
];

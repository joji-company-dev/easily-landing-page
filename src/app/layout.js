import Navbar from "./features/easilyMain/nav";
import "./globals.css";


export const metadata = {
  title: "이즐리 렌딩페이지",
  description: "이즐리 렌딩페이지 입니다. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
      <Navbar/>
      {children}
      </body>
    </html>
  );
}

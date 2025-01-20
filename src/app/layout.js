import NavBar from "./_components/navBar";
import Footer from "./_components/footer";
import "./globals.css";
import { Toaster } from "./_components/ui/toaster";


export const metadata = {
  title:"이즐리 | 영상 기획안",
  description:"세상 쉬운 영상기획 이젠 이즐리로 하세요 · 프로턱션을 위한 최고의 도구 · 창의적인 일에 집중하세요 · 간편한 기획안 초안 생성 · 고품질 레퍼런스 이미지 생성",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
      <NavBar/>
      {children}
      <Toaster/>
      <Footer/>
      </body>
    </html>
  );
}

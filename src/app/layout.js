import NavBar from "./_features/navBar";
import Footer from "./_features/sections/footer";
import FAQ from "./_features/sections/faq";
import "./globals.css";


export const metadata = {
  title: "이즐리 렌딩페이지",
  description: "이즐리 렌딩페이지 입니다. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
      <NavBar/>
      {children}
      <FAQ/>
      <Footer/>
      </body>
    </html>
  );
}

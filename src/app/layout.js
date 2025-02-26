import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans_KR } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "./_components/navBar/navBar";
import Footer from "./_components/footer";
import { Toaster } from "./_components/ui/toaster";
import { ActiveSectionProvider } from "./_components/contexts/activeSectionContext";
import "./globals.css";

const fonts = Noto_Sans_KR({ subsets: ["latin"] });

/**
 * @type {import('next').Viewport}
 */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  colorScheme: "only light",
};

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_EASILY_BASE_URL ?? ""),
  title: "이즐리 | 영상 기획안",
  description:
    "세상 쉬운 영상기획 이젠 이즐리로 하세요 · 프로턱션을 위한 최고의 도구 · 창의적인 일에 집중하세요 · 간편한 기획안 초안 생성 · 고품질 레퍼런스 이미지 생성",
  keywords: "영상 기획서, AI 기획서, 콘텐츠 기획, 유튜브 기획",
  authors: [{ name: "이즐리" }],
  creator: "이즐리",
  publisher: "이즐리",

  // 오픈그래프 메타데이터 (소셜 미디어 공유용)
  openGraph: {
    title: "이즐리 | 영상 기획안",
    description:
      "세상 쉬운 영상기획 이젠 이즐리로 하세요 · 프로턱션을 위한 최고의 도구 · 창의적인 일에 집중하세요 · 간편한 기획안 초안 생성 · 고품질 레퍼런스 이미지 생성",
    url: "https://easily.jojicompany.com",
    siteName: "이즐리",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og.jpg", // 대표 이미지 URL
        alt: "이즐리 서비스",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "이즐리 | 영상 기획서 생성 대시보드",
    description: "간편하게 만드는 영상 기획안",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 3,
      "max-image-preview": "large",
      "max-snippet": 3,
    },
  },

  alternates: {
    canonical: "https://easily.jojicompany.com",
    languages: {
      "ko-KR": "https://easily.jojicompany.com",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        suppressHydrationWarning
        className={cn(fonts.className, "font-sans antialiased")}
      >
        <ActiveSectionProvider>
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </ActiveSectionProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      </body>
    </html>
  );
}

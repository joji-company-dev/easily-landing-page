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
  title: "이즐리 - 영상 기획을 더 쉽게, 더 강력하게",
  description:
    "이즐리는 영상 기획을 위한 전문 도구로, 자유로운 블록 편집을 지원합니다. 효율적인 기획을 돕고 팀 협업을 강화하세요.",
  keywords: "영상 기획서, AI 기획서, 콘텐츠 기획, 유튜브 기획",
  authors: [{ name: "이즐리" }],
  creator: "이즐리",
  publisher: "이즐리",

  // 오픈그래프 메타데이터 (소셜 미디어 공유용)
  openGraph: {
    title: "이즐리 - 영상 기획을 더 쉽게, 더 강력하게",
    description:
      "이즐리는 영상 기획을 위한 전문 도구로, 자유로운 블록 편집을 지원합니다. 효율적인 기획을 돕고 팀 협업을 강화하세요.",
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
    title: "이즐리 - 영상 기획을 더 쉽게, 더 강력하게",
    description:
      "이즐리는 영상 기획을 위한 전문 도구로, 자유로운 블록 편집을 지원합니다. 효율적인 기획을 돕고 팀 협업을 강화하세요.",
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

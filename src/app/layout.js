import { GoogleAnalytics } from "@next/third-parties/google";
import { Noto_Sans_KR } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "./_components/navBar/navBar";
import Footer from "./_components/footer";
import { Toaster } from "./_components/ui/toaster";
import { ActiveSectionProvider } from "./_components/contexts/activeSectionContext";
import "./globals.css";

const fonts = Noto_Sans_KR({ subsets: ["latin"] });
const siteUrl = (
  process.env.NEXT_PUBLIC_EASILY_BASE_URL || "https://easilystoryboard.com"
).replace(/\/$/, "");
const seoTitle =
  "이즐리 - 광고·영화 레퍼런스 분석 | 국내 1위 온라인 스토리보드";
const seoDescription =
  "스토리보드, 연출 공부, 영상 레퍼런스를 장면과 샷 단위로 분석하고 온라인 기획안으로 정리하세요. 1080p 스크린샷, 마크다운 작성, 공유와 다운로드까지 지원합니다.";
const seoKeywords = [
  "스토리보드",
  "온라인 스토리보드",
  "연출 공부",
  "연출공부",
  "레퍼런스 분석",
  "영상 레퍼런스",
  "광고 레퍼런스",
  "영화 레퍼런스",
  "영상 기획안",
  "콘텐츠 기획",
];
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "이즐리",
  alternateName: "Easily",
  url: siteUrl,
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  headline: seoTitle,
  description: seoDescription,
  keywords: seoKeywords.join(", "),
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "KRW",
    lowPrice: "0",
    highPrice: "19800",
  },
  featureList: [
    "광고·영화 레퍼런스 분석",
    "온라인 스토리보드 작성",
    "장면과 샷 단위 분석",
    "1080p 스크린샷 저장",
    "마크다운 형식 기획안 작성",
    "공유와 이미지 다운로드",
  ],
};
const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

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
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: "이즐리" }],
  creator: "이즐리",
  publisher: "이즐리",

  // 오픈그래프 메타데이터 (소셜 미디어 공유용)
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
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
    title: seoTitle,
    description: seoDescription,
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      "ko-KR": siteUrl,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
      </body>
    </html>
  );
}

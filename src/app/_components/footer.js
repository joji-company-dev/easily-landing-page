import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-8 text-center text-white">
      {/* 정책 링크 */}
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
        <Link href="/terms" className="text-gray-300 hover:text-white">
          이용약관
        </Link>
        <span className="text-gray-600">|</span>
        <Link href="/privacy" className="font-semibold text-gray-200 hover:text-white">
          개인정보처리방침
        </Link>
        <span className="text-gray-600">|</span>
        <Link href="/refund" className="text-gray-300 hover:text-white">
          환불정책
        </Link>
      </nav>

      {/* 사업자 정보 */}
      <p className="mt-4 text-xs leading-relaxed text-gray-500">
        조지컴퍼니 | 대표 조영진 | 사업자등록번호 108-39-69341
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> | </span>
        경기도 안양시 동안구 시민대로 327번길 11-41 3F 3900호 | contact@jojicompany.com
      </p>

      <p className="mt-3 text-xs text-gray-600">
        Copyright 2026. 조지컴퍼니. All rights reserved.
      </p>
    </footer>
  );
}

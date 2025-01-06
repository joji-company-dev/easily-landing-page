import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";

export default function Nav() {
  return (
    <nav className="border-b sticky bg-white top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=120"
            alt="Easily Beta Logo"
            width={120}
            height={40}
            className="h-10"
          />
        </Link>

        <div className="flex items-center gap-8">
          <a
            href="#hero"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            홈
          </a>
          <a
            href="#service"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            서비스
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button
            asChild
            className="bg-[#FF6B2B] text-white hover:bg-[#e55a1f]"
          >
            <Link href="/dashboard">대시보드</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

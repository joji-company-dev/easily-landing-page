"use client";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/app/_components/ui/accordion";
import { Button } from "@/app/_components/ui/button";

export default function Nav() {
  const menuItems = {
    hero: [
      { label: "Home", href: "#about" },
      { label: "Service", href: "#features" },
      { label: "Q&A", href: "#features" },
      { label: "Contact", href: "#features" },
    ],
    service: [
      { label: "Plans", href: "#plans" },
      { label: "Pricing", href: "#pricing" },
    ],
    contact: [
      { label: "Email Us", href: "#email" },
      { label: "Support", href: "#support" },
    ],
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        <div className="relative flex items-center gap-6">
          <Accordion
            type="single"
            collapsible
            className="flex items-center gap-6"
          >
            {Object.keys(menuItems).map((menu, index) => (
              <AccordionItem key={index} value={menu} className="relative">
                {/* 메인 항목 */}
                <AccordionTrigger
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => handleScrollToSection(`#${menu}`)}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </AccordionTrigger>

                {/* 세부 항목 */}
                <AccordionContent className="absolute top-full left-0 mt-2 flex gap-4 bg-white py-2 px-4 w-auto">
                  {menuItems[menu].map((item, subIndex) => (
                    <Link
                      key={subIndex}
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {/* 대시보드 버튼 */}
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

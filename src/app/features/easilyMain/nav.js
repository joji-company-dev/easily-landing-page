"use client";
import Link from "next/link";
import Image from "next/image";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  NavigationMenuContent, 
  NavigationMenuLink 
} from "@/app/_components/ui/navigation-menu";
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
          {Object.entries(menuItems).map(([menu, items]) => (
            <NavigationMenu key={menu}>
              <NavigationMenuList>
                <NavigationMenuItem key={menu} className="relative">
                  <NavigationMenuTrigger
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => handleScrollToSection(`#${menu}`)}
                  >
                    {menu.charAt(0).toUpperCase() + menu.slice(1)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="bg-white shadow-md rounded-md p-2 min-w-[8rem]">
                      {items.map((item, subIndex) => (
                        <li key={subIndex} className="py-1 px-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block text-sm text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}

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


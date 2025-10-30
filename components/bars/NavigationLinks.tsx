"use client";

import navigationLinks from "@/constants/navigationLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLinks() {
  const pathname = usePathname();
  return (
    <nav className="px-3 py-2 rounded-full bg-primary-500 flex-1 flex justify-between">
      {navigationLinks.map(({ route, label }) => {
        const isActive =
          (pathname.includes(route) && route !== "/") || pathname === route;
        return (
          <Link
            className={cn(
              "text-subtle-bold px-7 py-2 rounded-full  text-primary-100",
              isActive && "bg-secondary-500"
            )}
            key={label}
            href={route}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

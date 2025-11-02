"use client";

import navigationLinks from "@/constants/navigationLinks";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


export default function NavigationLinks({className = ""}) {
  const pathname = usePathname();
  return (
    <nav className={`${className} px-3 py-2 rounded-full bg-primary-500 flex-1 flex`}>
      {navigationLinks.map(({ route, label }) => {
        const isActive =
          (pathname.includes(route) && route !== "/") || pathname === route;
        return (
          <a
            className={cn(
              "text-subtle-bold flex-1 py-2 rounded-full text-primary-100 text-center hover:bg-secondary-900/50",
              isActive && "bg-secondary-500"
            )}
            key={label}
            href={route}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}

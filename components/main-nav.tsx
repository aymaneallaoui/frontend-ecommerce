"use client";

import { Category } from "@/types";
import Link from "next/link";
import { cn } from "@/utils/lib";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    isActive: pathName === `/category/${route.id}`,
  }));
  return (
    <div className=" mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => {
        return (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.isActive ? "text-black" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default MainNav;

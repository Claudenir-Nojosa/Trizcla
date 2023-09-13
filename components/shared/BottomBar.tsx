"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BottomBar() {
  const pathname = usePathname();
  return (
    <section className="bottombar  bg-light-4 dark:bg-slate-950">
      <div className="bottombar_container ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={25}
                height={25}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BottomBar;

import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../../app/(root)/toggle";

function TopBar() {
  return (
    <nav className="topbar flex md:px-16 md:py-10  px-3 ">
      <Link href="/" className="flex items-center xs:gap-2 gap-4  ">
        <Image
          src="./assets/logo.svg"
          alt="logo"
          width={110}
          height={110}
          className="xs:h-12 h-9"
        />
      </Link>
      <div className="flex items-center gap-5">
        <ModeToggle />
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <div className="hidden md:flex">
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger: "py-2 px-4 dark:bg-[#7f7979]",
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default TopBar;

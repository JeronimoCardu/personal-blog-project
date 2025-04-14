import { useColorMode } from "@/components/ui/color-mode";
import { Avatar, ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LuMoon, LuSun } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { Outlet } from "react-router-dom";
import Links from "./Links";

export default function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <>
      <div className="flex z-50 !mx-2 desktop:w-5xl desktop:!mx-auto tablet:!mx-10 !border-1 border-[var(--color-neutral200)]  dark:border-[var(--color-neutral700)] dark:text-neutral000 text-neutral700  dark:!bg-[var(--color-neutral800)] rounded-[0.625em] !my-4 !p-2 bg-[var(--color-neutral000)] justify-between ">
        <Avatar.Root shape="rounded" size="xl">
          <Avatar.Fallback name="Paulina" />
          <Avatar.Image src="src/assets/images/image-avatar.jpg" />
        </Avatar.Root>
        <div className="flex items-center gap-6">
          <div
            className={`${showMenu ? "tablet:!hidden flex justify-center items-center bg-[var(--color-neutral700)] cursor-pointer  w-[48px] h-[48px] rounded-[0.625em] dark:text-[var(--color-neutral900)] text-white dark:bg-[var(--color-neutral000)]" : "tablet:!hidden"}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <IoMdClose className="size-[2em]" /> : <RxHamburgerMenu className="size-[2em]"  />}
          </div>

          <Links divice="tablet" />
          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
              className="bg-[var(--color-neutral100)] dark:bg-[var(--color-neutral900)]"
              onClick={toggleColorMode}
              rounded={8}
              variant="outline"
              size="xl"
            >
              {colorMode == "dark" ? <LuSun /> : <LuMoon />}
            </IconButton>
          </ClientOnly>
        </div>
      </div>
      {showMenu && <Links divice="mobile" />}
      <div>
        <Outlet />
      </div>
    </>
  );
}

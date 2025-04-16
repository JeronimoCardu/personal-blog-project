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
      <div className="desktop:w-2xl desktop:!mx-auto tablet:!mx-10 dark:text-neutral000 text-neutral700 z-50 !mx-2 !my-4 flex justify-between rounded-[0.625em] !border-1 border-neutral-200 bg-white !p-2 transition ease-in-out dark:border-neutral-700 dark:!bg-neutral-800">
        <Avatar.Root shape="rounded" size="xl">
          <Avatar.Fallback name="Paulina" />
          <Avatar.Image src="src/assets/images/image-avatar.jpg" />
        </Avatar.Root>
        <div className="flex items-center gap-6">
          <div
            className={`${showMenu ? "tablet:!hidden flex h-[3em] w-[3em] cursor-pointer items-center justify-center rounded-[0.625em] bg-neutral-700 text-white dark:bg-white dark:text-neutral-900" : "tablet:!hidden"}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <IoMdClose className="size-[2em]" />
            ) : (
              <RxHamburgerMenu className="size-[2em]" />
            )}
          </div>

          <Links divice="tablet" />
          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
              className="bg-neutral-100 dark:bg-neutral-900"
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

import { useColorMode } from "@/components/ui/color-mode";
import { Avatar, ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";
export default function NavBar() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <div className="flex z-50 w-1/2 !border-1 border-neutral200  dark:border-neutral700 dark:text-neutral000 text-neutral700  dark:!bg-neutral800 !mx-auto rounded-[0.625em] !my-4 !p-2 bg-neutral000 justify-between ">
        <Avatar.Root shape="rounded" size="xl">
          <Avatar.Fallback name="Paulina" />
          <Avatar.Image src="src/assets/images/image-avatar.jpg" />
        </Avatar.Root> 
        <div className="flex items-center gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " !decoration-blue500 cursor-pointer !underline !underline-offset-3"
                : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " !decoration-blue500 cursor-pointer dark:!decoration-blue700 !underline !underline-offset-3"
                : ""
            }
            to={"/blog"}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " !decoration-blue500 cursor-pointer !underline !underline-offset-3"
                : ""
            }
            to={"/about"}
          >
            About me
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? " !decoration-blue500 cursor-pointer !underline !underline-offset-3"
                : ""
            }
            to={"/newsletter"}
          >
            Newsletter
          </NavLink>
          <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton onClick={toggleColorMode} variant="outline" size="xl">
              {colorMode == "dark" ? <LuSun /> : <LuMoon />}
            </IconButton>
          </ClientOnly>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

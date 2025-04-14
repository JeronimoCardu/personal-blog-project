import { NavLink } from "react-router-dom";
import "../index.css" 

type Props = {
  divice: string;
};

export default function Links({ divice }: Props) {
  return (
    <section
      className={`${divice == "mobile" ? "tablet:!hidden dark:bg-[var(--color-neutral800)] !mx-2 !p-2 rounded-[0.625em] justify-around gap-1.5 flex flex-col bg-[var(--color-neutral000)] !border-1 !border-[var(--color-neutral200)]" : "hidden tablet:flex gap-3"}`}
    >
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${divice == "mobile" ? "!font-bold" : "!decoration-[var(--color-blue500)] !underline !underline-offset-3"}`
            : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <hr className={`${divice != "mobile" && "hidden"}`} />
      <NavLink
        className={({ isActive }) =>
          isActive
        ? `${divice == "mobile" ? "!font-bold" : "!decoration-[var(--color-blue500)] !underline !underline-offset-3"}`
        : ""
        }
        to={"/blog"}
      >
        Blog
      </NavLink>
      <hr className={`${divice == "mobile" ? "" : "hidden"}`} />
      <NavLink
        className={({ isActive }) =>
          isActive
        ? `${divice == "mobile" ? "!font-bold" : "!decoration-[var(--color-blue500)] !underline !underline-offset-3"}`
        : ""
        }
        to={"/about"}
      >
        About me
      </NavLink>
      <hr className={`${divice == "mobile" ? "" : "hidden"}`} />
      <NavLink
        className={({ isActive }) =>
          isActive
        ? `${divice == "mobile" ? "!font-bold" : "!decoration-[var(--color-blue500)] !underline !underline-offset-3"}`
        : ""
        }
        to={"/newsletter"}
      >
        Newsletter
      </NavLink>
    </section>
  );
}

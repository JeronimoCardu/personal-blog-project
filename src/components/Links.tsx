import { NavLink } from "react-router-dom";
import "../index.css";

type Props = {
  divice: string;
};

export default function Links({ divice }: Props) {
  return (
    <section
      className={`${divice == "mobile" ? "tablet:!hidden textPreset7 !mx-2 flex flex-col justify-around gap-1.5 rounded-[0.625em] !border-1 !border-neutral-200 bg-white !p-2 dark:bg-neutral-800" : "tablet:flex textPreset8 hidden gap-3"}`}
    >
      <NavLink
        className={({ isActive }) =>
          isActive
            ? `${divice == "mobile" ? "!font-bold" : "!underline !decoration-blue-500 !underline-offset-3"}`
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
            ? `${divice == "mobile" ? "!font-bold" : "!underline !decoration-blue-500 !underline-offset-3"}`
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
            ? `${divice == "mobile" ? "!font-bold" : "!underline !decoration-blue-500 !underline-offset-3"}`
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
            ? `${divice == "mobile" ? "!font-bold" : "!underline !decoration-blue-500 !underline-offset-3"}`
            : ""
        }
        to={"/newsletter"}
      >
        Newsletter
      </NavLink>
    </section>
  );
}

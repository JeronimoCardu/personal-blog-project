import { Link } from "react-router-dom";

type Props = {
  part?: string;
};

function Media({ part }: Props) {
  return (
    <div className="flex gap-[0.75em]">
      <Link
        to="#"
        className={`${part == "footer" ? "!border-none !bg-transparent" : "!border-nautral-200 flex h-[2.5em] w-[2.5em] items-center justify-center rounded-[0.625em] !border-1 bg-white p-2 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:!text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-700"}`}
      >
        <img
          className="dark:invert"
          src="/src/assets/images/logo-x.svg"
          alt="X"
        />
      </Link>
      <Link
        to="#"
        className={`${part == "footer" ? "!border-none !bg-transparent" : "!border-nautral-200 flex h-[2.5em] w-[2.5em] items-center justify-center rounded-[0.625em] !border-1 bg-white p-2 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:!text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-700"}`}
      >
        <img
          className="dark:invert"
          src="/src/assets/images/logo-github.svg"
          alt="GitHub"
        />
      </Link>
      <Link
        to="#"
        className={`${part == "footer" ? "!border-none !bg-transparent" : "!border-nautral-200 flex h-[2.5em] w-[2.5em] items-center justify-center rounded-[0.625em] !border-1 bg-white p-2 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:!text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-700"}`}
      >
        <img
          className="dark:invert"
          src="/src/assets/images/logo-linkedin.svg"
          alt="LinkedIn"
        />
      </Link>
      <Link
        to="#"
        className={`${part == "footer" ? "!border-none !bg-transparent" : "!border-nautral-200 flex h-[2.5em] w-[2.5em] items-center justify-center rounded-[0.625em] !border-1 bg-white p-2 hover:border-neutral-300 hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:!text-white dark:hover:border-neutral-600 dark:hover:bg-neutral-700"}`}
      >
        <img
          className="dark:invert"
          src="/src/assets/images/logo-frontend-mentor.svg"
          alt="FrontendMentor"
        />
      </Link>
    </div>
  );
}

export default Media;

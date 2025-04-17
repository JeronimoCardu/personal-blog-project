import formatDate from "@/hooks/formatDate";
import { NavLink } from "react-router-dom";

type Props = {
  title?: string | undefined;
  slug?: string | undefined;
  publishedAt?: string | undefined;
  description?: string | undefined;
};

function Article({ title, slug, publishedAt, description }: Props) {
  const date = formatDate(String(publishedAt));
  return (
    <NavLink className="!space-y-[0.5em]" to={`/${String(slug)}`}>
      <h1 className="textPreset5 cursor-pointer text-neutral-700 hover:underline hover:underline-offset-2 hover:opacity-70 dark:text-white dark:hover:opacity-80">
        {title}
      </h1>
      <p className="textPreset8Italic text-neutral-600 dark:text-neutral-400">
        {date}
      </p>
      {description && (
        <p className="textPreset7 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </NavLink>
  );
}

export default Article;

import { ArticleProps } from "@/types/useArticle";

type Props = {
  article: ArticleProps;
};

function Article({ article }: Props) {
  const date = new Date(article.publishedAt);

  const formatDate = new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .toLowerCase();
  return (
    <article className="!mb-[2em] !space-y-[0.5em]">
      <h1 className="textPreset5 cursor-pointer text-neutral-700 hover:underline hover:underline-offset-2 hover:opacity-70 dark:text-white dark:hover:opacity-80">
        {article.title}
      </h1>
      <p className="textPreset8Italic text-neutral-600 dark:text-neutral-400">
        {formatDate}
      </p>
    </article>
  );
}

export default Article;

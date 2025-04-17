import articles from "../../data.json";
import formatDate from "@/hooks/formatDate";
import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown";
import Footer from "@/components/Footer";

type Props = {
  slug?: string | undefined;
};

export default function SingleBlog({ slug }: Props) {
  const components: Components = {
    h1: (props) => (
      <h1 className="textPreset1 text-neutral-700 dark:text-white" {...props} />
    ),
    h2: (props) => (
      <h2 className="textPreset2 text-neutral-700 dark:text-white" {...props} />
    ),
    h3: (props) => (
      <h3 className="textPreset3 text-neutral-700 dark:text-white" {...props} />
    ),
    h4: (props) => (
      <h4 className="textPreset4 text-neutral-700 dark:text-white" {...props} />
    ),
    h5: (props) => (
      <h5 className="textPreset5 text-neutral-700 dark:text-white" {...props} />
    ),
    h6: (props) => (
      <h6 className="textPreset6 text-neutral-700 dark:text-white" {...props} />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    em: (props) => (
      <em className="text-neutral-600 dark:text-neutral-400" {...props} />
    ),
    ul: (props) => (
      <ul
        className="textPreset7 !list-disc !pl-6 text-neutral-600 dark:text-neutral-400"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="textPreset7 !list-decimal !pl-6 text-neutral-600 dark:text-neutral-400"
        {...props}
      />
    ),
    hr: () => <hr className="!my-6 border-t border-dashed border-gray-300" />,
    blockquote: (props) => (
      <blockquote className="!border-l-4 border-neutral-400 dark:border-neutral-600 !pl-4 italic text-neutral-700 dark:text-white !my-4" {...props} />
    ),
    p: (props) => (
      <p
        className="textPreset7 !mb-4 text-neutral-600 dark:text-neutral-400"
        {...props}
      />
    ),
  };
  return (
    <>
      {articles.map((art, index) => {
        if (art.slug == slug) {
          return (
            <article key={index}>
              <h1 className="textPreset1 cursor-pointer text-neutral-700 hover:underline hover:underline-offset-2 hover:opacity-70 dark:text-white dark:hover:opacity-80">
                {art.title}
              </h1>
              <p className="textPreset8Italic text-neutral-600 dark:text-neutral-400">
                {formatDate(String(art.publishedAt))}
              </p>
              <ReactMarkdown components={components}>
                {art.content}
              </ReactMarkdown>
              <hr className="!my-4 border-t border-dashed border-gray-300" />
              <Footer />
            </article>
          );
        }
      })}
    </>
  );
}

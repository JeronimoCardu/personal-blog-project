import Article from "@/components/Article";
import articles from "../../data.json";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <>
      <header className="!py-4">
        <h1 className="textPreset2 text-nautral-700">
          My articles{" "}
          <span className="text-transparent underline !decoration-blue-500 underline-offset-3 dark:!decoration-blue-700">
            00
          </span>
        </h1>
        <p className="textPreset7 text-neutral-600 dark:text-neutral-400">
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </header>
      <hr />
      <section>
        {articles.map((art, index) => (
          <div key={index}>
            <div className="!my-5">
              <Article
                slug={art.slug}
                title={art.title}
                publishedAt={art.publishedAt}
                description={art.description}
              />
            </div>
            <hr />
          </div>
        ))}
      </section>
      <Footer />
      <main></main>
    </>
  );
}

import Media from "@/components/Media";
import articles from "../../../starter-code/data.json";
import Article from "@/components/Article";
import { NavLink } from "react-router-dom";
import Footer from "@/components/Footer";
import { useColorMode } from "@/components/ui/color-mode";

export default function Home() {
  const { colorMode } = useColorMode();
  return (
    <div className="desktop:w-2xl desktop:!mx-auto tablet:!mx-10 !mx-4 !border-x-1 !px-2">
      <img
        className="desktop:!block pointer-events-none absolute left-[-15%] !hidden w-[30%] max-w-none select-none"
        src={`/src/assets/images/pattern-${colorMode}.svg`}
        alt=""
      />
      <img
        className="desktop:!block pointer-events-none absolute top-0 right-[-15%] !hidden w-[30%] max-w-none select-none"
        src={`/src/assets/images/pattern-${colorMode}.svg`}
        alt=""
      />
      <main>
        <section className="!py-10">
          <h1 className="textPreset2 text-neutral-700 underline !decoration-blue-500 decoration-10 -underline-offset-0 dark:text-white dark:!decoration-blue-700">
            Hi, I’m Paulina 👋
          </h1>
          <p className="textPreset7 !my-4 text-neutral-700 dark:text-neutral-400">
            I’m on a journey to become a front-end web developer. I love
            building little projects, trying out new coding techniques, and
            sharing what I learn along the way. When I’m not at my desk, you’ll
            find me reading, hiking through the mountains, or challenging myself
            on rock-climbing walls.
            <br />
            <br />I started this blog to document my progress, keep myself
            accountable, and hopefully inspire anyone else who’s learning to
            code. Welcome to my corner of the internet, and thanks for stopping
            by!
          </p>
          <section className="!my-4">
            <Media />
          </section>
        </section>
        <hr />
        <section className="!my-10">
          <h1 className="textPreset2 !mb-[1em] text-neutral-700 dark:text-white">
            Latest Articles{" "}
            <span className="text-transparent underline !decoration-blue-500 underline-offset-3 dark:!decoration-blue-700">
              00
            </span>
          </h1>
          {articles.map((art, index) => {
            if (index < 5) {
              return <Article article={art} />;
            }
          })}
          <NavLink
            className="textPreset6 cursor-pointer text-neutral-700 !underline !decoration-blue-500 !decoration-3 !underline-offset-3 dark:text-white dark:!decoration-blue-700"
            to={"/Blog"}
          >
            View all articles
          </NavLink>
        </section>
        <hr />
      </main>
      <Footer />
    </div>
  );
}

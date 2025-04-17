import Footer from "@/components/Footer";
import Media from "@/components/Media";
import imgWorkspace from "../../assets/images/image-workspace-large.jpg";

export default function About() {
  return (
    <>
      <main>
        <h1 className="textPreset2 !mb-8 text-neutral-700 underline !decoration-blue-500 !decoration-10 underline-offset-0 dark:text-white dark:!decoration-blue-700">
          About Me
        </h1>
        <p className="textPreset7 !mb-8 text-neutral-600 dark:text-neutral-400">
          Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
          creativity and problem-solving. That’s what led me to the world of
          front-end web development. There’s something magical about seeing an
          idea come to life in the browser—whether it’s a simple layout
          experiment or a complex interface for a bigger project.
        </p>
        <p className="textPreset7 !mb-8 text-neutral-600 dark:text-neutral-400">
          When I’m not coding, I love getting lost in a good book. My taste is
          pretty eclectic: I’ll happily read everything from fantasy novels to
          biographies of tech pioneers. Reading helps me unwind and often sparks
          new ideas for my coding projects.
        </p>
        <p className="textPreset7 !mb-8 text-neutral-600 dark:text-neutral-400">
          Another big passion of mine is the great outdoors. Hiking allows me to
          disconnect from the digital world and reconnect with nature. I love
          challenging hikes with rewarding views at the top. And if I’m not on
          the trails, you might catch me rock climbing. The combination of
          mental focus and physical endurance is a perfect parallel to tackling
          tough coding challenges!
        </p>
        <p className="textPreset7 !mb-8 text-neutral-600 dark:text-neutral-400">
          Some of my favorite books:
        </p>
        <ul className="!mb-8 !list-disc !pl-6 text-neutral-600 dark:text-neutral-400">
          <li className="textPreset7">
            <span className="textPreset7SemiBold">
              “The Pragmatic Programmer”{" "}
            </span>
            by Andrew Hunt and David Thomas (for helpful insights into software
            development)
          </li>
          <li className="textPreset7">
            <span className="textPreset7SemiBold">“Ready Player One” </span>
            by Ernest Cline (for some futuristic escapism)
          </li>
          <li className="textPreset7">
            <span className="textPreset7SemiBold">“The Hobbit” </span>by J.R.R.
            Tolkien (for a bit of fantasy fun)
          </li>
          <li className="textPreset7">
            <span className="textPreset7SemiBold">“Educated” </span>by Tara
            Westover (for incredible inspiration)
          </li>
        </ul>
        <section>
          <p className="textPreset7 !mb-8 text-neutral-600 dark:text-neutral-400">
            I absolutely love my workspace as a place that inspires me to do my
            best work, so I thought I’d share it with you:
          </p>
          <img
            className="!mb-8 rounded-[.3em]"
            src={imgWorkspace}
            alt="workspace"
          />
          <p className="textPreset7 !mb-8 text-neutral-600 dark:text-neutral-400">
            I hope this blog not only documents my growth but also helps others
            see that coding can be for everyone. Thanks for joining me on this
            journey!
          </p>
        </section>
        <section>
          <h1 className="textPreset4 !mb-2 text-neutral-700 dark:text-white">
            Follow me
          </h1>
          <Media />
          <hr className="!mt-6" />
        </section>
      </main>
      <Footer />
    </>
  );
}

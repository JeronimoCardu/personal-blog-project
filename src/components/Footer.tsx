import Media from "./Media";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between !py-4">
      <p className="textPreset8 text-neutral-600 dark:text-neutral-400">
        Made with ❤️ and ☕
      </p>
      <Media part="footer" />
    </footer>
  );
}

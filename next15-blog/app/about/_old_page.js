import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) throw new Error("Error in About page!!");

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
        sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius
        a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy
        molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
      </p>
      <Link href="/about/projects">Projects</Link>
    </div>
  );
}

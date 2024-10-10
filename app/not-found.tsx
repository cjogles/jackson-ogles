import { Link } from "@nextui-org/link";
import { title, subtitle } from "./_components/primitives";

export default function NotFound() {
  return (
    <section className="flex py-8 md:py-10 items-center">
      <div className="inline-block w-9/12 justify-center pl-3">
        <h1 className={title()}>Can not find requested resource.&nbsp;</h1>
        <br />
        <br />
        <span className="animate-pulse"><Link href="/"><h1 className={title({ color: "blue" })}>Return Home</h1></Link></span>
        <br />
        <br />
        <h2 className={subtitle({ class: "mt-4" })}>
          Jackson&apos;s Portfolio has more to show you 🙌
        </h2>
      </div>
    </section>
  );
}

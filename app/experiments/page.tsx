import HtmlText from "@/components/html-text";
import { Experiments } from "@/data/experiments";
import Link from "next/link";

export const metadata = {
  title: 'Experiments | Adrian Bradley',
}


export default function Page() {
  return (
    <div className="max-w-4xl mb-10">
      <h1 className="lg:text-4xl text-3xl"><HtmlText htmlTag="h1">Experiments</HtmlText></h1>
      <h2 className="text-2xl mb-5"><HtmlText htmlTag="h2">Not-so production ready projects & demos</HtmlText></h2>

      <p className="mb-3"><HtmlText htmlTag="p">Listed below is a showcase of various smaller projects, experiments, or demos that were put together to <span className="text-accent">reinforce a concept</span>, or test out new technologies. The ones below were of <span className="text-accent">particular interest</span>.</HtmlText></p>

      <HtmlText htmlTag="ul">
        <ul className="lg:ps-5 ps-2 border-l-1 ms-1">
          {Experiments.map(({ key, slug, title }) => (
            <li key={key}>
              <HtmlText htmlTag="li">
                <Link className="text-brand underline transition hover:text-accent" href={"/experiments/" + slug}>{title}</Link>
              </HtmlText>
            </li>
          ))}
        </ul>
      </HtmlText>

    </div>
  );
}
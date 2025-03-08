import HtmlText from "@/components/html-text";
import { Projects } from "@/data/projects";
import Link from "next/link";

export const metadata = {
  title: 'Projects | Adrian Bradley',
}

export default function Page() {
  return (
    <div className="max-w-4xl mb-10">
      <h1 className="lg:text-4xl text-3xl"><HtmlText htmlTag="h1">Projects</HtmlText></h1>
      <h2 className="text-2xl mb-5"><HtmlText htmlTag="h2">Deployed & production ready projects.</HtmlText></h2>

      <p className="mb-3"><HtmlText htmlTag="p">Listed below is a collection of projects that I have been involved in either as the <span className="text-accent">technical lead</span>, or <span className="text-accent">primary developer</span>. These projects are some of the more interesting or unique ones.</HtmlText></p>

      <HtmlText htmlTag="ul">
        <ul className="lg:ps-5 ps-2 border-l-1 ms-1">
          {Projects.map(({ key, slug, title }) => (
            <li key={key}>
              <HtmlText htmlTag="li">
                <Link className="text-brand underline transition hover:text-accent" href={"/projects/" + slug}>{title}</Link>
              </HtmlText>
            </li>
          ))}
        </ul>
      </HtmlText>

    </div>
  );
}
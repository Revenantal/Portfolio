import { Projects } from "@/data/projects";
import { Links } from "@/interfaces/experiment";
import { notFound } from 'next/navigation';
import HtmlText from '@/components/html-text';
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const slug = (await params).slug;
  const { title, intro } = Projects.find(project => project.slug === slug) || notFound();

  return {
    title: title,
    description: intro,
  }
}

export default async function Project(
  { params }: Props) {

  const slug = (await params).slug;
  const { title, intro, links, content } = Projects.find(project => project.slug === slug) || notFound();

  return (
    <div className="max-w-4xl mb-10">
      <h1 className="text-4xl"><HtmlText htmlTag="h1">{title}</HtmlText></h1>
      {intro && <h2 className="text-2xl mb-5"><HtmlText htmlTag="h2">{intro}</HtmlText></h2>}

      <div className="mb-5">{content}</div>

      {links &&
        <HtmlText htmlTag="ul" className="mb-5 block">
          <ul className="ps-5 border-l-1 ms-1">
            {links.map(({ key, url, label, target }: Links) => (
              <li key={key}>
                <HtmlText htmlTag="li">
                  <a className="text-brand underline transition hover:text-accent" href={url} target={target || "_blank"}>{label}</a>
                </HtmlText>
              </li>
            ))}
          </ul>
        </HtmlText>
      }
    </div>
  );
}
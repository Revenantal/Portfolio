import ExperimentInterface from "@/interfaces/experiment";
import HtmlText from "@/components/html-text";

export const Experiments: ExperimentInterface[] = [
  {
    key: 'experiments-interactive-portfolio',
    slug: 'interactive-portfolio',
    title: 'Interactive Portfolio',
    links: [{
      key: 'interactive-portfolio-url',
      url: 'https://sidescroller.adrianbradley.ca/',
      label: 'Project URL',
      target: '_blank',
    }, {
      key: 'interactive-portfolio-repo',
      url: 'https://github.com/Revenantal/sidescroller-portfolio',
      label: 'Repo URL',
    }],
    intro: 'A side-scrolling portfolio.',
    content: (
      <div>
        <p className="mb-3">
          <HtmlText htmlTag="p">
            This project was incredibly fun to work on, built using <span className="text-accent">Greensock</span> and <span className="text-accent">Bootstrap</span>. However, maintaining and updating it proved to be quite challenging. The concept was centered around a side-scrolling game that allowed users to explore different sections of the portfolio. It was a fantastic learning experience, especially in mastering Greensock for <span className="text-accent">animations and transitions</span>.
          </HtmlText>
        </p>
        <p>
          <HtmlText htmlTag="p">
            This experience led me to start approaching some more modern, and standardized ways of approaching a project like this, which has since led me into Next.JS and React. I do plan to revisit this project in the near future with a more modern approach. However it was a great <span className="text-accent">learning experience</span> and a fun project to work on.
          </HtmlText>
        </p>
      </div>
    )
  }, {
    key: 'experiments-igdb',
    slug: 'igdb',
    title: 'Internet Game Database (IGDB)',
    links: [{
      key: 'igdb-url',
      url: 'https://igdb-nu.vercel.app/games',
      label: 'Project URL',
      target: '_blank',
    }, {
      key: 'igdb-repo',
      url: 'https://github.com/Revenantal/igdb',
      label: 'Repo URL',
    }],
    intro: 'A small test bed to learn Next.js, React, and Typescript.',
    content: (
      <div>
        <HtmlText htmlTag="p">
          This was a small project put together based on the <a className="text-brand underline transition hover:text-accent" href="https://api-docs.igdb.com/" target="_blank">IGDB API</a> to further my learning with Next.js, React and TypeScript in attempting a <span className="text-accent">small scale, real world type project</span>. While this project was never finished, it was a <span className="text-accent">great learning experience</span>. This specific API has some pretty strict requirements regarding API hit rates which forced a better understanding of how Next.js handles API caching.
        </HtmlText>
      </div>
    )
  }
];

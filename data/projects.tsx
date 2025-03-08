import ProjectInterface from "@/interfaces/experiment";
import HtmlText from "@/components/html-text";

export const Projects: ProjectInterface[] = [
  {
    key: 'projects-portfolio',
    slug: 'portfolio',
    title: 'Portfolio',
    links: [{
        key: 'portfolio-url',
        url: 'https://adrianbradley.ca',
        label: 'Project URL',
      }, {
        key: 'portfolio-repo',
        url: 'https://github.com/Revenantal/portfolio',
        label: 'Repo URL',
    }],
    intro: 'A personal portfolio website to showcase my work and experiments.',
    content: (
      <div>
        <HtmlText htmlTag="p">
          This is the website you're currently on! This is a <span className="text-accent">personal portfolio website</span> that I built to showcase my work and experiments. This website is built using <span className="text-accent">Next.js</span> and <span className="text-accent">TailwindCSS</span>. This website is designed to be a <span className="text-accent">living document</span> that I can update and expand as I continue to grow and learn. It's built to mimic the look and feel of VSCode.
        </HtmlText>
      </div>
    )
  }, {
    key: 'decks',
    slug: 'decks',
    title: 'Hickory Dickory Decks',
    intro: `Canada's largest deck builder required a custom CRM and franchise management system to manage their operations.`,
    content: (
      <div>
        <HtmlText htmlTag="p">
          <span className="text-accent">Hickory Dickory Decks</span> is Canada's largest deck builder, and required a <span className="text-accent">custom CRM and franchise management system</span> to manage their operations. This system also required some deeper <span className="text-accent">integrations</span> with their existing (and upcoming) website through APIs. This system was designed to be a central hub for all of their franchisees, and to provide a single source of truth for all of their data. As this is a private system owned by the client, I'm unable to showcase the codebase or the system itself. However it was a <span className="text-accent">Laravel</span> based project that continues to expand over the years as the client continues to grow and identifies additional features to add to the platform.
        </HtmlText>
      </div>
    )
  }, {
    key: 'wow-portfolio',
    slug: 'wow-mobile',
    title: 'WOW! mobile boutique',
    links: [{
      key: 'project-url',
      url: 'https://wowmobile.ca',
      label: 'Project URL',
      target: "_blank",
    }],
    intro: 'A front facing marketing website for a Canadian mobile phone retailer.',
    content: (
      <div>
        <HtmlText htmlTag="p">
          WOW! mobile boutique is a <span className="text-accent">Canadian-wide mobile phone retailer</span> that required a new, refreshed front <span className="text-accent">facing marketing website</span>. This website was required to <span className="text-accent">pull content from their existing API</span>, provided by <a href="https://www.iqmetrix.com/" target="_blank" className="text-brand underline transition hover:text-accent">iQmetrix</a>. This is a project that continues to grow and expand as new ways to improve and optimize the shopping experience are identified to best serve WOW! mobile boutique's customers. This was an absolute blast of a project to work on, and I'm proud of the work that was done to bring this project to life. This project was built in <span className="text-accent">Laravel</span> with <a href="https://octobercms.com/" target="_blank" className="text-brand underline transition hover:text-accent">October CMS</a>.
        </HtmlText>
      </div>
    )
  },
];

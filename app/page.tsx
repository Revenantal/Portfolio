import HtmlText from "@/components/html-text";
import { PiBird } from "react-icons/pi";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import ProgressBar from "@/components/ui/progress-bar";
import { Experiments } from "@/data/experiments";
import { Projects } from "@/data/projects";
import Link from "next/link";

export const metadata = {
  title: 'Adrian Bradley',
}


const technologies = [
  {
    key: 'javascript',
    name: 'JavaScript',
    percentage: 100
  }, {
    key: 'css',
    name: 'CSS',
    percentage: 100
  }, {
    key: 'wordpress',
    name: 'WordPress',
    percentage: 95
  }, {
    key: 'laravel',
    name: 'Laravel',
    percentage: 90
  }, {
    key: 'php',
    name: 'PHP',
    percentage: 90
  }, {
    key: 'bootstrap',
    name: 'Bootstrap',
    percentage: 85
  }, {
    key: 'tailwind',
    name: 'Tailwind CSS',
    percentage: 75
  }, {
    key: 'mysql',
    name: 'MySQL',
    percentage: 65
  }, {
    key: 'nextjs',
    name: 'Next.js',
    percentage: 60
  }, {
    key: 'react',
    name: 'React',
    percentage: 60
  }, {
    key: 'typescript',
    name: 'TypeScript',
    percentage: 60
  },
];

const capabilities = [
  {
    key: 'communication',
    name: 'Communication',
    percentage: 100
  }, {
    key: 'problemSolving',
    name: 'Problem Solving',
    percentage: 95
  }, {
    key: 'adaptability',
    name: 'Adaptability',
    percentage: 90
  }, {
    key: 'ecosystems',
    name: 'Ecosystems',
    percentage: 90
  }, {
    key: 'management',
    name: 'Team Management',
    percentage: 80
  }, {
    key: 'planning',
    name: 'Planning',
    percentage: 80
  }, {
    key: 'design',
    name: 'Design',
    percentage: 70
  }, {
    key: 'creativity',
    name: 'Creativity',
    percentage: 70
  }, {
    key: 'videoGames',
    name: 'Video Games',
    percentage: 10
  }
];

const experience = [
  {
    key: 'rocketMarketing3',
    name: 'Rocket Marketing',
    role: 'Manager of Technical Solutions',
    year: '2023-Present',
    resposibilities: [
      'Manage hosting ecosystem to ensure uptime and reliability for operations.',
      'Collaborate with clients to identify needs and define tailored technical solutions.',
      'Lead project architecture and ecosystem definition, ensuring scalable and efficient designs.',
      'Research and implement emerging technologies to enhance operations and client solutions.',
      'Manage the development team, providing direction, mentorship, and performance oversight.',
      'Providing emergency support and triage for critical operational issues.',
      'Maintaining a standardized code base across projects to ensure consistency and quality.',
    ]
  }, {
    key: 'rocketMarketing2',
    name: 'Rocket Marketing',
    role: 'Lead Developer',
    year: '2018-2023',
    resposibilities: [
      'Developed and implemented a scalable hosting ecosystem to support future growth.',
      'Collaborated with clients to identify needs and tailor technical solutions.',
      'Managed and mentored development team, ensuring alignment with project goals.',
      'Identified and executed growth plans for transitioning legacy assets into modern solutions.',
      'Implemented a WordPress- first strategy for future company projects.',
      'Integrated and evolved Laravel as a core development solution for the company.',
    ]
  }, {
    key: 'rocketMarketing1',
    name: 'Rocket Marketing',
    role: 'Web Developer',
    year: '2017-2018',
    resposibilities: [
      'Maintained and enhanced.NET projects to ensure performance and reliability.',
      'Managed and supported a Windows hosting ecosystem for seamless operation.',
      'Developed and built WordPress websites, ensuring functionality and user experience.',
    ]
  }, {
    key: 'designThinking',
    name: 'The Design Thinking Agency',
    role: 'Web Developer',
    year: '2016',
    resposibilities: [
      'Collaborated with creative teams to design and deliver innovative web - based concepts.',
      'Communicated with clients to grasp project needs and enhance their brand identity.',
      'Enhanced website usability and user experience for existing sites.',
      'Completed tasks efficiently and independently, ensuring timely project delivery.',
    ]
  }
]


export default function Home() {
  return (
    <div className="max-w-4xl mb-10">
      <h1 className="lg:text-4xl text-3xl"><HtmlText htmlTag="h1">Hello! I&apos;m <br className="block sm:hidden" /><span className="text-accent">Adrian Bradley</span></HtmlText></h1>
      <h2 className="text-2xl mb-5"><HtmlText htmlTag="h2">Full Stack Developer, WordPress Specialist</HtmlText></h2>

      <p className="mb-3"><HtmlText htmlTag="p">I&apos;m a highly versatile, and skilled web developer with nearly 10 years of experience working in <span className="text-accent">Digital Marketing</span>. This experience has helped me gain a deep understanding of the <span className="text-accent">practical needs</span> and <span className="text-accent">requirements</span> of a project, focusing on purpose-driven development rather than development for its own sake.</HtmlText></p>
      <p className="mb-3"><HtmlText htmlTag="p">Over the past nearly decade, I&apos;ve built an extensive skill set in various technologies, with my core expertise lying in the following: <span className="text-accent">React</span>, <span className="text-accent">Laravel</span>, <span className="text-accent">Tailwind CSS</span>, <span className="text-accent">Bootstrap</span>, and <span className="text-accent">WordPress</span>.</HtmlText></p>
      <p className="mb-3"><HtmlText htmlTag="p">These skills, combined with my experience in <span className="text-accent">digital marketing</span> have shaped me into a <span className="text-accent">solution-driven developer</span> focused on identifying the best approach for each unique challenge, rather than applying a one-size-fits-all solution.</HtmlText></p>
      <p className="mb-3"><HtmlText htmlTag="p">Outside of work, I&apos;m pretending to be good at <span className="text-accent">video games</span>, or hanging out with my <span className="text-accent">farm of animals</span>. Though to be honest, it&apos;s usually both.</HtmlText></p>


      <h3 className="text-2xl mt-10"><HtmlText htmlTag="h2">Experiments</HtmlText></h3>
      <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
        <p className="mb-3"><HtmlText htmlTag="p">Here is a selection of my recent <Link className="text-brand underline transition hover:text-accent" href="/experiments">experiments</Link>—short-term, unfinished projects primarily focused on <span className="text-accent">learning</span> and <span className="text-accent">exploration</span>.</HtmlText></p>
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

      <h3 className="text-2xl mt-10"><HtmlText htmlTag="h2">Projects</HtmlText></h3>
      <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
        <p className="mb-3"><HtmlText htmlTag="p"><Link className="text-brand underline transition hover:text-accent" href="/projects">Projects</Link> are akin to experiments but generally have a larger objective or goal. They are usually production-ready or near completion.</HtmlText></p>
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


      <h3 className="text-2xl mt-10"><HtmlText htmlTag="h2">Technologies</HtmlText></h3>
      <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
        <p className="mb-3"><HtmlText htmlTag="p">With extensive experience in <span className="text-accent">digital marketing,</span> which prioritizes <span className="text-accent">quick and efficient turnarounds</span>, I&apos;ve adapted to working with a wide range of technologies.</HtmlText></p>
        <HtmlText htmlTag="ul">
          <div className="lg:ps-5 ps-2 border-l-1 ms-1">
            {technologies.map(({ key, name, percentage }) => (
              <div className="block" key={key}>
                <HtmlText htmlTag="li">
                  <div className="inline-block lg:w-1/2 w-4/5">
                    <div className="flex justify-between">
                      <div className="text-accent flex">{name}</div>
                      <div className="flex"><ProgressBar percentage={percentage} />
                      </div>
                    </div>
                  </div>
                </HtmlText>
              </div>
            ))}
          </div>
        </HtmlText>
      </div>

      <h3 className="text-2xl mt-10"><HtmlText htmlTag="h2">Capabilities</HtmlText></h3>
      <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
        <p className="mb-3"><HtmlText htmlTag="p">A key quality of being a <span className="text-accent">strong developer</span> is the ability to break down complex problems into manageable challenges. A <span className="text-accent">great developer</span> can then communicate these challenges clearly, ensuring that non-technical team members fully grasp them.</HtmlText></p>
        <HtmlText htmlTag="ul">
          <div className="lg:ps-5 ps-2 border-l-1 ms-1">
            {capabilities.map(({ key, name, percentage }) => (
              <div className="block" key={key}>
                <HtmlText htmlTag="li">
                  <div className="inline-block lg:w-1/2 w-4/5">
                    <div className="flex justify-between">
                      <div className="text-accent flex">{name}</div>
                      <div className="flex"><ProgressBar percentage={percentage} /></div>
                    </div>
                  </div>
                </HtmlText>
              </div>
            ))}
          </div>
        </HtmlText>
      </div>

      <h3 className="text-2xl mt-10"><HtmlText htmlTag="h2">Formal Stuff</HtmlText></h3>
      <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
        <p className="mb-3"><HtmlText htmlTag="p">While not a complete representation of my <span className="text-accent">experience and learning</span>, here is a solid snapshot.</HtmlText></p>
        <h4 className="text-xl mt-5"><HtmlText htmlTag="h3">Experience</HtmlText></h4>

        <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
          {experience.map(({ key, name, role, year, resposibilities }) => (
            <div className="block border-s-2 border-brand ps-3 mb-4" key={key}>
              <div><span className="text-accent text-lg">{name}</span> ({year})</div>
              <div>{role}</div>
              <HtmlText htmlTag="ul">
                <ul className="lg:ps-5 ps-2 border-l-1 ms-1">
                  {resposibilities.map((responsibility, index) => (
                    <li key={index}><HtmlText htmlTag="li">{responsibility}</HtmlText></li>
                  ))}
                </ul>
              </HtmlText>
            </div>
          ))}
        </div>

        <h4 className="text-xl mt-5"><HtmlText htmlTag="h3">Education</HtmlText></h4>
        <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
          <div className="block border-s-2 border-brand ps-3 mb-4">
            <p><span className="text-accent">Mohawk College</span> (2012-2015)<br />Advanced Diploma, Software Development</p>
          </div>
        </div>
      </div>



      <h3 className="text-2xl mt-10"><HtmlText htmlTag="h2">API Endpoints</HtmlText></h3>
      <div className="lg:ps-5 ps-2 pt-5 border-l-1 ms-1">
        <p className="mb-3"><HtmlText htmlTag="p">If my skill set aligns with what <span className="text-accent">you&apos;re looking for</span>, feel free to reach out to me through any of the following methods.</HtmlText></p>
        <HtmlText htmlTag="ul">
          <ul className="lg:ps-5 ps-2 border-l-1 ms-1">
            <li><HtmlText htmlTag="li"><MdAlternateEmail className="inline me-3" /><a className="text-brand underline transition hover:text-accent" href="mailto:hello@adrianbradley.ca">Email</a></HtmlText></li>
            <li><HtmlText htmlTag="li"><FaDiscord className="inline me-3" /><a className="text-brand underline transition hover:text-accent" href="https://discordapp.com/users/180462379904008193">Discord</a></HtmlText></li>
            <li><HtmlText htmlTag="li"><FaLinkedinIn className="inline me-3" /><a className="text-brand underline transition hover:text-accent" href="https://www.linkedin.com/in/adrian2433/" target="_blank">LinkedIn</a></HtmlText></li>
            <li><HtmlText htmlTag="li"><GrGithub className="inline me-3" /><a className="text-brand underline transition hover:text-accent" href="https://github.com/Revenantal" target="_blank">GitHub</a></HtmlText></li>
            <li><HtmlText htmlTag="li"><PiBird className="inline me-3" /><a className="text-brand underline transition hover:text-accent" href="https://flypigeon.co/" target="_blank">Carrier Pigeon</a></HtmlText></li>
          </ul>
        </HtmlText>
      </div>

    </div>
  );
}

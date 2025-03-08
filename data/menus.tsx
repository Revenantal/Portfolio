import { VscSourceControl, VscFiles, VscAccount } from "react-icons/vsc";
import { MenuItem } from "interfaces/menu-item";
import { Experiments } from "./experiments";
import { Projects } from "./projects";

export const IconSidebarPrimaryMenu: MenuItem[] = [
  {
    key: 'icon-sidebar-primary-menu-explorer',
    href: "/",
    target: "_self",
    label: 'Explorer',
    icon: <VscFiles />
  }, {
    key: 'icon-sidebar-primary-menu-github',
    href: "https://github.com/Revenantal",
    target: "_blank",
    label: 'GitHub',
    icon: <VscSourceControl />
  }
];

export const IconSidebarSecondaryMenu: MenuItem[] = [
  {
    key: 'icon-sidebar-secondary-menu-linkedin',
    href: "https://www.linkedin.com/in/adrian2433/",
    target: "_blank",
    label: 'Linkedin',
    icon: <VscAccount />
  }, /*{
        key: 'icon-sidebar-secondary-menu-settings',
        href: "/settings",
        target: "_self",
        label: 'Settings',
        icon: <VscSettingsGear />
    }*/
]

export const TreeSidebarMenu: MenuItem[] = [
  {
    key: 'tree-sidebar-menu-index',
    href: "/",
    target: "_self",
    label: 'index.html',
  }, {
    key: 'tree-sidebar-menu-resume',
    href: "/adrian-bradley-resume.pdf",
    target: "_blank",
    label: 'resume.pdf',
  }, {
    key: 'tree-sidebar-menu-experiments',
    href: "/experiments",
    target: "_self",
    label: 'experiments',
    children: Experiments.map(({ key, slug }) => ({
      key: `tree-sidebar-menu-experiments-${key}`,
      href: `/experiments/${slug}`,
      target: "_self",
      label: `${slug}.html`,
    }))
  }, {
    key: 'tree-sidebar-menu-about',
    href: "/projects",
    target: "_self",
    label: 'projects',
    children: Projects.map(({ key, slug }) => ({
      key: `tree-sidebar-menu-projects-${key}`,
      href: `/projects/${slug}`,
      target: "_self",
      label: `${slug}.html`,
    }))
  }
]

export const TopBarMenuLeft: MenuItem[] = [
  {
    key: 'top-bar-menu-left-view',
    href: "#",
    label: 'View',
    children: [
      {
        key: 'top-bar-menu-left-view-homepage',
        href: "/",
        label: 'Homepage'
      }, {
        key: 'top-bar-menu-left-view-experiments',
        href: "/experiments",
        label: 'Experiments',
        children: Experiments.map(({ key, title, slug }) => ({
          key: `top-bar-menu-left-view-experiment-${key}`,
          href: `/experiments/${slug}`,
          target: "_self",
          label: title,
        }))
      }, {
        key: 'top-bar-menu-left-view-projects',
        href: "/projects",
        label: 'Projects',
        children: Projects.map(({ key, title, slug }) => ({
          key: `top-bar-menu-left-view-projects-${key}`,
          href: `/projects/${slug}`,
          target: "_self",
          label: title,
        }))
      }, {
        key: 'top-bar-menu-left-view-resume',
        href: "/adrian-bradley-resume.pdf",
        target: "_blank",
        label: 'Resume'
      },
    ]
  }, {
    key: 'top-bar-menu-left-social',
    href: "#",
    label: 'Social',
    children: [
      {
        key: 'top-bar-menu-left-social-email',
        href: "mailto:hello@adrianbradley.ca",
        target: "_blank",
        label: 'Email'
      }, {
        key: 'top-bar-menu-left-social-discord',
        href: "https://discordapp.com/users/180462379904008193",
        target: "_blank",
        label: 'Discord'
      }, {
        key: 'top-bar-menu-left-social-linkedin',
        href: "https://www.linkedin.com/in/adrian2433/",
        target: "_blank",
        label: 'LinkedIn'
      }, {
        key: 'top-bar-menu-left-social-github',
        href: "https://github.com/Revenantal",
        target: "_blank",
        label: 'GitHub'
      }
    ]
  },
]
import type { title } from 'process'
import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/susogboy',
  linkedin: 'https://www.linkedin.com/in/jesusfernandezsantiago/',
  mail: 'mailto:jesus.fersan2003@gmail.com',
  malt: 'https://www.malt.es/profile/jesusfernandezsantiago',
  discord: 'https://discordapp.com/users/',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Success Page
export const PROFESSIONALSUCCESS: Page = {
  TITLE: 'Success',
  DESCRIPTION: 'Professional Success',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Desarrollo de Aplicaciones Multiplataforma',
    institution: 'Universidad Francisco de Vitoria',
    link: 'https://www.ufv.es',
    date: '2022 - 2024',
  },
  {
    title: 'Bachillerato',
    institution: 'Colegio Cumbre',
    link: 'https://colegiocumbre.com',
    date: '2020 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2022 - Current',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/',
    date: '2018 - Current',
  },
]

export const EXPERIENCE = [
  {
    company: 'EY',
    location: 'Madrid, España',
    position: 'Software Consultant',
    start: 'Oct 2023',
    link: 'https://www.ey.com/es_es',
    end: 'May 2024',
    tasks: [
      'Web development, ',
      'Relational database management (SQL) and ',
      'Support to different projects of the OTPI (Technical Office for Projects and Innovation) in the Spanish Ministry of Justice.',
    ],
  },
]

export const SUCCESS = [
  {
    company: 'IBM',
    location: 'Madrid, España',
    title: '1st Place in the Metaverse Social Hub Hackathon',
    start: '25 Nov 2022',
    link: 'https://www.ibm.com/blogs/think/es-es/2022/11/29/ibm-celebra-el-metaverse-social-hub-hackathon-en-colaboracion-con-madrid-in-game/',
    end: '27 Nov 2022',
    tasks: [
      'The aim was to solve a challenge: to design the immersive experience of the future through video games. It all started from the conviction that video gaming can and should aspire to go beyond itself and expand its influence to other industries and aspects of everyday life. The winning group, (AR/GO), devised an app that focuses on "hunting" discounts around the city by replicating one of the most downloaded games in the world Pokémon GO, where the jury highlighted the great idea and playability, introducing that social and engaging experience for the citizen.',
    ],
  },
  {
    company: '42 Madrid Telefonica',
    location: 'Madrid, España',
    title: '1st place in the 42nd Madrid Telefonica Innovation Studio',
    start: '21 Dic 2022',
    link: 'https://www.42madrid.com/',
    end: '23 Dic 2022',
    tasks: [
      'Consulting for the development of the best CV management web site',
    ],
  },
  {
    company: 'Universidad Francisco de Vitoria',
    location: 'Madrid, España',
    title: '1st place in the II Serious Game',
    start: 'Feb 2023',
    link: 'https://cesepi.es/actividades/2serious-game/',
    end: 'Apr 2023',
    tasks: [
      'Learn how to manage a company through the use of simulators working in teams with students from all over CETYS, with the help of the CIBERNOS group and Company Game.',
    ],
  }
]
import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import jumpstartLogo from '@/images/logos/js.png'
import audioIcon from '@/images/logos/audio-icon.png'
import backlitLogo from '@/images/logos/backlitllc_logo.jpg'
import neptuneIcon from '@/images/logos/neptune-icon.png'
import harmonyIcon from '@/images/logos/waves.png'
const projects = [
  {
    name: 'Neptune Flood',
    description:
      'An effortless, intuitive, and on-demand platform allows agents and customers to quote and bind a policy in under two minutes. I worked full stack on the marketing page, agent and customer portals as well as the internal tooling used by the company. Tech used: Vue, React, .NET Core, MS SQL and Azure Devops.',
    link: {
      href: 'https://neptuneflood.com',
      target: '_blank',
      label: 'neptuneflood.com',
    },
    logo: neptuneIcon,
  },
  {
    name: 'Backlit',
    description:
      'The process of managing the people in your production is fractured, repetitive, labor intensive, and prone to error. Backlit is here to change all that. I worked full stack on this project in Ruby on Rails and AWS.',
    link: {
      href: 'https://getbacklit.com/',
      target: '_blank',
      label: 'getbacklit.com',
    },
    logo: backlitLogo,
  },
  {
    name: 'Jumpstart Parametric Insurance',
    description:
      'Real-time video streaming library, optimized for interstellar transmission. This company was bought and absorbed into Neptune and leverages React and Next.js.',
    link: {
      href: 'https://www.jumpstartinsurance.com/',
      target: '_blank',
      label: 'jumpstartinsurance.com',
    },
    logo: jumpstartLogo,
  },
  {
    name: 'HRMNY',
    description:
      'The best way to learn an instrument and make a living teaching music! This is still in production and only links to the marketing page github which is built in React/Next.js. There will also be a full fledged web app using Vue/Nuxt 3 in the UI and Go as the backend.',
    link: {
      href: 'https://github.com/henron1/Marketing-Site',
      label: 'github.com/henron1/Marketing-Site',
    },
    logo: harmonyIcon,
  },
  {
    name: 'Single Band EQ',
    description:
      'My first forray into audio plugin development in C++ on the JUCE framework. I love learning about DSP!',
    link: {
      href: 'https://github.com/henron1/JUCE-SVT',
      label: 'github.com/henron1/JUCE-SVT',
    },
    logo: audioIcon,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-10 w-10 rounded-3xl"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link target="_blank" href={project.link.href}>
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

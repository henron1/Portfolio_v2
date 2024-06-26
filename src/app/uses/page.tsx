/* eslint-disable react/no-unescaped-entities */
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="2023 Mac Mini">
            This thing is dead silent and so powerful I doubt that I have really
            pushed the limits of what this machine can do.
          </Tool>
          <Tool title='Dell UHD 28" Monitor'>
            The only display on the market if you want something HiDPI and
            bigger than 27”. When you’re working on the things that matter most,
            every pixel you can get counts.
          </Tool>
          <Tool title="Apple Magic Keyboard">
            Nothing special, but gets the job done.
          </Tool>
          <Tool title="HP Mouse">
            Again super generic, but has yet to fail me and did not cost an arm
            and a leg.
          </Tool>
          <Tool title="Tempur-Pedic Office Chair">
            If I’m going to slouch in the worst ergonomic position imaginable
            all day, I might as well do it in an expensive chair.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            My bread and butter! I've tried every IDE imaginable and always come
            back home to this one.
          </Tool>
          <Tool title="Warp">
            Love the WarpAI addition and that it's lightening fast built with
            Rust.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">
            We started using Figma as just a design tool but now it’s become our
            virtual whiteboard for the entire company. Never would have expected
            the collaboration features to be the real hook.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Alfred">
            It’s not the newest kid on the block but it’s still the fastest. The
            Sublime Text of the application launcher world.
          </Tool>
          <Tool title="Pen and paper notes">
            I have a daily notebook that I use to jot ideas, inventions,
            thoughts, musings and the sorts that I don't want to lose in memory.
            This has saved my sanity countless times!
          </Tool>
          <Tool title="Google Calendar">
            Great tool for scheduling meetings while protecting my calendar and
            making sure I still have lots of time for deep work during the week.
          </Tool>
          <Tool title="Focus">
            Simple tool for blocking distracting websites when I need to just do
            the work and get some momentum going.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}

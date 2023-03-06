import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import abstractBackgroundImage from '@/images/resources/abstract-background.png'
import discordImage from '@/images/resources/discord.svg'
import figmaImage from '@/images/resources/figma.svg'
import videoPlayerImage from '@/images/resources/video-player.svg'
import {ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid";
import currencyDollarIcon from "@heroicons/react/20/solid/esm/CurrencyDollarIcon";
import eyeSlashIcon from "@heroicons/react/20/solid/esm/EyeSlashIcon";
import forwardIcon from "@heroicons/react/20/solid/esm/ForwardIcon";

const features = [
  {
    name: 'Outlandish guarantees',
    description:
        'Promises of guaranteed returns or high profits with little or no risk',
    icon: currencyDollarIcon,
  },
  {
    name: 'You don\'t really know how it works...',
    description:
        'Lack of transparency or information about the company, team, or technology behind the token',
    icon: eyeSlashIcon,
  },
  {
    name: 'Misleading',
    description:
        'Use of aggressive or misleading marketing tactics',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Urgency',
    description:
        'Pressure to invest quickly or to recruit others to invest',
    icon: forwardIcon,
  },
]

export function Resources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >

      <Container size="lg" className="mt-16">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                There are several warning signs that a cryptocurrency token may be a scam, including:
              </h2>
              <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                {features.map((feature) => (
                    <div key={feature.name}>
                      <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                      </dt>
                      <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

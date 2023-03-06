import Image from 'next/image'

import {Container} from '@/components/Container'
import {SectionHeading} from '@/components/SectionHeading'
import {ArrowPathIcon, CloudArrowUpIcon, CurrencyDollarIcon, LockClosedIcon} from '@heroicons/react/20/solid'
import receiptPercentIcon from "@heroicons/react/20/solid/esm/ReceiptPercentIcon";
import musicalNoteIcon from "@heroicons/react/20/solid/esm/MusicalNoteIcon";

const features = [
    {
        name: 'Double Your Money!',
        description:
            'Double your money in one (1) day, thirty (30) days or forty five (45) days depending on the promotion you choose!',
        href: 'https://www.youtube.com/@Coffeezilla',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Referral Commissions!',
        description:
            'Get up to 5% referral commissions for each additional investor you bring in, and get a chance to win a new motorcycle, car, or a rich rich syoke!',
        href: 'https://www.youtube.com/watch?v=SBGfHk91Vrk&ab_channel=TED-Ed',
        icon: receiptPercentIcon,
    },
    {
        name: 'Stuck on you...',
        description:
            'Be serenaded by our one and only patron with his favorite songs!',
        href: 'https://www.youtube.com/watch?v=vkwFVVdiZ_4&ab_channel=ChinkPositive',
        icon: musicalNoteIcon,
    },
]


function PlayIcon(props) {
    return (
        <svg
            aria-hidden="true"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z"/>
            <circle cx="8" cy="8" r="6.25" fill="none"/>
        </svg>
    )
}

export function Screencasts() {
    return (
        <section
            id="screencasts"
            aria-labelledby="screencasts-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="screencasts-title">
                    Overview
                </SectionHeading>
                <h2 className="text-6xl my-6 font-extrabold">What makes <span
                    className="text-subtle">ChiyuToken</span> Special?</h2>
                <p className="mt-8 font-display text-2xl tracking-tight text-slate-900">
                    ChiyuToken offers a range of cutting-edge features that set it apart from other cryptocurrencies. It
                    is built on Web 3.0 technology, which ensures fast and secure transactions that are resistant to
                    censorship and tampering.</p>
                <p className="mt-8 font-display tracking-tight text-2xl text-slate-900">
                    ChiyuToken also boasts robust encryption protocols that keep user data and
                    transactions safe from hackers and other malicious actors. The token is backed by the Tallano gold
                    reserves, providing a level of stability and security that is unrivaled in the cryptocurrency world.
                    In addition, ChiyuToken offers easy integration with popular wallets and exchanges, making it simple
                    for users to buy, sell, and store their tokens.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 font-semibold leading-7 text-gray-900 text-3xl">
                                    <feature.icon className="h-5 w-5 flex-none text-blue-500" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto text-2xl">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-500">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </Container>
        </section>
    )
}

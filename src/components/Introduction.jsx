import Link from 'next/link'

import {CheckIcon} from '@/components/CheckIcon'
import {Container} from '@/components/Container'

export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32 bg-primary"
        >
            <Container className="text-lg tracking-tight text-red-500">
                <p className="font-display text-4xl font-bold tracking-tight text-subtle">
                    Get on the ground floor of the future of cryptocurrency with ChiyuToken. Stop being marginalized
                    by society and help topple the oligarchy!
                </p>
                <p className="mt-4">
                    Are you passionate about using technology to make a positive impact in the world? Do you believe in
                    the potential of cryptocurrency to create opportunities for those who have been historically
                    marginalized? If so, you&apos;ll be excited to hear about ChiyuToken, a new cryptocurrency backed by
                    Tallano gold. With its potential to disrupt traditional power structures and provide new economic
                    opportunities for individuals, ChiyuToken could be the key to toppling the oligarchy and helping to
                    alleviate poverty. Are you ready to be a part of this revolution?
                </p>
                <p className="mt-4">
                    This suggestion frames the launch of ChiyuToken in terms of its potential for social and economic
                    impact, emphasizing the ability of cryptocurrency to create opportunities for those who have been
                    historically marginalized. It also presents the launch as an opportunity to contribute to a movement
                    for positive change, positioning the listener as an agent of that change.
                </p>
                <p className="mt-4">
                    But of course, that&apos;s all a big fat lie. There are several warning signs that a cryptocurrency token
                    may be a scam, including:
                </p>
                <ul role="list" className="mt-8 space-y-3">
                    {[
                        'Promises of guaranteed returns or high profits with little or no risk',
                        'Lack of transparency or information about the company, team, or technology behind the token',
                        'Use of aggressive or misleading marketing tactics',
                        'Pressure to invest quickly or to recruit others to invest',
                        'Lack of a clear use case or value proposition for the token',
                        'Unreasonable or unfounded claims about the token&apos;s technology or potential future value',
                        'Lack of regulation or oversight by reputable authorities or industry bodies.'
                    ].map((feature) => (
                        <li key={feature} className="flex">
                            <CheckIcon className="h-8 w-8 flex-none fill-subtle"/>
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-8">
                    It&apos;s important to conduct thorough research and due diligence before investing in any cryptocurrency
                    token or project, and to seek advice from trusted financial professionals if you have any doubts or
                    concerns.
                </p>
                {/*<p className="mt-10">*/}
                {/*    <Link*/}
                {/*        href="#free-chapters"*/}
                {/*        className="text-base font-medium text-blue-600 hover:text-blue-800"*/}
                {/*    >*/}
                {/*        Get two free chapters straight to your inbox{' '}*/}
                {/*        <span aria-hidden="true">&rarr;</span>*/}
                {/*    </Link>*/}
                {/*</p>*/}
            </Container>
        </section>
    )
}

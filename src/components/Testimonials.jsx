import Image from 'next/image'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {Expandable} from '@/components/Expandable'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import avatarImage6 from '@/images/avatars/avatar-6.png'
import avatarImage7 from '@/images/avatars/avatar-7.png'
import avatarImage8 from '@/images/avatars/avatar-8.png'
import avatarImage9 from '@/images/avatars/avatar-9.png'
import avatarImage10 from '@/images/avatars/avatar-10.png'
import avatarImage11 from '@/images/avatars/avatar-11.png'
import alamano from '@/images/alamano.png'
import coverImage from "@/images/banner.jpg";

const testimonials = [
    [
        {
            content:
                'Mira’s teaching style is second to none. Everything was easy to follow every step of the way.',
            author: {
                name: 'Antonio Littel',
                role: 'Frontend Developer',
                image: avatarImage3,
            },
        },
        {
            content:
                'Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.',
            author: {
                name: 'Lynn Nolan',
                role: 'Growth Marketer',
                image: avatarImage4,
            },
        },
        {
            content:
                'I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better',
            author: {
                name: 'Krista Prosacco',
                role: 'Professional Designer',
                image: avatarImage9,
            },
        },
    ],
    [
        {
            content:
                'I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.',
            author: {
                name: 'Cameron Considine',
                role: 'Entrepreneur',
                image: avatarImage7,
            },
        },
        {
            content:
                'The complete package is worth it for the weekly teardown videos alone. I’ve learned so much watching Mira take apart other icons and recreate them from scratch.',
            author: {
                name: 'Regina Wisoky',
                role: 'Design Student',
                image: avatarImage11,
            },
        },
        {
            content:
                'I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.',
            author: {
                name: 'Vernon Cummerata',
                role: 'UI Engineer',
                image: avatarImage8,
            },
        },
    ],
    [
        {
            content:
                'I couldn’t believe how fast Mira moved in Figma compared to my own workflow. I’m designing icons more accurately in half the time with the shortcuts I learned from her videos.',
            author: {
                name: 'Steven Hackett',
                role: 'Bootcamp Instructor',
                image: avatarImage5,
            },
        },
        {
            content:
                'I never thought I would enjoy designing icons but using the ideas in this book, it’s become a great way for me to relax while still being creative.',
            author: {
                name: 'Carla Schoen',
                role: 'Startup Founder',
                image: avatarImage10,
            },
        },
        {
            content:
                'All I can say is wow — this is easily the best icon design resource I’ve ever encountered.',
            author: {
                name: 'Leah Kiehn',
                role: 'Creative Director',
                image: avatarImage6,
            },
        },
    ],
]

function Testimonial({author, children}) {
    return (
        <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
            <blockquote>
                <p className="text-lg tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
                    {children}
                </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center">
                <div className="overflow-hidden rounded-full bg-slate-50">
                    <Image
                        className="h-12 w-12 object-cover"
                        src={author.image}
                        alt=""
                        width={48}
                        height={48}
                    />
                </div>
                <div className="ml-4">
                    <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                        {author.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{author.role}</div>
                </div>
            </figcaption>
        </figure>
    )
}

export function Testimonials() {
    return (
        <section className="py-8 sm:py-10 lg:py-16">
            <Container>
                <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
                    On Tallano Gold...
                </h2>
                <Image className="w-full" src={alamano} alt="" priority />
                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    Tallano gold refers to a set of interrelated conspiracy theories and internet scams which
                    claim that before Spain colonized the Philippines, the archipelago and surrounding territories were
                    ruled by a certain Tagean Tallano family, that the family owned a vast amount of gold, and that
                    former president Ferdinand Marcos obtained his family&apos;s unexplained wealth by receiving some of
                    the Tallano gold as payment for the legal services he allegedly provided to the Tallano
                    family. Offshoots of the conspiracy theories include tales that the country&apos;s national
                    hero José Rizal survived his execution, that the gold reserves were used to fund the Vatican, or
                    that the gold was instrumental in starting the World Bank.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    A related conspiracy theory is that the Tallano clan has provided 400,000 tons of gold as commission
                    to former President Ferdinand Marcos who became the &ldquo;sole owner&ldquo; of such. The gold bars supposedly
                    fell under the custody of the Bangko Sentral ng Pilipinas (BSP), the country&apos;s central bank.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-600">

                    During the 2022 Philippine presidential election, the myth of the Tallano gold was circulated by
                    social media pages supporting Bongbong Marcos, son of Ferdinand. In his presidential campaign, the
                    younger Marcos shrugged off such claims, remarking in a March 15, 2022 interview with One News, that
                    he has not seen a single gold bar in &ldquo;his entire life.&ldquo; The BSP also released a statement that it
                    has no record of it keeping such Tallano gold bars. <em>Source: <a href="https://en.wikipedia.org/wiki/Tallano_gold">Wikipedia</a></em>
                </p>

                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    A video on Facebook (FB) falsely claims that the Bangko Sentral ng Pilipinas (BSP) has in storage
                    tons of gold supposedly owned by the late President Ferdinand Marcos, Sr. The BSP called this a
                    myth.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    On May 25, a false FB video on the supposed gold owned by the Marcoses appeared bearing the title:
                    &ldquo;MARCOS GOLD & AQUINO CORRUPTION HISTORY, PANOORIN NG (sic) MALAMAN ANG KATOTOHANAN (Watch to learn
                    the truth).&ldquo;
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    The first half of the 9-minute video flashed the claim that Marcos Sr. is the &ldquo;sole owner&ldquo; of more
                    than 400,000 tons of gold. It was supposedly the commission paid by a wealthy clan known as Tallano.
                    The gold stash is allegedly in the BSP basement.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-600">
                    The central bank, replying to a netizen query, refuted this falsehood with a May 16 letter response.
                    It said there was “no record” of a &ldquo;Tallano Gold&ldquo; in their storage.
                </p>
                <p>Source: <a
                    href="https://verafiles.org/articles/vera-files-fact-check-no-tons-of-tallano-gold-allegedly-owned-by-marcoses-in-bsp-storage">Vera
                    Files</a></p>
            </Container>
            <Expandable>
                {({isExpanded}) => (
                    <>
                        <ul
                            role="list"
                            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
                        >
                            {testimonials
                                .map((column) => column[0])
                                .map((testimonial, testimonialIndex) => (
                                    <li key={testimonialIndex} className="lg:hidden">
                                        <Testimonial author={testimonial.author}>
                                            {testimonial.content}
                                        </Testimonial>
                                    </li>
                                ))}
                            {testimonials.map((column, columnIndex) => (
                                <li
                                    key={columnIndex}
                                    className={isExpanded ? undefined : 'hidden lg:list-item'}
                                >
                                    <ul role="list">
                                        {column
                                            .slice(0, isExpanded ? undefined : 2)
                                            .map((testimonial, testimonialIndex) => (
                                                <li
                                                    key={testimonialIndex}
                                                    className={clsx(
                                                        testimonialIndex === 0 && 'hidden lg:list-item',
                                                        testimonialIndex === 1 && 'lg:mt-8',
                                                        testimonialIndex > 1 && 'mt-8'
                                                    )}
                                                >
                                                    <Testimonial author={testimonial.author}>
                                                        {testimonial.content}
                                                    </Testimonial>
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Expandable.Button>Read more testimonials</Expandable.Button>
                    </>
                )}
            </Expandable>
        </section>
    )
}

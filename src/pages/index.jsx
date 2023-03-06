import Head from 'next/head'

import {Author} from '@/components/Author'
import {Footer} from '@/components/Footer'
import {FreeChapters} from '@/components/FreeChapters'
import {Hero} from '@/components/Hero'
import {Introduction} from '@/components/Introduction'
import {NavBar} from '@/components/NavBar'
import {Pricing} from '@/components/Pricing'
import {Resources} from '@/components/Resources'
import {Screencasts} from '@/components/Screencasts'
import {TableOfContents} from '@/components/TableOfContents'
import {Testimonial} from '@/components/Testimonial'
import {Testimonials} from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import CookieConsent, { Cookies } from "react-cookie-consent"

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    ChiyuToken - Web 3.0
                </title>
                <meta
                    name="description"
                    content="Backed by the Power of Tallano Gold!"
                />
            </Head>
            <Hero/>
            <CookieConsent>This website uses cookies backed by Tallano Gold to enhance the user experience.</CookieConsent>
            <Introduction/>
            <NavBar/>
            <TableOfContents/>
            <Testimonial
                id="testimonial-from-tommy-stroman"
                author={{
                    name: 'Toto',
                    role: 'ChiyuToken Investor',
                    image: avatarImage1,
                }}
            >
                <p>
                    “I&apos;ve been investing in cryptocurrencies for years, and ChiyuToken is hands down one of the most
                    exciting investments I&apos;ve made. With its innovative Web 3.0 technology and backing by Tallano gold,
                    I feel confident in the security and potential for growth of this cryptocurrency. I&apos;ve already seen
                    significant returns on my investment and am excited to see where it goes from here. If you&apos;re
                    looking for a solid cryptocurrency investment, I highly recommend ChiyuToken.”
                </p>
            </Testimonial>
            <Screencasts/>
            <Testimonial
                id="testimonial-from-gerardo-stark"
                author={{
                    name: 'Gerardo Stark',
                    role: 'Creator of Pandemicons',
                    image: avatarImage2,
                }}
            >
                <p>
                    “I’ve tried to create my own icons in the past but quickly got
                    frustrated and gave up. Now I sell my own custom icon sets online.”
                </p>
            </Testimonial>
            <Resources/>
            <Pricing/>
            <Testimonials/>
            <Author/>
            <Footer/>
        </>
    )
}

import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/banner.jpg'

function Testimonial() {
  return (
    <figure className="relative mx-auto max-w-md text-center lg:mx-0 lg:text-left">
      <div className="flex justify-center text-blue-600 lg:justify-start">
        <StarRating />
      </div>
      <blockquote className="mt-2">
        <p className="font-display text-xl font-medium text-red-500">
          “I'm blown away by ChiyuToken's innovative Web 3.0 tech and Tallano gold backing. The returns have been impressive so far - this is a solid cryptocurrency investment that I highly recommend.”
        </p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        <strong className="font-semibold text-blue-600 before:content-['—_']">
          Jun
        </strong>
        , ChiyuToken Investor
      </figcaption>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-primary lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -top-20 -bottom-12 left-0 right-1/2 z-10 rounded-br-6xl bg-red-100 text-white/10 md:bottom-8 lg:-inset-y-32 lg:right-full lg:left-[-100vw] lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pr-0 lg:pb-14 lg:pl-16 xl:pl-20 bg-primary">
          <div className="hidden lg:absolute lg:bottom-0 lg:-top-32 lg:right-[-100vw] lg:left-[-100vw] lg:block lg:bg-primary" />
          <Testimonial />
        </div>
        <div className="bg-primary pt-16 lg:col-span-7 text-white lg:pt-0 lg:pl-16 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-subtle sm:text-6xl">
              Join the Future of Money with ChiyuToken!
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              ChiyuToken is the Web 3.0 cyptocurrency of the future, backed by the reliability and stability of Tallano gold.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#author" color="blue-500">
                Learn More
              </Button>
              <Button href="#introduction" variant="outline" color="blue-700">
                Topple the oligarchy! Join the ChiyuToken community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

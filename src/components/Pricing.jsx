import clsx from 'clsx'

import {Button} from '@/components/Button'
import {CheckIcon} from '@/components/CheckIcon'
import {Container} from '@/components/Container'
import {GridPattern} from '@/components/GridPattern'
import {SectionHeading} from '@/components/SectionHeading'

function Plan({name, description, price, features, href, featured}) {
    return (
        <div
            className={clsx(
                'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
                featured && 'bg-blue-600 sm:shadow-lg'
            )}
        >
            {featured && (
                <div className="absolute inset-0 text-white/10 bg-blue-500">
                    <GridPattern x="50%" y="50%"/>
                </div>
            )}
            <div className="relative flex flex-col">
                <h3
                    className={clsx(
                        'mt-7 text-lg font-semibold tracking-tight',
                        featured ? 'text-white' : 'text-slate-900'
                    )}
                >
                    {name}
                </h3>
                <p
                    className={clsx(
                        'mt-2 text-lg tracking-tight',
                        featured ? 'text-white' : 'text-blue-500'
                    )}
                >
                    {description}
                </p>
                <p className="order-first flex font-display font-bold">
          <span
              className={clsx(
                  'text-[1.75rem] leading-tight',
                  featured ? 'text-blue-200' : 'text-slate-500'
              )}
          >
            PHP
          </span>
                    <span
                        className={clsx(
                            'ml-1 mt-1 text-7xl tracking-tight',
                            featured ? 'text-white' : 'text-slate-900'
                        )}
                    >
            {price}
          </span>
                </p>
                <div className="order-last mt-8">
                    <ul
                        role="list"
                        className={clsx(
                            '-my-2 divide-y text-base tracking-tight',
                            featured
                                ? 'divide-white/10 text-white'
                                : 'divide-slate-200 text-slate-900'
                        )}
                    >
                        {features.map((feature) => (
                            <li key={feature} className="flex py-2">
                                <CheckIcon
                                    className={clsx(
                                        'h-8 w-8 flex-none',
                                        featured ? 'fill-white' : 'fill-blue-500'
                                    )}
                                />
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    href={href}
                    color={featured ? 'white' : 'slate'}
                    className="mt-8"
                    aria-label={`Get started with the PHP{name} plan for PHP{price}`}
                >
                    Get started
                </Button>
            </div>
        </div>
    )
}

export function Pricing() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
        >
            <Container>
                <SectionHeading number="4" id="pricing-title">
                    Pricing
                </SectionHeading>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                    Pick your package
                </p>
                <p className="mt-4 max-w-xl text-lg tracking-tight text-blue-500">
                    Ready to take the next step in cryptocurrency investing? Join the ChiyuToken community today and
                    experience the benefits of Web 3.0 technology and Tallano gold backing. Don&apos;t wait - invest now and
                    reap the rewards!
                </p>
            </Container>
            <div className="mx-auto mt-16 max-w lg:px-6">
                <div
                    className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-3 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
                    <Plan
                        name="Double your money in 1 day"
                        description="Try it out..."
                        price={100}
                        href="#"
                        features={[
                            'Ridicule',
                        ]}
                    />
                    <Plan
                        name="Double your money in 30 days"
                        description="The perfect starting point if you’re on a budget."
                        price={10000}
                        href="#"
                        features={[
                            'Ridicule',
                            'Consternation',
                            'Hypertension',
                        ]}
                    />
                    <Plan
                        featured
                        name="Double your money in 45 days"
                        description="For the high rollers"
                        price={1000000}
                        href="#"
                        features={[
                            'Ridicule',
                            'Consternation',
                            'Hypertension',
                            'Headaches',
                            'Hair loss',
                            'Existential Dread',
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

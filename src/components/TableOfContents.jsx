import { Container } from '@/components/Container'
import { Expandable } from '@/components/Expandable'
import { SectionHeading } from '@/components/SectionHeading'
import {CheckIcon} from "@heroicons/react/20/solid";

const steps = [
  {
    name: 'Create your wallet',
    description: 'Create a Metamask Wallet using either a desktop computer or mobile device. http://metamask.io',
    href: '#',
    status: 'current',
  },
  {name: 'Load your wallet', description: 'Send Ethereum to your wallet. You can buy Ethereum on MetaMask directly, or through sites like Coinbase, Crypto.com, or Binance and then send them to your wallet.', href: '#', status: 'current'},
  {name: '...', description: '???', href: '#', status: 'current'},
  {name: 'Profit', description: 'Connect to Uniswap and trade for ChiyuTokens backed by Tallano GOLD', href: '#', status: 'current'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TableOfContents() {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="1" id="table-of-contents-title">
          Quickstart Guide
        </SectionHeading>
        <h2 className="text-6xl my-6 font-extrabold">Find <span className="text-subtle">GOLD</span> in the Philippines</h2>
        <nav aria-label="Progress">
          <ol role="list" className="overflow-hidden my-4">
            {steps.map((step, stepIdx) => (
                <li key={step.name}
                    className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
                  {step.status === 'complete' ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                            <div
                                className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-slate-600"
                                aria-hidden="true"/>
                        ) : null}
                        <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span
                        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-slate-600 group-hover:bg-slate-800">
                      <CheckIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                    </span>
                  </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-3xl">{step.name}</span>
                    <span className=" text-gray-500">{step.description}</span>
                  </span>
                        </a>
                      </>
                  ) : step.status === 'current' ? (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                            <div
                                className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                                aria-hidden="true"/>
                        ) : null}
                        <a href={step.href} className="group relative flex items-start"
                           aria-current="step">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span
                        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-600 bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-slate-600"/>
                    </span>
                  </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-2xl text-slate-600">{step.name}</span>
                    <span className=" text-gray-500">{step.description}</span>
                  </span>
                        </a>
                      </>
                  ) : (
                      <>
                        {stepIdx !== steps.length - 1 ? (
                            <div
                                className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                                aria-hidden="true"/>
                        ) : null}
                        <a href={step.href} className="group relative flex items-start">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span
                        className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"/>
                    </span>
                  </span>
                          <span className="ml-4 flex min-w-0 flex-col">
                    <span className=" font-medium text-gray-500">{step.name}</span>
                    <span className=" text-gray-500">{step.description}</span>
                  </span>
                        </a>
                      </>
                  )}
                </li>
            ))}
          </ol>
        </nav>
      </Container>
    </section>
  )
}

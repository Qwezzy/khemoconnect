"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

export const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-32 sm:pt-32 sm:pb-40">
            <div className="absolute inset-0 max-w-7xl mx-auto opacity-20 dark:opacity-40">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-orange to-brand-charcoal opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-6xl dark:text-brand-white">
                            We don&apos;t just build websites. We automate your business growth.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                            Enterprise-grade WaaS (Website-as-a-Service) designed for South African SMEs. Secure, POPIA-compliant, and fully managed to save you time and maximize ROI.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                                Book a Free AI Automation Audit
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full">
                                Learn more
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

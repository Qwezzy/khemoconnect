import React from "react"
import { Button } from "./ui/button"
import { Download, ShieldCheck } from "lucide-react"

export const LeadMagnet = () => {
    return (
        <section className="bg-brand-charcoal text-brand-white py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange/20">
                        <ShieldCheck className="h-8 w-8 text-brand-orange" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        The 2026 South African SME Guide to POPIA Compliance & AI Automation.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-brand-gray">
                        Learn exactly how to protect your business from massive data fines while leveraging modern AI tools to reclaim 10+ hours a week. Get the free playbook.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full h-12 px-8">
                            <Download className="mr-2 h-4 w-4" /> Download the Free Guide
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

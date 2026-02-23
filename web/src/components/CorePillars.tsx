import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"
import { MonitorSmartphone, Workflow, LockKeyhole } from "lucide-react"

export const CorePillars = () => {
    const pillars = [
        {
            title: "High-Converting Web Platforms",
            description: "Stop losing leads to slow, outdated sites. Get a premium, lightning-fast digital storefront on a flat monthly subscription. Zero upfront costs, 100% done for you.",
            icon: <MonitorSmartphone className="h-8 w-8 text-brand-orange" />,
        },
        {
            title: "AI & Workflow Automation",
            description: "Automate the grunt work. We seamlessly connect your website to your CRM, WhatsApp bots, and quoting tools so you can focus on scaling, not manual admin.",
            icon: <Workflow className="h-8 w-8 text-brand-orange" />,
        },
        {
            title: "Digital Workspace",
            description: "Secure, centralized, and collaborative. We deploy Microsoft 365 and SharePoint intranets with enterprise-grade security and guaranteed local data compliance.",
            icon: <LockKeyhole className="h-8 w-8 text-brand-orange" />,
        }
    ]

    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-orange">Core Solutions</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-4xl">
                        Everything you need to scale digitally
                    </p>
                    <p className="mt-6 text-lg leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                        We provide the infrastructure and automation required for modern South African SMEs to operate efficiently and securely.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {pillars.map((pillar) => (
                            <Card key={pillar.title} className="flex flex-col border-none shadow-lg dark:bg-brand-charcoal/30 bg-white">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-orange/10">
                                        {pillar.icon}
                                    </div>
                                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-brand-charcoal/70 dark:text-brand-gray">
                                        {pillar.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

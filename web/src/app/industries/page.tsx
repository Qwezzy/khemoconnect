import React from "react"
import { BriefcaseMedical, Scale, Truck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Industries | KhemoConnect",
    description: "Industry-specific digital workflows for Medical, Legal, and Logistics SMEs.",
}

const industries = [
    {
        title: "Medical & Healthcare",
        icon: <BriefcaseMedical className="w-12 h-12 text-brand-orange" />,
        description: "Modernize your practice with HIPAA/POPIA compliant digital intake forms, automated patient booking, and secure document management.",
        features: [
            "Automated WhatsApp Appointment Reminders",
            "Secure Patient Intake Forms linked to your EMR",
            "Telehealth Portal Integrations",
        ]
    },
    {
        title: "Professional Services & Law",
        icon: <Scale className="w-12 h-12 text-brand-orange" />,
        description: "Project authority and handle confidential client data securely. We build corporate websites with integrated client portals and document signing.",
        features: [
            "POPIA/GDPR Compliant Data Storage",
            "Automated Lead generation and Pre-screening",
            "Secure Document Exchange Intranets",
        ]
    },
    {
        title: "Logistics & Construction",
        icon: <Truck className="w-12 h-12 text-brand-orange" />,
        description: "Replace paper clips with automated workflows. We provide mobile-friendly apps and sites for field workers to submit data instantly.",
        features: [
            "Mobile-friendly Site Inspection Forms",
            "Automated Quoting and Invoicing Pipelines",
            "Real-time Fleet/Project Dashboard Integrations",
        ]
    }
]

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 border-t border-brand-charcoal/10 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-5xl">
                        Built for Your Industry
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                        Generalist agencies build generalist websites. We build highly specific, automated workflows designed to solve the unique bottlenecks of your sector.
                    </p>
                </div>

                <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-3">
                    {industries.map((industry) => (
                        <div key={industry.title} className="flex flex-col rounded-3xl bg-white/5 dark:bg-brand-charcoal/30 ring-1 ring-brand-charcoal/10 dark:ring-white/10 p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow">
                            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-orange/10">
                                {industry.icon}
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-brand-charcoal dark:text-brand-white">
                                {industry.title}
                            </h3>
                            <p className="mt-4 text-base leading-7 text-brand-charcoal/70 dark:text-brand-gray flex-grow">
                                {industry.description}
                            </p>

                            <ul className="mt-8 space-y-3 mb-10">
                                {industry.features.map((feature, i) => (
                                    <li key={i} className="flex gap-x-3 text-sm text-brand-charcoal/80 dark:text-brand-gray">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button variant="ghost" className="mt-auto self-start group px-0 font-semibold hover:bg-transparent">
                                Learn more
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

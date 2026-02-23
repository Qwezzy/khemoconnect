import React from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Solutions | KhemoConnect",
    description: "Enterprise-grade Website-as-a-Service, AI Automation, and Digital Workspace solutions.",
}

const tiers = [
    {
        name: "Starter WaaS",
        price: "R2,499",
        description: "Perfect for local service businesses needing a professional, high-converting presence.",
        features: [
            "Custom 5-Page Premium Website",
            "Enterprise Grade Hosting & Security",
            "Basic SEO Setup",
            "Monthly Content Updates",
            "Standard Contact Form Integration",
        ],
        cta: "Start Growing",
        highlight: false,
    },
    {
        name: "Growth WaaS + AI",
        price: "R5,999",
        description: "For SMEs looking to fully automate their booking and lead generation processes.",
        features: [
            "Everything in Starter",
            "Advanced AI Chatbot (WhatsApp & Web)",
            "CRM & Booking System Integration",
            "Automated Quoting Workflows",
            "Priority Support & Maintenance",
        ],
        cta: "Automate Now",
        highlight: true,
    },
    {
        name: "Scale (Digital Hub)",
        price: "Custom",
        description: "Full digital transformation for established businesses requiring intranets and custom logic.",
        features: [
            "Everything in Growth",
            "SharePoint & M365 Intranet Setup",
            "POPIA Compliance Dashboards",
            "Custom Data Pipelines & Integrations",
            "Dedicated Technical Account Manager",
        ],
        cta: "Get a Quote",
        highlight: false,
    },
]

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 border-t border-brand-charcoal/10 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-5xl">
                        Our Solutions & Pricing
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                        Transparent, flat-rate pricing for enterprise-grade digital solutions.
                        No surprises, just execution.
                    </p>
                </div>

                {/* Pricing Tiers */}
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`rounded-3xl p-8 ring-1 transition-all ${tier.highlight
                                    ? "bg-brand-charcoal text-white ring-brand-charcoal shadow-2xl scale-105"
                                    : "bg-white/5 dark:bg-brand-charcoal/30 ring-brand-charcoal/10 dark:ring-white/10"
                                }`}
                        >
                            <h3 className={`text-2xl font-semibold leading-8 ${tier.highlight ? "text-white" : "text-brand-charcoal dark:text-white"}`}>
                                {tier.name}
                            </h3>
                            <p className={`mt-4 text-sm leading-6 ${tier.highlight ? "text-gray-300" : "text-brand-charcoal/70 dark:text-brand-gray"}`}>
                                {tier.description}
                            </p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className={`text-4xl font-bold tracking-tight ${tier.highlight ? "text-white" : "text-brand-charcoal dark:text-white"}`}>
                                    {tier.price}
                                </span>
                                {tier.price !== "Custom" && <span className={`text-sm font-semibold leading-6 ${tier.highlight ? "text-gray-300" : "text-brand-charcoal/70 dark:text-brand-gray"}`}>/month</span>}
                            </p>

                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckCircle2
                                            className={`h-6 w-5 flex-none ${tier.highlight ? "text-brand-orange" : "text-brand-orange"}`}
                                            aria-hidden="true"
                                        />
                                        <span className={tier.highlight ? "text-gray-300" : "text-brand-charcoal/80 dark:text-gray-300"}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.highlight ? "default" : "outline"}
                                className={`w-full mt-8 rounded-full ${tier.highlight ? "bg-brand-orange hover:bg-brand-orange/90 text-white" : ""}`}
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                {/* Detailed Services */}
                <div className="mt-32 max-w-3xl mx-auto space-y-16">
                    <div>
                        <h2 className="text-3xl font-bold text-brand-charcoal dark:text-white">AI & Integration Services</h2>
                        <p className="mt-4 text-lg text-brand-charcoal/80 dark:text-brand-gray">
                            We connect the dots between your website and your operations. Stop manually typing data from emails into your CRM. We build secure Webhooks and automated Zapier/Make pipelines that push web forms directly into SugarCRM, Zoho, or HubSpot, triggering instant client responses.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-brand-charcoal dark:text-white">Cloud & Digital Workspaces</h2>
                        <p className="mt-4 text-lg text-brand-charcoal/80 dark:text-brand-gray">
                            Moving your SME to the cloud securely is our specialty. We provide full migrations to Google Workspace or Microsoft 365. Furthermore, we design custom SharePoint Intranets to centralize your company policies, leave requests, and secure document storage, ensuring total POPIA compliance.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

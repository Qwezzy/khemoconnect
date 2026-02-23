import React from "react"
import { CheckCircle2, XCircle } from "lucide-react"

export const ComparisonTable = () => {
    return (
        <section className="py-24 sm:py-32 bg-brand-charcoal/5 dark:bg-brand-charcoal/20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-4xl">
                        The Old Way vs. The KhemoConnect Way
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                        Stop dealing with the headache of traditional IT. Switch to our seamless WaaS model.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-4xl border border-brand-charcoal/10 dark:border-brand-gray/10 rounded-2xl overflow-hidden shadow-xl bg-background">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 bg-gray-50 dark:bg-zinc-900/50">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                <XCircle className="w-6 h-6 text-red-500" />
                                The Old Way
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500 mr-2 mt-0.5">✕</span>
                                    High upfront costs ($5k+) for a basic website
                                </li>
                                <li className="flex items-start text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500 mr-2 mt-0.5">✕</span>
                                    Paying separately for hosting, security, and updates
                                </li>
                                <li className="flex items-start text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500 mr-2 mt-0.5">✕</span>
                                    A "brochure" site that generates zero actual leads
                                </li>
                                <li className="flex items-start text-gray-600 dark:text-gray-400">
                                    <span className="text-red-500 mr-2 mt-0.5">✕</span>
                                    Manual data entry from website forms to your CRM
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 md:p-12 bg-brand-charcoal dark:bg-brand-charcoal">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                                <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                                KhemoConnect WaaS
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start text-brand-white/90">
                                    <span className="text-brand-orange mr-2 mt-0.5">✓</span>
                                    Zero upfront costs. Flat, predictable monthly subscription
                                </li>
                                <li className="flex items-start text-brand-white/90">
                                    <span className="text-brand-orange mr-2 mt-0.5">✓</span>
                                    Enterprise hosting, complete security & infinite updates included
                                </li>
                                <li className="flex items-start text-brand-white/90">
                                    <span className="text-brand-orange mr-2 mt-0.5">✓</span>
                                    High-converting lead engine baked directly into the design
                                </li>
                                <li className="flex items-start text-brand-white/90">
                                    <span className="text-brand-orange mr-2 mt-0.5">✓</span>
                                    Automated sync to your CRM, WhatsApp & quoting tools
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

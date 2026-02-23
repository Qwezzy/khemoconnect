import React from "react"
import { Building2, Landmark, GraduationCap, BriefcaseMedical } from "lucide-react"

export const SocialProof = () => {
    return (
        <section className="bg-background py-16 sm:py-24 border-y border-brand-charcoal/10 dark:border-brand-gray/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                    Trusted by leading South African enterprises and fast-growing SMEs
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <div className="flex justify-center items-center gap-2 text-brand-charcoal/40 dark:text-brand-gray/40 hover:text-brand-charcoal dark:hover:text-brand-gray transition-colors">
                        <Building2 className="h-8 w-8" />
                        <span className="font-bold text-xl hidden sm:block">CEFE</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-brand-charcoal/40 dark:text-brand-gray/40 hover:text-brand-charcoal dark:hover:text-brand-gray transition-colors">
                        <Landmark className="h-8 w-8" />
                        <span className="font-bold text-xl hidden sm:block">Government Depts</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-brand-charcoal/40 dark:text-brand-gray/40 hover:text-brand-charcoal dark:hover:text-brand-gray transition-colors">
                        <GraduationCap className="h-8 w-8" />
                        <span className="font-bold text-xl hidden sm:block">Education</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-brand-charcoal/40 dark:text-brand-gray/40 hover:text-brand-charcoal dark:hover:text-brand-gray transition-colors">
                        <BriefcaseMedical className="h-8 w-8" />
                        <span className="font-bold text-xl hidden sm:block">Healthcare</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

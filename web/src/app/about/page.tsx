import React from "react"
import { Users, Code, Globe2 } from "lucide-react"

export const metadata = {
    title: "About Us | KhemoConnect",
    description: "Learn about KhemoConnect's journey from a traditional web agency to a leading Digital Transformation Partner since 2008.",
}

const team = [
    {
        name: "Khwezi Flatela",
        role: "Digital Transformation Specialist",
        description: "Driving the strategic vision to bridge the gap between complex enterprise IT and SME accessibility. Khwezi brings years of experience leading digital initiatives for both global and local brands.",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Phillip Malele",
        role: "Integration Expert",
        description: "The technical architect behind our automated workflows. Phillip specializes in seamlessly connecting disparate tools, ensuring our clients achieve maximum operational efficiency.",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
    }
]

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24 border-t border-brand-charcoal/10 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Our Story Section */}
                <div className="mx-auto max-w-3xl text-center mb-20 lg:mb-32">
                    <h1 className="text-4xl font-extrabold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-5xl mb-6">
                        Bridging the gap between complex IT and actual growth.
                    </h1>
                    <div className="space-y-6 text-lg leading-8 text-brand-charcoal/80 dark:text-brand-gray text-left sm:text-center">
                        <p>
                            Founded in 2008, Khemo IT Solutions started as a traditional web design and hosting agency. We built great websites, but we noticed a common theme among our SME clients: a static website wasn't enough to drive real business transformations.
                        </p>
                        <p>
                            Today, KhemoConnect has evolved into a premier Digital Transformation & Automation Partner. We no longer sell commodity websites. We provide <strong className="text-brand-orange">Website-as-a-Service (WaaS)</strong>, AI-powered automation, and secure Digital Workspaces that deliver tangible ROI, save time, and ensure total POPIA compliance.
                        </p>
                    </div>
                </div>

                {/* Stats / Numbers */}
                <div className="mx-auto max-w-5xl mb-32 bg-brand-charcoal dark:bg-brand-charcoal/40 rounded-3xl p-10 md:p-16 grid grid-cols-1 gap-10 sm:grid-cols-3 text-center border-t-4 border-brand-orange shadow-xl">
                    <div className="flex flex-col items-center">
                        <Globe2 className="w-10 h-10 text-brand-orange mb-4" />
                        <span className="text-4xl font-extrabold text-white">15+</span>
                        <span className="mt-2 text-brand-gray text-sm font-medium uppercase tracking-wider">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="w-10 h-10 text-brand-orange mb-4" />
                        <span className="text-4xl font-extrabold text-white">500+</span>
                        <span className="mt-2 text-brand-gray text-sm font-medium uppercase tracking-wider">Clients Transformed</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <Code className="w-10 h-10 text-brand-orange mb-4" />
                        <span className="text-4xl font-extrabold text-white">100%</span>
                        <span className="mt-2 text-brand-gray text-sm font-medium uppercase tracking-wider">Automated Delivery</span>
                    </div>
                </div>

                {/* The Team Section */}
                <div className="mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-4xl">
                            Meet the Leadership
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                            Experts in technology, dedicated to your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {team.map((person) => (
                            <div key={person.name} className="flex flex-col items-center sm:items-start text-center sm:text-left bg-white/5 dark:bg-brand-charcoal/20 rounded-3xl p-8 border border-brand-charcoal/10 dark:border-white/10 shadow-lg hover:shadow-xl transition-shadow">
                                <img
                                    className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-brand-orange/20"
                                    src={person.imageUrl}
                                    alt={person.name}
                                />
                                <h3 className="text-2xl font-bold text-brand-charcoal dark:text-brand-white">{person.name}</h3>
                                <p className="text-brand-orange font-medium mt-1 mb-4">{person.role}</p>
                                <p className="text-brand-charcoal/70 dark:text-brand-gray leading-relaxed">
                                    {person.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    )
}

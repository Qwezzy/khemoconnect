"use client"

import React, { useState } from "react"
import { Mail, Phone, MapPin, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-24 border-t border-brand-charcoal/10 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h1 className="text-4xl font-extrabold tracking-tight text-brand-charcoal dark:text-brand-white sm:text-5xl">
                        Let's Upgrade Your Business
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-brand-charcoal/80 dark:text-brand-gray">
                        Book a zero-friction consultation or drop us a message. We're ready to digitize your workflows.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                    {/* Contact Information & Booking */}
                    <div className="flex flex-col gap-10">
                        <div className="bg-brand-charcoal rounded-3xl p-10 shadow-xl text-white">
                            <h2 className="text-2xl font-bold tracking-tight mb-6">Direct Consultation</h2>
                            <p className="text-brand-gray mb-8">
                                Skip the back-and-forth. Book a 30-minute discovery call directly on our calendar.
                            </p>

                            <div className="flex items-center gap-4 text-brand-gray mb-8">
                                <Calendar className="w-6 h-6 text-brand-orange" />
                                <span className="font-semibold text-white">Next Available: Tomorrow</span>
                            </div>

                            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-6 text-lg rounded-full shadow-lg hover:shadow-brand-orange/20 transition-all">
                                Book via Calendly <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="rounded-2xl bg-white/5 dark:bg-brand-charcoal/30 ring-1 ring-brand-charcoal/10 dark:ring-white/10 p-8 shadow-sm">
                                <Mail className="w-8 h-8 text-brand-orange mb-4" />
                                <h3 className="text-lg font-semibold text-brand-charcoal dark:text-white mb-2">Email Us</h3>
                                <a href="mailto:hello@khemoconnect.com" className="text-brand-charcoal/80 dark:text-brand-gray hover:text-brand-orange transition-colors">
                                    hello@khemoconnect.com
                                </a>
                            </div>
                            <div className="rounded-2xl bg-white/5 dark:bg-brand-charcoal/30 ring-1 ring-brand-charcoal/10 dark:ring-white/10 p-8 shadow-sm">
                                <Phone className="w-8 h-8 text-brand-orange mb-4" />
                                <h3 className="text-lg font-semibold text-brand-charcoal dark:text-white mb-2">Call Us</h3>
                                <a href="tel:+27000000000" className="text-brand-charcoal/80 dark:text-brand-gray hover:text-brand-orange transition-colors">
                                    +27 (0) 00 000 0000
                                </a>
                            </div>
                            <div className="sm:col-span-2 rounded-2xl bg-white/5 dark:bg-brand-charcoal/30 ring-1 ring-brand-charcoal/10 dark:ring-white/10 p-8 shadow-sm">
                                <MapPin className="w-8 h-8 text-brand-orange mb-4" />
                                <h3 className="text-lg font-semibold text-brand-charcoal dark:text-white mb-2">Location</h3>
                                <p className="text-brand-charcoal/80 dark:text-brand-gray">
                                    Sandton, Johannesburg<br />
                                    South Africa, 2196
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* High-Converting Lead Form */}
                    <div className="bg-white dark:bg-brand-charcoal/50 rounded-3xl p-10 ring-1 ring-brand-charcoal/10 dark:ring-white/10 shadow-2xl">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                    <CheckIcon className="w-10 h-10 text-green-600 dark:text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-charcoal dark:text-white">Message Sent!</h3>
                                <p className="text-brand-charcoal/80 dark:text-brand-gray">
                                    Thank you for reaching out. We'll be in touch within 24 hours to discuss your digital transformation.
                                </p>
                                <Button
                                    onClick={() => setSubmitted(false)}
                                    variant="outline"
                                    className="mt-8"
                                >
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold tracking-tight text-brand-charcoal dark:text-white mb-8">
                                    Get a Custom Proposal
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-brand-charcoal dark:text-brand-gray">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full rounded-lg border-brand-charcoal/20 dark:border-white/20 bg-transparent px-4 py-3 text-brand-charcoal dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-400"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-brand-charcoal dark:text-brand-gray">
                                            Business Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full rounded-lg border-brand-charcoal/20 dark:border-white/20 bg-transparent px-4 py-3 text-brand-charcoal dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-400"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="companySize" className="text-sm font-medium text-brand-charcoal dark:text-brand-gray">
                                        Company Size
                                    </label>
                                    <select
                                        id="companySize"
                                        required
                                        defaultValue=""
                                        className="w-full rounded-lg border-brand-charcoal/20 dark:border-white/20 bg-white dark:bg-brand-charcoal px-4 py-3 text-brand-charcoal dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all"
                                    >
                                        <option value="" disabled>Select an option...</option>
                                        <option value="1-10">1-10 Employees</option>
                                        <option value="11-50">11-50 Employees</option>
                                        <option value="51-200">51-200 Employees</option>
                                        <option value="201+">201+ Employees</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="headache" className="text-sm font-medium text-brand-charcoal dark:text-brand-gray">
                                        Biggest IT/Digital Headache
                                    </label>
                                    <textarea
                                        id="headache"
                                        required
                                        rows={4}
                                        className="w-full rounded-lg border-brand-charcoal/20 dark:border-white/20 bg-transparent px-4 py-3 text-brand-charcoal dark:text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-400 resize-none"
                                        placeholder="Tell us what's slowing your business down..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-charcoal hover:bg-brand-charcoal/90 dark:bg-white dark:text-brand-charcoal dark:hover:bg-gray-100 py-6 text-lg rounded-xl font-bold transition-all shadow-lg"
                                >
                                    {isSubmitting ? "Sending..." : "Request Proposal"}
                                </Button>
                                <p className="text-xs text-center text-brand-charcoal/60 dark:text-brand-gray/60 mt-4">
                                    By submitting this form, you agree to our privacy policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

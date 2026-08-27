"use client";

import React from "react";
import { ArrowRight, Check, Zap, Target, Bot, Server } from "lucide-react";
import { PersonalizationDemo } from "../components/PersonalizationDemo";
import { AutomationPipelineDemo } from "../components/AutomationPipelineDemo";

// KhemoConnect 2026 - Upgraded positioning landing page
// GEO-optimized: semantic HTML, clear definitions, authoritative local examples, structured data in layout

export default function KhemoConnect2026() {
  return (
    <div className="min-h-screen bg-white text-[#111] font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--kc-border)]">
        <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6 md:px-10">
          <a href="/" className="flex shrink-0 items-center" aria-label="KhemoConnect home">
            <img
              src="/khemoconnect-logo.png"
              alt="KhemoConnect"
              className="h-10 w-auto md:h-11"
            />
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[var(--kc-slate)] md:flex">
            <a href="#capabilities" className="hover:text-[var(--kc-orange)] transition">Capabilities</a>
            <a href="#demo" className="hover:text-[var(--kc-orange)] transition">See it live</a>
            <a href="#packages" className="hover:text-[var(--kc-orange)] transition">Packages</a>
            <a href="#ai-mzansi" className="hover:text-[var(--kc-orange)] transition">Ai Mzansi</a>
            <a
              href="https://www.khemo.co.za/contact"
              className="inline-flex items-center rounded-[10px] bg-[var(--kc-orange)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--kc-orange-dark)] transition-colors"
            >
              Claim Free Audit
            </a>
          </div>
          <a
            href="https://www.khemo.co.za/contact"
            className="inline-flex items-center rounded-[10px] bg-[var(--kc-orange)] px-3 py-2 text-sm font-medium text-white md:hidden"
          >
            Claim Free Audit
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-[var(--kc-light)] px-3 py-[7px] text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--kc-orange)]">
              Est. 2008 · Gauteng
            </div>
            <h1 className="mb-3.5 max-w-[620px] text-[40px] font-semibold leading-[1.06] tracking-tight text-[var(--kc-navy)] md:text-[48px]">
              Be the business <span className="text-[var(--kc-orange)]">AI recommends.</span>
            </h1>
            <p className="mb-[22px] max-w-[540px] text-[17px] leading-relaxed text-[var(--kc-slate)]">
              GEO-optimized sites and Day-One automation for ambitious South African SMEs. Built on our own stack, from hosting to follow-up.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.khemo.co.za/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--kc-orange)] px-[22px] py-3.5 text-base font-medium text-white hover:bg-[var(--kc-orange-dark)] transition-colors"
              >
                Claim my free audit <ArrowRight size={18} />
              </a>
              <a
                href="#packages"
                className="inline-flex items-center rounded-[10px] border border-[var(--kc-border)] bg-white px-5 py-3.5 text-base font-medium text-[var(--kc-navy)] hover:bg-[var(--kc-light)] transition-colors"
              >
                See packages from R28k
              </a>
            </div>
            <p className="mt-3 text-[13px] text-[var(--kc-slate)]">
              45-minute GEO + AI audit · R12,500 value · no obligation
            </p>
          </div>

          <aside className="rounded-3xl bg-[var(--kc-navy)] p-7 text-white shadow-[0_18px_50px_rgba(15,23,42,0.18)]" aria-label="AI citation example">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--kc-orange)]">AI ANSWER</div>
            <h2 className="mb-5 mt-2.5 text-[26px] font-semibold tracking-tight">best logistics firm in Gauteng</h2>
            {["ChatGPT", "Perplexity", "Google AI"].map((name) => (
              <div key={name} className="mb-2.5 flex items-center gap-3 rounded-xl border border-white/12 px-3.5 py-3 last:mb-0">
                <span className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-md bg-[var(--kc-orange)] text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-base font-medium">{name}</span>
                <span className="ml-auto text-[13px] font-semibold text-[var(--kc-orange)]">Cited</span>
              </div>
            ))}
          </aside>
        </div>
      </header>

      {/* TRUST / METRICS BAR */}
      <div className="border-t border-[var(--kc-border)] bg-[var(--kc-light)]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-4 px-6 py-[18px] text-center md:grid-cols-4 md:px-10">
          <div>
            <strong className="block text-base tracking-tight text-[var(--kc-navy)]">15+</strong>
            <span className="text-[13px] text-[var(--kc-slate)]">years building for SA orgs</span>
          </div>
          <div>
            <strong className="block text-base tracking-tight text-[var(--kc-navy)]">Startups &amp; SMEs</strong>
            <span className="text-[13px] text-[var(--kc-slate)]">our primary focus</span>
          </div>
          <div>
            <strong className="block text-base tracking-tight text-[var(--kc-navy)]">Own the stack</strong>
            <span className="text-[13px] text-[var(--kc-slate)]">hosting to AI layer</span>
          </div>
          <div>
            <strong className="block text-base tracking-tight text-[var(--kc-navy)]">GEO-native</strong>
            <span className="text-[13px] text-[var(--kc-slate)]">by design in 2026</span>
          </div>
        </div>
      </div>

      {/* CAPABILITIES - The 3 pillars + infra */}
      <section id="capabilities" className="kc-container kc-section">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[2px] text-xs font-semibold text-[var(--kc-orange)] mb-3">THE 2026 DIFFERENCE</div>
          <h2 className="kc-heading text-3xl md:text-4xl">Core offerings that win in the age of AI search and automation</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. GEO */}
          <div className="kc-card flex flex-col">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--kc-orange)]/10 text-[var(--kc-orange)]">
              <Target size={22} />
            </div>
            <h3 className="font-semibold text-xl mb-2">From SEO to GEO</h3>
            <p className="text-[var(--kc-slate)] flex-1">
              Traditional rankings are no longer enough. We build sites with highly structured technical data, semantic HTML, precise terminology and clear definitions that LLM crawlers love.
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--kc-orange)]">When buyers ask ChatGPT or Perplexity for “best boutique logistics firm in Gauteng”, your business is the synthesized answer.</p>
          </div>

          {/* 2. AI Webpages */}
          <div className="kc-card flex flex-col">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--kc-orange)]/10 text-[var(--kc-orange)]">
              <Zap size={22} />
            </div>
            <h3 className="font-semibold text-xl mb-2">AI Webpages &amp; Hyper-Personalization</h3>
            <p className="text-[var(--kc-slate)] flex-1">
              Static sites are over. Your website adapts instantly to who is looking: B2B tech visitor sees integration case studies; retail buyer sees quick-commerce and local fulfilment stories.
            </p>
            <div className="mt-4 text-xs uppercase tracking-widest text-[var(--kc-orange)]">One codebase. Many perfect experiences.</div>
          </div>

          {/* 3. Day-One Automation */}
          <div className="kc-card flex flex-col">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--kc-orange)]/10 text-[var(--kc-orange)]">
              <Bot size={22} />
            </div>
            <h3 className="font-semibold text-xl mb-2">“Day-One” AI Automation Packages</h3>
            <p className="text-[var(--kc-slate)] flex-1">
              Don't just host a website - host an automated business pipeline. Lead arrives → AI classifies → background check → personalized proposal drafted → owner pinged on WhatsApp to approve &amp; send.
            </p>
            <div className="mt-4 text-xs uppercase tracking-widest text-[var(--kc-orange)]">SMEs get enterprise-grade automation without enterprise budgets.</div>
          </div>

          {/* 4. Infra / Hosting as advantage */}
          <div id="infra" className="kc-card flex flex-col border-[var(--kc-orange)] border-2">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--kc-navy)] text-white">
              <Server size={22} />
            </div>
            <h3 className="font-semibold text-xl mb-2">Scalable, AI-Optimized Hosting</h3>
            <p className="text-[var(--kc-slate)] flex-1">
              We retain the backend infrastructure as the engine room. That means faster apps, tighter security, instant personalization logic at the edge, and lower total cost than pure-play agencies.
            </p>
            <ul className="mt-4 text-sm space-y-1 text-[var(--kc-slate)]">
              <li className="flex items-center gap-2"><Check size={16} className="text-[var(--kc-orange)]" /> Edge-ready for dynamic pages</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[var(--kc-orange)]" /> WhatsApp + local API integrations</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-[var(--kc-orange)]" /> Full-stack ownership = speed &amp; control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* AI MZANSI - New Skool Community */}
      <section id="ai-mzansi" className="kc-container kc-section border-t">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="uppercase tracking-[2px] text-xs font-semibold text-[var(--kc-orange)] mb-3">NEW OFFERING</div>
            <h2 className="kc-heading text-3xl md:text-4xl mb-4">Ai Mzansi</h2>
            <p className="text-xl text-[var(--kc-slate)] mb-6">The Skool community for Agency Automation in South Africa.</p>
            
            <p className="text-[var(--kc-slate)] mb-6">Master GEO, AI Webpages, and Day-One automation pipelines. Get weekly trainings, ready-to-sell templates, client acquisition systems, and join a growing network of South African agencies building with AI.</p>
            
            <div className="flex flex-wrap gap-4">
              <a href="https://www.skool.com/ai-mzansi-7283" target="_blank" rel="noopener noreferrer" className="kc-btn-primary inline-flex items-center gap-2">
                Join Ai Mzansi on Skool <ArrowRight size={18} />
              </a>
              <a href="#packages" className="kc-btn-secondary">
                See service packages
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/images/ai-mzansi.jpg" 
              alt="Ai Mzansi - Agency Automation School for South Africa" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-[16/10]" 
            />
          </div>
        </div>
      </section>

      {/* LIVE DEMOS */}
      <section id="demo" className="bg-[var(--kc-light)] kc-section border-y">
        <div className="kc-container">
          <div className="max-w-2xl mb-10">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-[var(--kc-orange)] mb-3">EXPERIENCE THE DIFFERENCE</div>
            <h2 className="kc-heading text-3xl md:text-4xl mb-3">Interactive demos built with the same techniques we deliver</h2>
            <p className="text-[var(--kc-slate)]">These are the exact patterns we ship for clients. Lightweight, fast, and ready for production on our stack.</p>
          </div>

          {/* Personalization Demo */}
          <div className="mb-10">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[var(--kc-orange)]"><Zap /></div>
                  <h3 className="font-semibold text-2xl">Hyper-Personalized AI Webpage Demo</h3>
                </div>
                <p className="text-[var(--kc-slate)]">Choose a visitor persona. Watch the headline, featured work, copy and CTA instantly adapt, exactly like real visitors from different ads or search journeys will experience.</p>
              </div>
              <img src="/images/personalization.jpg" alt="AI Hyper Personalization" className="rounded-xl shadow-md w-full hidden md:block" />
            </div>
            <PersonalizationDemo />
          </div>

          {/* Automation Demo */}
          <div>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[var(--kc-orange)]"><Bot /></div>
                  <h3 className="font-semibold text-2xl">Day-One AI Automation Pipeline Demo</h3>
                </div>
                <p className="text-[var(--kc-slate)]">Simulate a lead coming through a KhemoConnect site or app. See classification, proposal generation, and the WhatsApp notification your team receives, all from day one.</p>
              </div>
              <img src="/images/automation.jpg" alt="AI Automation Pipeline" className="rounded-xl shadow-md w-full hidden md:block" />
            </div>
            <AutomationPipelineDemo />
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="kc-container kc-section">
        <div className="text-center mb-10">
          <h2 className="kc-heading text-3xl md:text-4xl mb-3">Packages that deliver results fast.</h2>
          <p className="text-[var(--kc-slate)] max-w-md mx-auto">Transparent starting prices. Custom work scoped after your free audit. All include our AI-optimized hosting.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "GEO Launch", price: "From R28,000", audience: "Startups & local SMEs", desc: "Full GEO audit, semantic + structured data overhaul, authoritative content framework + hosting foundation.", pitch: "Be the answer AI engines recommend." },
            { name: "AI Webpages", price: "From R42,000", audience: "Scale-ups, retail & tech", desc: "Dynamic personalization engine supporting 3+ visitor segments. Adaptive hero, cases, and CTAs.", pitch: "One site. Every visitor sees the right story." },
            { name: "Day-One Automation", price: "From R35,000", audience: "All (powerful add-on)", desc: "Lead intake → classify → background → proposal → WhatsApp/SMS ping. Integrated with your new site or existing CRM.", pitch: "Website + automated pipeline from day one." },
            { name: "Full Stack (Recommended)", price: "From R85,000", audience: "Ambitious SMEs & startups", desc: "GEO + Personalization + Automation + mobile-first portal + 3 months support & optimisation on our hosting.", pitch: "Own the stack. Win in search + experience + ops." },
          ].map((pkg, i) => (
            <div key={i} className="kc-card flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="uppercase text-xs tracking-widest text-[var(--kc-orange)] font-medium">{pkg.audience}</div>
                  <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-[var(--kc-navy)]">{pkg.price}</div>
                </div>
              </div>
              <p className="text-[var(--kc-slate)] mb-4 flex-1">{pkg.desc}</p>
              <div className="text-sm font-medium text-[var(--kc-orange)] mb-4">“{pkg.pitch}”</div>
              <a href="#cta" className="kc-btn-primary text-sm justify-center">Get started with {pkg.name}</a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-6 text-[var(--kc-slate)]">Prices are starting points for standard scopes. Custom work (including Ai Mzansi training bundles) quoted after your free audit. All include our scalable AI-optimized hosting.</p>
      </section>

      {/* GEO SECTION */}
      <section id="geo" className="border-t kc-section bg-white">
        <div className="kc-container">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <h2 className="kc-heading text-3xl mb-6">What is Generative Engine Optimization (GEO) in 2026?</h2>
          
              <div className="prose prose-slate max-w-none text-[var(--kc-slate)]">
                <p>Buyers no longer just click links. They ask ChatGPT Search, Perplexity, Gemini, and Google AI Overviews direct questions and receive synthesized answers.</p>
                
                <p className="font-medium text-[var(--kc-navy)] mt-4">GEO is the practice of structuring your content and digital presence so AI engines retrieve, cite, and recommend your brand.</p>

                <h4 className="font-semibold mt-8 mb-2 text-[var(--kc-navy)]">How KhemoConnect executes GEO</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Precise, authoritative definitions and local terminology (Gauteng-specific examples)</li>
                  <li>Semantic HTML + rich structured data (Service, FAQ, Organization, LocalBusiness signals)</li>
                  <li>Clear question-answer blocks and comparison tables that synthesis engines love</li>
                  <li>Fast, trustworthy pages on our optimized hosting (Core Web Vitals + crawlability)</li>
                </ul>
              </div>

              <div className="mt-8 p-6 border rounded-2xl bg-[var(--kc-light)] text-sm">
                <strong>This very page is built with GEO in mind.</strong> View source to see the structured data, semantic headings, and clear definitions we ship for clients.
              </div>
            </div>

            <div className="md:col-span-2">
              <img 
                src="/images/geo-search.jpg" 
                alt="Generative Engine Optimization - AI search recommendations" 
                className="rounded-2xl shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Strong offer close */}
      <section id="cta" className="kc-container kc-section text-center border-t">
        <div className="max-w-2xl mx-auto">
          <h2 className="kc-heading text-3xl mb-4">Claim your free GEO + AI Audit today</h2>
          <p className="text-lg text-[var(--kc-slate)] mb-6">We'll audit your current site for AI visibility gaps, show you the exact fixes, and deliver a custom roadmap, normally R12,500. No hard sell.</p>
          
          <a 
            href="https://www.khemo.co.za/contact" 
            target="_blank"
            className="kc-btn-primary px-12 py-4 text-lg inline-flex items-center gap-2"
          >
            Book My Free 45-Minute Audit <ArrowRight />
          </a>
          <div className="mt-4 text-sm text-[var(--kc-slate)]">Limited spots this month • Centurion / Johannesburg based • Serving Gauteng SMEs &amp; startups</div>

          <div className="mt-8 text-xs text-[var(--kc-slate)]">
            Or explore <a href="#packages" className="underline">packages starting from R28k</a> or <a href="#ai-mzansi" className="underline">join Ai Mzansi on Skool</a>.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-auto py-10 text-xs text-[var(--kc-slate)]">
        <div className="kc-container flex flex-col md:flex-row justify-between gap-y-4 items-center">
          <div className="flex items-center gap-2">
            <img src="/khemoconnect-logo.png" alt="KhemoConnect" className="h-7 w-auto" />
            <span>© {new Date().getFullYear()} KhemoConnect. Gauteng, South Africa.</span>
          </div>
          <div className="flex gap-6">
            <a href="https://www.khemo.co.za/" className="hover:text-[var(--kc-navy)]">Main site</a>
            <a href="#capabilities" className="hover:text-[var(--kc-navy)]">Services</a>
            <a href="https://www.khemo.co.za/services" className="hover:text-[var(--kc-navy)]" target="_blank">Odoo • M365 • AI Agents</a>
          </div>
          <div>Own the stack. Win with AI search.</div>
        </div>
      </footer>
    </div>
  );
}

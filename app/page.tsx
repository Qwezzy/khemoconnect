"use client";

import React, { useState } from "react";
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
        <div className="kc-container flex h-20 items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/New_KhemoConnect_Logo.png" 
              alt="KhemoConnect" 
              className="h-12 w-auto" 
            />
          </a>
          
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#capabilities" className="hover:text-[var(--kc-orange)] transition">Capabilities</a>
            <a href="#demo" className="hover:text-[var(--kc-orange)] transition">See it live</a>
            <a href="#packages" className="hover:text-[var(--kc-orange)] transition">Packages</a>
            <a href="#ai-mzansi" className="hover:text-[var(--kc-orange)] transition font-medium">Ai Mzansi</a>
            <a href="#geo" className="hover:text-[var(--kc-orange)] transition">GEO</a>
            <a 
              href="#cta" 
              className="kc-btn-primary text-sm px-5 py-2"
            >
              Claim Free Audit
            </a>
          </div>
        </div>
      </nav>

      {/* HERO - Prime real estate with irresistible offer (Hormozi style) */}
      <header className="relative kc-container pt-12 pb-16 md:pt-16 md:pb-20 text-center overflow-hidden">
        {/* AI Agency visual background */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="/images/hero-ai.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-10" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/98 to-white"></div>
        </div>

        <a 
          href="https://www.khemo.co.za/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--kc-light)] px-4 py-1 text-sm font-medium tracking-widest text-[var(--kc-orange)] mb-4 hover:bg-[var(--kc-border)] transition-colors"
        >
          Est. 2008 • A Division of Khemo IT Solutions
        </a>

        {/* Call to Action image replacing the second logo */}
        <a href="#cta" className="block mx-auto w-full max-w-[520px] mb-6">
          <img 
            src="/images/hero-cta.jpg" 
            alt="Free GEO + AI Audit - Call to Action" 
            className="w-full rounded-2xl shadow-xl hover:scale-[1.01] transition-transform" 
          />
        </a>
        
        <h1 className="kc-heading max-w-5xl mx-auto mb-4 text-4xl md:text-5xl leading-tight">
          Get your business <span className="text-[var(--kc-orange)]">cited by ChatGPT, Perplexity &amp; Google AI</span><br />
          , while your leads get qualified and followed up automatically
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--kc-slate)] max-w-3xl mx-auto mb-8">
          GEO-optimized AI websites + Day-One automation pipelines.<br />
          Built on our own scalable hosting. For ambitious South African SMEs and startups.
        </p>

        {/* Irresistible Offer CTA */}
        <div className="max-w-xl mx-auto mb-6">
          <div className="bg-white border border-[var(--kc-orange)] rounded-2xl p-5 mb-6 text-left shadow-sm">
            <div className="font-semibold text-[var(--kc-orange)] mb-1">FREE OFFER (R12,500 value)</div>
            <div className="text-lg mb-2">45-minute GEO + AI Website Audit + Custom Roadmap</div>
            <div className="text-sm text-[var(--kc-slate)]">We'll show you exactly why you're missing from AI recommendations and how to fix it fast. <span className="font-medium">If we can't improve your AI visibility plan, the call is on us.</span></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a href="#cta" className="kc-btn-primary text-base px-10 py-4 text-lg group">
            Claim My Free Audit <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition" size={20} />
          </a>
          <a href="#packages" className="kc-btn-secondary text-base px-8 py-4 text-lg">
            See Packages &amp; Starting Prices
          </a>
        </div>

        <div className="text-xs text-[var(--kc-slate)]">
          No obligation. 30+ Gauteng businesses audited this quarter.
        </div>
      </header>

      {/* TRUST / METRICS BAR */}
      <div className="border-y bg-[var(--kc-light)]">
        <div className="kc-container grid grid-cols-2 md:grid-cols-4 gap-y-8 py-6 text-center text-sm">
          <div><span className="font-semibold text-2xl text-[var(--kc-navy)]">15+</span><br />years building for SA orgs</div>
          <div><span className="font-semibold text-2xl text-[var(--kc-navy)]">Startups &amp; SMEs</span><br />our primary focus</div>
          <div><span className="font-semibold text-2xl text-[var(--kc-navy)]">Own the stack</span><br />hosting to AI layer</div>
          <div><span className="font-semibold text-2xl text-[var(--kc-navy)]">GEO-native</span><br />by design in 2026</div>
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
            <img src="/New_KhemoConnect_Logo.png" alt="KhemoConnect" className="h-7 w-auto" />
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

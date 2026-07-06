"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Persona = {
  id: string;
  label: string;
  source: string;
  headline: string;
  sub: string;
  cta: string;
  cases: string[];
  focus: string;
};

const personas: Persona[] = [
  {
    id: "tech",
    label: "B2B Tech Ad Click",
    source: "LinkedIn / Tech",
    headline: "Integrations that make your tech stack finally talk to each other.",
    sub: "We build the connective tissue between your CRM, finance, and operations, with AI that surfaces insights your team actually uses.",
    cta: "See tech integration examples",
    cases: [
      "B2B SaaS: AI agent qualifies inbound leads from ads, enriches with company data via API, and books discovery calls directly into Calendly + CRM.",
      "Fintech / Professional Services: Real-time AI dashboard pulls data from multiple tools, auto-generates client reports, and flags anomalies for the team.",
      "Enterprise: AI-powered workflow that syncs support tickets, billing, and project status, cutting manual reconciliation by 80%."
    ],
    focus: "Deep systems • APIs • AI co-pilot dashboards",
  },
  {
    id: "retail",
    label: "Retail / Local Buyer",
    source: "Google / Retail",
    headline: "Websites and automations that turn browsers into buyers, fast.",
    sub: "Personalized product journeys, instant lead qualification, and WhatsApp-first order & quote flows that work on mobile networks across Gauteng.",
    cta: "See retail & local commerce examples",
    cases: [
      "Dental Clinic: AI receptionist on the website and WhatsApp triages patient enquiries, checks availability, books appointments, and sends reminders, while the team focuses on patients.",
      "HVAC / Plumbing: When a customer calls or submits a form, AI handles initial triage, qualifies urgency, books the slot in the field technician’s calendar, and sends confirmation, owner gets jobs scheduled without picking up the phone.",
      "Specialty Retail / Local Services: Website personalizes based on visitor (e.g. retail buyer sees stock + same-day options), AI qualifies the lead and triggers WhatsApp quote with pricing and availability."
    ],
    focus: "Mobile-first • Quick commerce • WhatsApp automation",
  },
  {
    id: "startup",
    label: "Startup Founder",
    source: "Direct / Startup networks",
    headline: "Launch a site + automated pipeline that works on day one.",
    sub: "No bloated enterprise software. We give ambitious founders GEO visibility, adaptive landing experiences, and lead-to-proposal automation from the first enquiry.",
    cta: "See startup launch packages",
    cases: [
      "Logistics / Services Startup: Site is optimized for GEO so it appears when buyers ask AI engines for local providers. AI agent instantly qualifies leads and sends personalized proposals.",
      "Healthtech / Professional Services Startup: Adaptive landing pages show different case studies depending on visitor type. AI handles demo booking + basic qualification so founder only talks to warm leads.",
      "Early-stage Founder: Full lead-to-close automation: website captures enquiry → AI classifies and enriches → drafts proposal → notifies founder on WhatsApp with one-tap send. Launch with systems, not spreadsheets."
    ],
    focus: "Speed • GEO from launch • Affordable automation",
  },
];

export function PersonalizationDemo() {
  const [activeId, setActiveId] = useState("tech");
  const active = personas.find(p => p.id === activeId)!;

  return (
    <div className="demo-panel">
      <div className="flex flex-wrap gap-2 mb-6">
        {personas.map(p => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`persona-btn ${activeId === p.id ? "active" : ""}`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="bg-white border rounded-2xl p-8"
        >
          <div className="text-xs uppercase tracking-[1.5px] text-[var(--kc-orange)] mb-1">{active.source} visitor</div>
          
          <h3 className="text-3xl font-semibold tracking-tight mb-3">{active.headline}</h3>
          <p className="text-lg text-[var(--kc-slate)] max-w-2xl mb-6">{active.sub}</p>

          <div className="mb-6">
            <div className="text-xs font-medium uppercase tracking-widest mb-2 text-[var(--kc-slate)]">Featured outcomes for this visitor</div>
            <ul className="grid sm:grid-cols-3 gap-2 text-sm">
              {active.cases.map((c, idx) => (
                <li key={idx} className="flex gap-2 items-start bg-[var(--kc-light)] p-3 rounded-lg">
                  <span className="mt-0.5 text-[var(--kc-orange)]">→</span> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button className="kc-btn-primary" onClick={() => alert('In production this would open a case study or booking flow for similar AI implementations.')}>{active.cta} →</button>
            <div className="text-sm text-[var(--kc-slate)]">Focus: {active.focus}</div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="text-[10px] text-center mt-3 text-[var(--kc-slate)]">This demo uses the same React state + URL-shareable persona technique we deploy for clients.</div>
    </div>
  );
}

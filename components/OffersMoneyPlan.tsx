import React from "react";
import { ArrowRight, Check } from "lucide-react";

const CONTACT = "https://www.khemo.co.za/contact";

type Offer = { name: string; price: string; note?: string; points?: string[]; cta: string };

const webOffers: Offer[] = [
  {
    name: "Landing page",
    price: "From R4,550",
    points: ["One page, up to 5 sections", "Contact form or WhatsApp button", "Mobile-friendly", "Basic SEO"],
    note: "First year from R5,590 incl. domain and Starter hosting",
    cta: "Get a quote",
  },
  {
    name: "Domain registration (.co.za)",
    price: "R150/yr",
    points: ["We register your .co.za domain and manage it for you."],
    cta: "Get a quote",
  },
  {
    name: "Email and SSL fix",
    price: "From R1,950",
    note: "Per domain",
    cta: "Get a quote",
  },
];

const hostingTiers = [
  { name: "Starter", price: "R89 pm" },
  { name: "Business", price: "R149 pm" },
  { name: "Pro", price: "R279 pm" },
];

const growthOffers: Offer[] = [
  {
    name: "GEO Launch",
    price: "From R28,000",
    points: ["Get found in AI search and Google", "Your business set up to be cited by ChatGPT, Gemini and Google AI answers", "Schema, Google Business Profile and content fixes, with a before and after report"],
    cta: "Get a free GEO snapshot",
  },
  {
    name: "M365 / Firm Ops Estate Audit",
    price: "R18,500",
    points: ["5 days", "For law, accounting and professional firms", "Microsoft licences are billed by Microsoft, not by us."],
    cta: "Get a quote",
  },
  {
    name: "Discovery session",
    price: "From R4,500",
    points: ["R4,500 up to 10 users", "R7,500 for 11 to 25 users", "R12,000 for 26 to 50 users", "Custom above 50 users", "The default first step for bigger work"],
    cta: "Book a discovery session",
  },
  {
    name: "Firm Support retainer",
    price: "From R1,500 pm",
    points: ["Microsoft licences are billed by Microsoft, not by us."],
    cta: "Get a quote",
  },
];

const onRequest = ["M365 remediation and governance retainers", "SharePoint / Power Platform builds", "Custom apps"];

function OfferCard({ o }: { o: Offer }) {
  return (
    <div className="kc-card flex flex-col h-full">
      <h4 className="text-xl font-bold text-[var(--kc-navy)] leading-tight mb-2">{o.name}</h4>
      <div className="text-lg font-bold text-[var(--kc-orange)] mb-3">{o.price}</div>
      {o.points && (
        <ul className="space-y-1.5 text-sm text-[var(--kc-slate)] mb-3">
          {o.points.map((p) => (
            <li key={p} className="flex gap-2">
              <Check className="h-4 w-4 mt-0.5 shrink-0 text-[var(--kc-orange)]" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
      {o.note && (
        <p className="text-xs font-semibold text-[var(--kc-orange-dark)] bg-orange-50/70 border border-orange-100/80 rounded-lg p-2.5 mb-3">
          {o.note}
        </p>
      )}
      <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="kc-btn-secondary mt-auto text-sm py-2.5">
        {o.cta}
      </a>
    </div>
  );
}

export function OffersMoneyPlan() {
  return (
    <section id="offers" className="bg-[var(--kc-light)]">
      <div className="kc-container kc-section">
        <div className="text-center mb-10">
          <h2 className="kc-heading text-3xl md:text-4xl mb-3">Everything we offer, from your first website up.</h2>
          <p className="text-[var(--kc-slate)] max-w-xl mx-auto">
            Start with a website, domain and hosting. Grow into AI search visibility, Microsoft 365 and firm operations when you are ready.
          </p>
        </div>

        <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--kc-orange)] mb-4">Web and hosting</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-6">
          {webOffers.map((o) => (
            <OfferCard key={o.name} o={o} />
          ))}
          <div className="kc-card flex flex-col h-full">
            <h4 className="text-xl font-bold text-[var(--kc-navy)] leading-tight mb-2">Hosting packs</h4>
            <div className="text-lg font-bold text-[var(--kc-orange)] mb-3">From R89 pm</div>
            <ul className="divide-y divide-slate-100 text-sm mb-3">
              {hostingTiers.map((t) => (
                <li key={t.name} className="flex justify-between py-1.5">
                  <span className="font-medium text-[var(--kc-navy)]">{t.name}</span>
                  <span className="text-[var(--kc-slate)]">{t.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mb-3">Tier details on request.</p>
            <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="kc-btn-secondary mt-auto text-sm py-2.5">
              Get a quote
            </a>
          </div>
        </div>
        <p className="text-sm text-[var(--kc-slate)] mb-12">
          Support <strong className="text-[var(--kc-navy)]">R450/h</strong> &middot; Specialist work <strong className="text-[var(--kc-navy)]">R650/h</strong>
        </p>

        <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--kc-orange)] mb-4">Growth and business services</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-6">
          {growthOffers.map((o) => (
            <OfferCard key={o.name} o={o} />
          ))}
        </div>
        <div className="kc-card mb-10">
          <h4 className="text-lg font-bold text-[var(--kc-navy)] mb-2">On request</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-[var(--kc-slate)]">
            {onRequest.map((p) => (
              <li key={p} className="flex gap-2">
                <Check className="h-4 w-4 mt-0.5 shrink-0 text-[var(--kc-orange)]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="kc-btn-primary gap-2">
            Get a free GEO snapshot <ArrowRight className="h-4 w-4" />
          </a>
          <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="kc-btn-secondary">Book a discovery session</a>
          <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="kc-btn-secondary">Get a quote</a>
        </div>
      </div>
    </section>
  );
}

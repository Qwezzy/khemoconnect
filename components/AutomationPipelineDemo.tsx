"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface Step {
  id: number;
  label: string;
  detail: string;
  result?: string;
}

const initialSteps: Step[] = [
  { id: 1, label: "Lead captured", detail: "New enquiry via site or app form" },
  { id: 2, label: "AI classification", detail: "Industry + urgency + fit score" },
  { id: 3, label: "Background & enrichment", detail: "Local data sources + quick validation" },
  { id: 4, label: "Proposal drafted", detail: "Personalized, ready for review" },
  { id: 5, label: "WhatsApp ping sent", detail: "Owner notified with 1-tap approve" },
];

export function AutomationPipelineDemo() {
  const [form, setForm] = useState({ name: "Thandi Mokoena", company: "Gauteng Logistics Co.", industry: "Logistics", source: "Website" });
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);

  const runPipeline = async () => {
    setRunning(true);
    setComplete(false);

    const newSteps = [...initialSteps];

    // Step 1 - instant
    await delay(180);

    // Step 2 - classify
    await delay(650);
    newSteps[1] = { ...newSteps[1], result: `Classified: High-fit ${form.industry} lead. Urgency: Medium-High.` };
    setSteps([...newSteps]);

    // Step 3
    await delay(700);
    newSteps[2] = { ...newSteps[2], result: "Background OK. CIPC active. 2 prior engagements noted." };
    setSteps([...newSteps]);

    // Step 4 - draft
    await delay(800);
    newSteps[3] = {
      ...newSteps[3],
      result: `Proposal: “Day-One Automation + GEO site for ${form.company}”. 3 key pain points addressed.`,
    };
    setSteps([...newSteps]);

    // Step 5
    await delay(550);
    newSteps[4] = {
      ...newSteps[4],
      result: `WhatsApp to owner: "New qualified ${form.industry} lead - ${form.name} at ${form.company}. Tap to review & send."`,
    };
    setSteps([...newSteps]);

    setRunning(false);
    setComplete(true);

    toast.success("Pipeline complete - this is the exact flow we ship.");
  };

  const reset = () => {
    setSteps(initialSteps);
    setComplete(false);
  };

  const whatsappMessage = `Hi owner, new qualified lead: ${form.name} (${form.company} - ${form.industry}).\nSource: ${form.source}.\nProposal drafted and ready. Approve?`;

  return (
    <div className="demo-panel">
      <div className="grid md:grid-cols-5 gap-6">
        {/* Form */}
        <div className="md:col-span-2 space-y-3">
          <div>
            <label className="text-xs uppercase tracking-widest text-[var(--kc-slate)]">Contact name</label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-[var(--kc-slate)]">Company</label>
            <input
              className="w-full border rounded-lg px-4 py-2 mt-1"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs uppercase tracking-widest text-[var(--kc-slate)]">Industry</label>
              <select className="w-full border rounded-lg px-4 py-2 mt-1" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                <option>Logistics</option>
                <option>Retail</option>
                <option>Professional Services</option>
                <option>Healthcare</option>
                <option>Tech / SaaS</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-[var(--kc-slate)]">Lead source</label>
              <input className="w-full border rounded-lg px-4 py-2 mt-1" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} />
            </div>
          </div>

          <button
            onClick={runPipeline}
            disabled={running}
            className="mt-4 w-full kc-btn-primary disabled:opacity-60"
          >
            {running ? "Running pipeline..." : "Simulate Pipeline →"}
          </button>
          {complete && (
            <button onClick={reset} className="w-full text-sm underline text-[var(--kc-slate)]">Reset demo</button>
          )}
        </div>

        {/* Pipeline steps */}
        <div className="md:col-span-3 space-y-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              className={`step items-start ${step.result ? "border-[var(--kc-orange)]" : ""}`}
              animate={{ opacity: step.result || idx === 0 ? 1 : 0.6 }}
            >
              <div className={`mt-0.5 h-6 w-6 shrink-0 rounded-full flex items-center justify-center text-xs font-mono border ${step.result ? "bg-[var(--kc-orange)] text-white border-[var(--kc-orange)]" : "border-[var(--kc-border)]"}`}>
                {step.result ? <Check size={14} /> : step.id}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium">{step.label}</div>
                <div className="text-sm text-[var(--kc-slate)]">{step.detail}</div>
                {step.result && (
                  <div className="mt-2 text-sm bg-white p-3 rounded border text-[var(--kc-navy)] font-mono text-[13px] leading-snug">
                    {step.result}
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {complete && (
            <div className="mt-4 p-4 bg-white border rounded-2xl">
              <div className="font-medium mb-2 flex items-center gap-2 text-[var(--kc-orange)]">
                <ArrowRight size={16} /> WhatsApp message ready to send
              </div>
              <pre className="text-xs bg-[var(--kc-light)] p-3 rounded whitespace-pre-wrap font-mono">{whatsappMessage}</pre>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(whatsappMessage);
                  toast.success("Copied to clipboard - ready to paste into WhatsApp Business");
                }}
                className="mt-2 text-xs underline"
              >
                Copy message
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="text-[10px] text-[var(--kc-slate)] mt-4">Real implementations plug into your CRM, WhatsApp Business API, and internal data sources. This is the exact UX your team experiences.</div>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

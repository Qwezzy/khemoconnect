"use client";

import { useEffect } from "react";
import Script from "next/script";
import type { Metadata } from "next";

export default function PackagesPage() {
  useEffect(() => {
    // Tab Switcher Logic
    (window as any).switchTab = function (tabName: string) {
      const tabs = ["web", "care", "enterprise"];
      tabs.forEach((t) => {
        const el = document.getElementById(`tab-${t}`);
        const btn = document.getElementById(`tab-${t}-btn`);
        if (!el || !btn) return;
        if (t === tabName) {
          el.classList.remove("hidden");
          btn.classList.add("bg-white", "text-slate-900", "shadow-sm");
          btn.classList.remove("text-slate-600");
        } else {
          el.classList.add("hidden");
          btn.classList.remove("bg-white", "text-slate-900", "shadow-sm");
          btn.classList.add("text-slate-600");
        }
      });
    };

    // Scroll helper
    (window as any).scrollToConfigurator = function () {
      document.getElementById("quote-builder")?.scrollIntoView({ behavior: "smooth" });
    };

    // Fast select from cards
    (window as any).selectPackage = function (packageName: string, _price: number) {
      const select = document.getElementById("sel-core-package") as HTMLSelectElement;
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(packageName)) {
          select.selectedIndex = i;
          break;
        }
      }
      (window as any).recalculateQuote();
      (window as any).scrollToConfigurator();
    };

    (window as any).selectCarePlan = function (planName: string, _price: number) {
      const select = document.getElementById("sel-care-plan") as HTMLSelectElement;
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(planName.split(":")[0])) {
          select.selectedIndex = i;
          break;
        }
      }
      (window as any).recalculateQuote();
      (window as any).scrollToConfigurator();
    };

    (window as any).selectEnterprise = function (enterpriseName: string, _price: number) {
      const select = document.getElementById("sel-core-package") as HTMLSelectElement;
      for (let i = 0; i < select.options.length; i++) {
        if (
          select.options[i].text.toLowerCase().includes(enterpriseName.toLowerCase().slice(0, 10))
        ) {
          select.selectedIndex = i;
          break;
        }
      }
      (window as any).recalculateQuote();
      (window as any).scrollToConfigurator();
    };

    // Calculate and re-render quote breakdown
    (window as any).recalculateQuote = function () {
      const coreSelect = document.getElementById("sel-core-package") as HTMLSelectElement;
      const careSelect = document.getElementById("sel-care-plan") as HTMLSelectElement;
      const itemsList = document.getElementById("quote-items-list");
      if (!coreSelect || !careSelect || !itemsList) return;

      let onceOffTotal = parseInt(coreSelect.value) || 0;
      let monthlyTotal = parseInt(careSelect.value) || 0;
      let itemListHTML = "";

      if (parseInt(coreSelect.value) > 0) {
        const selectedOpt = coreSelect.options[coreSelect.selectedIndex];
        const name = selectedOpt.getAttribute("data-name");
        itemListHTML += `
          <div class="flex justify-between items-center pb-2 border-b border-slate-200">
            <div>
              <p class="font-bold text-slate-900">${name}</p>
              <span class="text-[10px] text-slate-500">Core Package</span>
            </div>
            <span class="font-bold text-slate-900">R${parseInt(coreSelect.value).toLocaleString()}</span>
          </div>
        `;
      }

      const addonIds = ["addon-copy", "addon-payfast", "addon-powerbi", "addon-popia"];
      addonIds.forEach((id) => {
        const addon = document.getElementById(id) as HTMLInputElement;
        if (addon && addon.checked) {
          const price = parseInt(addon.value);
          const name = addon.getAttribute("data-name");
          onceOffTotal += price;
          itemListHTML += `
            <div class="flex justify-between items-center pb-2 border-b border-slate-200">
              <div>
                <p class="font-bold text-slate-800">${name}</p>
                <span class="text-[10px] text-brand-orange">Add-On Module</span>
              </div>
              <span class="font-bold text-slate-900">R${price.toLocaleString()}</span>
            </div>
          `;
        }
      });

      if (parseInt(careSelect.value) > 0) {
        const selectedCareOpt = careSelect.options[careSelect.selectedIndex];
        const careName = selectedCareOpt.getAttribute("data-name");
        itemListHTML += `
          <div class="flex justify-between items-center pt-1">
            <div>
              <p class="font-bold text-brand-orange">${careName}</p>
              <span class="text-[10px] text-slate-500">Recurring Support</span>
            </div>
            <span class="font-bold text-brand-orange">R${parseInt(careSelect.value).toLocaleString()} /mo</span>
          </div>
        `;
      }

      if (!itemListHTML) {
        itemListHTML = `<p class="text-slate-400 italic">No packages selected yet. Select a package above.</p>`;
      }

      itemsList.innerHTML = itemListHTML;

      const totalOnceoff = document.getElementById("total-onceoff");
      const totalMonthly = document.getElementById("total-monthly");
      const depositAmount = document.getElementById("deposit-amount");
      const launchAmount = document.getElementById("launch-amount");

      if (totalOnceoff) totalOnceoff.innerText = `R${onceOffTotal.toLocaleString()}`;
      if (totalMonthly) totalMonthly.innerText = `R${monthlyTotal.toLocaleString()} /mo`;
      if (depositAmount) depositAmount.innerText = `R${Math.round(onceOffTotal * 0.5).toLocaleString()}`;
      if (launchAmount) launchAmount.innerText = `R${Math.round(onceOffTotal * 0.5).toLocaleString()}`;
    };

    // Modal Proposal Generator
    (window as any).generateProposalModal = function () {
      const company = (document.getElementById("client-company") as HTMLInputElement)?.value || "Client Enterprise";
      const contact = (document.getElementById("client-contact") as HTMLInputElement)?.value || "Valued Client";
      const email = (document.getElementById("client-email") as HTMLInputElement)?.value || "client@company.co.za";
      const phone = (document.getElementById("client-phone") as HTMLInputElement)?.value || "+27 11 000 0000";

      const modalCompany = document.getElementById("modal-client-company");
      const modalContact = document.getElementById("modal-client-contact");
      const modalEmail = document.getElementById("modal-client-email");
      const modalPhone = document.getElementById("modal-client-phone");
      const proposalDate = document.getElementById("proposal-date");
      const proposalRef = document.getElementById("proposal-ref");

      if (modalCompany) modalCompany.innerText = company;
      if (modalContact) modalContact.innerText = `Attn: ${contact}`;
      if (modalEmail) modalEmail.innerText = email;
      if (modalPhone) modalPhone.innerText = phone;

      const today = new Date().toISOString().split("T")[0];
      if (proposalDate) proposalDate.innerText = `Date: ${today}`;
      if (proposalRef) proposalRef.innerText = String(Math.floor(1000 + Math.random() * 9000));

      const tableBody = document.getElementById("modal-items-table");
      let tableHTML = "";

      const coreSelect = document.getElementById("sel-core-package") as HTMLSelectElement;
      let onceOffTotal = parseInt(coreSelect.value) || 0;

      if (parseInt(coreSelect.value) > 0) {
        const name = coreSelect.options[coreSelect.selectedIndex].getAttribute("data-name");
        tableHTML += `
          <tr>
            <td class="p-3 font-semibold text-slate-900">${name}</td>
            <td class="p-3 text-right font-bold">R${parseInt(coreSelect.value).toLocaleString()}</td>
          </tr>
        `;
      }

      const addonIds = ["addon-copy", "addon-payfast", "addon-powerbi", "addon-popia"];
      addonIds.forEach((id) => {
        const addon = document.getElementById(id) as HTMLInputElement;
        if (addon && addon.checked) {
          const price = parseInt(addon.value);
          onceOffTotal += price;
          tableHTML += `
            <tr>
              <td class="p-3 text-slate-700">${addon.getAttribute("data-name")}</td>
              <td class="p-3 text-right font-semibold">R${price.toLocaleString()}</td>
            </tr>
          `;
        }
      });

      const careSelect = document.getElementById("sel-care-plan") as HTMLSelectElement;
      const monthlyVal = parseInt(careSelect.value) || 0;

      if (tableBody)
        tableBody.innerHTML =
          tableHTML ||
          `<tr><td colspan="2" class="p-3 text-center text-slate-400">No core package selected.</td></tr>`;

      const modalDeposit = document.getElementById("modal-deposit");
      const modalLaunch = document.getElementById("modal-launch");
      const modalMonthly = document.getElementById("modal-monthly");

      if (modalDeposit) modalDeposit.innerText = `R${Math.round(onceOffTotal * 0.5).toLocaleString()}`;
      if (modalLaunch) modalLaunch.innerText = `R${Math.round(onceOffTotal * 0.5).toLocaleString()}`;
      if (modalMonthly) modalMonthly.innerText = `R${monthlyVal.toLocaleString()} /mo`;

      document.getElementById("proposal-modal")?.classList.remove("hidden");
    };

    (window as any).closeProposalModal = function () {
      document.getElementById("proposal-modal")?.classList.add("hidden");
    };

    (window as any).printProposal = function () {
      window.print();
    };

    // Initial calculation
    (window as any).recalculateQuote();

    // Cleanup on unmount
    return () => {
      const fns = [
        "switchTab","scrollToConfigurator","selectPackage","selectCarePlan",
        "selectEnterprise","recalculateQuote","generateProposalModal",
        "closeProposalModal","printProposal",
      ];
      fns.forEach((fn) => delete (window as any)[fn]);
    };
  }, []);

  return (
    <>
      {/* External deps — Tailwind CDN config must run before the stylesheet loads */}
      <Script id="tw-config" strategy="beforeInteractive">{`
        window.tailwind = window.tailwind || {};
        window.__tailwindConfig = {
          theme: {
            extend: {
              colors: {
                brand: {
                  orange: '#FF6B35',
                  'orange-dark': '#E85D04',
                  dark: '#0f172a',
                  navy: '#0f172a',
                  slate: '#334155',
                  lightBg: '#f8fafc',
                  border: '#e2e8f0'
                }
              },
              fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif']
              }
            }
          }
        };
      `}</Script>
      <Script
        src="https://cdn.tailwindcss.com"
        strategy="beforeInteractive"
        onLoad={() => {
          if ((window as any).tailwind && (window as any).__tailwindConfig) {
            (window as any).tailwind.config = (window as any).__tailwindConfig;
          }
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
        strategy="lazyOnload"
      />

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        /* Scoped page styles — aligned with home page brand variables */
        .pkb-body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
          color: #0f172a;
        }
        .pkb-body h1, .pkb-body h2, .pkb-body h3,
        .pkb-body h4, .pkb-body h5, .pkb-body h6 {
          font-family: 'Poppins', sans-serif;
        }
        .card-shadow {
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.02);
        }
        .pricing-card {
          transition: all 0.25s ease-in-out;
        }
        .pricing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03);
        }

        /* Home Page Color Palette Mapping */
        .text-brand-orange { color: #FF6B35 !important; }
        .bg-brand-orange { background-color: #FF6B35 !important; }
        .border-brand-orange { border-color: #FF6B35 !important; }
        .hover\:bg-brand-orange:hover { background-color: #FF6B35 !important; }
        .hover\:text-brand-orange:hover { color: #FF6B35 !important; }
        .hover\:bg-orange-600:hover { background-color: #E85D04 !important; }
        .bg-brand-dark { background-color: #0f172a !important; }
        .bg-brand-navy { background-color: #0f172a !important; }
        .focus\:ring-brand-orange:focus {
          outline: none !important;
          border-color: #FF6B35 !important;
          box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2) !important;
        }
        .focus\:border-brand-orange:focus {
          border-color: #FF6B35 !important;
        }

        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          .pkb-body { background: white; }
          .print-container { width: 100% !important; margin: 0 !important; padding: 0 !important; box-shadow: none !important; }
        }
      `}</style>

      <div className="pkb-body antialiased min-h-screen flex flex-col">

        {/* ── NAVBAR (Matches Home Page) ── */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e2e8f0] no-print">
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="/" className="flex shrink-0 items-center py-2" aria-label="KhemoConnect home">
              <img
                src="/logo-horizontal-light.jpg"
                alt="KhemoConnect — Trusted Web Solutions"
                className="h-11 w-auto md:h-12"
              />
            </a>

            <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
              <a href="/#capabilities" className="hover:text-[#FF6B35] transition">Capabilities</a>
              <a href="/#demo" className="hover:text-[#FF6B35] transition">See it live</a>
              <a href="/#packages" className="hover:text-[#FF6B35] transition">Home Packages</a>
              <a href="/#ai-mzansi" className="hover:text-[#FF6B35] transition">Ai Mzansi</a>
              <a href="/packages" className="text-[#FF6B35] font-semibold transition">Pricing Catalog</a>
              <a
                href="https://www.khemo.co.za/contact"
                className="inline-flex items-center rounded-[10px] bg-[#FF6B35] px-4 py-2 text-sm font-medium text-white hover:bg-[#E85D04] transition-colors"
              >
                Claim Free Audit
              </a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={() => (window as any).scrollToConfigurator?.()}
                className="bg-[#FF6B35] hover:bg-[#E85D04] text-white px-3 py-1.5 rounded-[10px] text-xs font-semibold shadow-sm transition-all"
              >
                Build Quote
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO BANNER (Matches Home Page Aesthetics) ── */}
        <section className="bg-white text-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#e2e8f0] no-print">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f8fafc] border border-orange-200/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
              <i className="fa-solid fa-file-invoice-dollar text-[11px]"></i>
              <span>Official Commercial Catalog &amp; Proposal Configurator</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0f172a] leading-tight">
              High-Performance Web &amp; <span className="text-[#FF6B35]">Microsoft 365 Architecture</span>
            </h1>
            <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Explore our standardized digital build packages, recurring maintenance care plans, and enterprise SharePoint / Power Platform solutions. Configure and print your custom proposal instantly.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              {[
                "PayFast &amp; Yoco Ready",
                "POPIA Compliant",
                "Microsoft Certified Consulting",
                "Fast NVMe Hosting Included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 font-medium">
                  <i className="fa-solid fa-circle-check text-[#FF6B35]"></i>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 flex-grow">

          {/* Tab Navigation */}
          <div className="flex justify-center border-b border-slate-200 no-print" id="packages">
            <div className="inline-flex p-1 bg-slate-200 rounded-xl max-w-full overflow-x-auto">
              <button
                id="tab-web-btn"
                onClick={() => (window as any).switchTab?.("web")}
                className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-white text-slate-900 shadow-sm transition-all whitespace-nowrap"
              >
                <i className="fa-solid fa-globe mr-2 text-brand-orange"></i>Web Packages
              </button>
              <button
                id="tab-care-btn"
                onClick={() => (window as any).switchTab?.("care")}
                className="px-6 py-2.5 text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 transition-all whitespace-nowrap"
              >
                <i className="fa-solid fa-shield-halved mr-2 text-brand-orange"></i>Monthly Care Plans
              </button>
              <button
                id="tab-enterprise-btn"
                onClick={() => (window as any).switchTab?.("enterprise")}
                className="px-6 py-2.5 text-sm font-semibold rounded-lg text-slate-600 hover:text-slate-900 transition-all whitespace-nowrap"
              >
                <i className="fa-solid fa-network-wired mr-2 text-brand-orange"></i>Enterprise IT &amp; M365
              </button>
            </div>
          </div>

          {/* ── WEB PACKAGES TAB ── */}
          <div id="tab-web" className="space-y-6">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Conversion-Focused Web Packages</h3>
              <p className="text-slate-600 text-sm mt-1">Designed for high lead capture, mobile speed optimization, and seamless South African payment integration.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Business Starter */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card relative">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Business Starter</h4>
                      <p className="text-xs text-slate-500 mt-1">Trades, services &amp; local firms</p>
                    </div>
                    <span className="text-xs bg-slate-100 font-semibold px-2.5 py-1 rounded-md text-slate-600">7-10 Days</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R4,500 <span className="text-xs font-normal text-slate-500">– R7,500</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">Essential web presence engineered for localized leads and WhatsApp direct contact.</p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {["Up to 5 Custom Mobile-Responsive Pages","Direct WhatsApp Floating Chat Widget","Contact Form & Lead Email Alerts","Local Google Business Profile Setup","Basic On-Page SEO & Speed Tuning"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectPackage?.("Business Starter", 5500)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add to Proposal</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Corporate Growth — featured */}
              <div className="bg-white rounded-2xl border-2 border-brand-orange p-6 flex flex-col justify-between pricing-card relative shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                  Most Popular
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Corporate Growth</h4>
                      <p className="text-xs text-slate-500 mt-1">Growing B2B &amp; multi-branch</p>
                    </div>
                    <span className="text-xs bg-amber-50 text-amber-700 font-semibold px-2.5 py-1 rounded-md">2-3 Weeks</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R9,500 <span className="text-xs font-normal text-slate-500">– R16,500</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">Complete lead engine with CRM integration, structured service funnels, and analytics.</p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {["10 to 15 High-Converting Pages","Interactive Quote / Intake Workflows","Mailchimp / Hubspot / CRM Sync","Blog & Content Hub Architecture","Advanced Analytics & Event Tracking"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectPackage?.("Corporate Growth", 12500)}
                    className="w-full py-2.5 px-4 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <span>Add to Proposal</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* E-Commerce Store */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card relative">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">E-Commerce Store</h4>
                      <p className="text-xs text-slate-500 mt-1">Retailers, merchants &amp; brands</p>
                    </div>
                    <span className="text-xs bg-slate-100 font-semibold px-2.5 py-1 rounded-md text-slate-600">3-4 Weeks</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R14,500 <span className="text-xs font-normal text-slate-500">– R25,000+</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">Complete online store configured for South African payments, shipping, and automated inventory.</p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {["Full Online Shop & Category Hierarchy","Up to 30 Initial Product Uploads","PayFast / Yoco / Ozow Gateway Integration","Automated Courier Shipping Rates (uAfrica)","Stock & Inventory Email Alerts"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectPackage?.("E-Commerce Store", 18500)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add to Proposal</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Custom Web Portal */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card relative">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Custom Web Portal</h4>
                      <p className="text-xs text-slate-500 mt-1">Specialized SaaS &amp; client hubs</p>
                    </div>
                    <span className="text-xs bg-slate-100 font-semibold px-2.5 py-1 rounded-md text-slate-600">4-6 Weeks</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R25,000 <span className="text-xs font-normal text-slate-500">– R65,000+</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">Bespoke web applications featuring client portals, bookings, and custom database workflows.</p>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {["User Authentication & Role Privileges","Client Self-Service Dashboard","Automated Booking & Calendar Scheduling","Custom Database Models & API Connections","Comprehensive Admin Management Suite"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectPackage?.("Custom Web Portal", 35000)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add to Proposal</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ── CARE PLANS TAB ── */}
          <div id="tab-care" className="space-y-6 hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Monthly Website Care &amp; Support Plans</h3>
              <p className="text-slate-600 text-sm mt-1">Ensure proactive cloud hosting, security hardening, daily backups, and ongoing content edits.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

              {/* Tier 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Tier 1: Standard Maintenance</h4>
                    <p className="text-xs text-slate-500 mt-1">Essential operational security</p>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R850 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                  <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                    {["Managed NVMe Cloud Hosting & SSL","Weekly Core & Plugin Security Updates","Automated Offsite Cloud Backups","Uptime & Performance Monitoring","Emergency Malware Removal Guarantee"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectCarePlan?.("Tier 1: Standard Care", 850)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add Care Plan</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Tier 2 — featured */}
              <div className="bg-white rounded-2xl border-2 border-brand-orange p-6 flex flex-col justify-between pricing-card relative shadow-md">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                  Recommended
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Tier 2: Growth Care</h4>
                    <p className="text-xs text-slate-500 mt-1">Maintenance + active updates</p>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R2,200 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                  <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                    {["Everything in Tier 1 Standard","2 Hours Monthly Developer Tasks / Edits","Monthly Technical SEO Health Audit","Form & Conversion Testing","Executive Monthly Performance Report"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-brand-orange"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectCarePlan?.("Tier 2: Growth Care", 2200)}
                    className="w-full py-2.5 px-4 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow"
                  >
                    <span>Add Care Plan</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Tier 3: Accelerator</h4>
                    <p className="text-xs text-slate-500 mt-1">Continuous conversion growth</p>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R4,200 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                  <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4">
                    {["Everything in Tier 2 Growth","5 Hours Monthly Dedicated Dev / Design","Monthly Conversion Rate Optimization (CRO)","Priority SLA (4-Hour Emergency Response)","Quarterly Strategy Review Call"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectCarePlan?.("Tier 3: Accelerator", 4200)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add Care Plan</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ── ENTERPRISE IT TAB ── */}
          <div id="tab-enterprise" className="space-y-6 hidden">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Enterprise IT &amp; Microsoft 365 Architecture</h3>
              <p className="text-slate-600 text-sm mt-1">SharePoint EDRMS document hubs, Power Platform process automation, and POPIA cloud compliance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Model A */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">Model A</span>
                      <h4 className="text-lg font-bold text-slate-900">Tenant Diagnostics &amp; Audits</h4>
                    </div>
                    <span className="text-xs bg-slate-100 font-semibold px-2 py-1 rounded">Fixed Fee</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R22,500 <span className="text-xs font-normal text-slate-500">avg</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">5 to 10-day comprehensive review of Microsoft 365 security, SharePoint permissions, and POPIA risks.</p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {["Tenant Security & Compliance Assessment","Active Directory & RBAC Audit","Document Architecture Gap Report","Prioritized Remediation Roadmap"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectEnterprise?.("M365 Tenant Diagnostic & Audit", 22500)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add Diagnostic</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Model B */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">Model B</span>
                      <h4 className="text-lg font-bold text-slate-900">Milestone System Projects</h4>
                    </div>
                    <span className="text-xs bg-slate-100 font-semibold px-2 py-1 rounded">Turnkey</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R75,000 <span className="text-xs font-normal text-slate-500">avg</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">End-to-End deployment of SharePoint Intranets, Power Automate PO approvals, or Power Apps.</p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {["Centralized Department SharePoint Intranet","Power Automate Workflow Approval Engines","Custom Power Automate / Power Apps Portals","POPIA File Plan & Archival Policies"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectEnterprise?.("SharePoint & Power Platform Implementation", 75000)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add Project Scope</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

              {/* Model C */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between pricing-card">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-orange tracking-wider">Model C</span>
                      <h4 className="text-lg font-bold text-slate-900">Managed IT Consulting Retainer</h4>
                    </div>
                    <span className="text-xs bg-slate-100 font-semibold px-2 py-1 rounded">Monthly</span>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">R18,500 <span className="text-xs font-normal text-slate-500">/ month</span></div>
                  <p className="text-xs text-slate-600 border-b border-slate-100 pb-3">Fractional Solutions Architect and continuous administration of M365 environment.</p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {["25 Dedicated Consulting Hours / Month","Continuous DLP & Security Hardening","Power BI Executive Dashboard Maintenance","Direct Senior IT Architect Escalation"].map((f) => (
                      <li key={f} className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-500"></i>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => (window as any).selectEnterprise?.("Managed Enterprise Retainer (25 Hrs/Mo)", 18500)}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Add Retainer</span><i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ── QUOTE BUILDER ── */}
          <section id="quote-builder" className="bg-white rounded-3xl border border-slate-200 card-shadow overflow-hidden scroll-mt-24 no-print">
            <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
                  <i className="fa-solid fa-sliders"></i>
                  <span>Live Proposal Configurator</span>
                </div>
                <h3 className="text-2xl font-bold">Customize Your Scope &amp; Calculate Investment</h3>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-3 flex items-center gap-3">
                <i className="fa-solid fa-shield-halved text-brand-orange text-xl"></i>
                <div className="text-xs">
                  <p className="font-bold text-white">Transparent Commercial Terms</p>
                  <p className="text-slate-400">50% Deposit • 50% Launch Milestone</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left — selectors */}
              <div className="lg:col-span-7 space-y-6">

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">1. Select Primary Solution Package</label>
                  <select
                    id="sel-core-package"
                    onChange={() => (window as any).recalculateQuote?.()}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl p-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none font-medium"
                  >
                    <option value="0" data-name="None Selected">-- Choose Solution Package --</option>
                    <option value="5500" data-name="Business Starter Web (R4,500 - R7,500)">Business Starter Web (R5,500 avg)</option>
                    <option value="12500" data-name="Corporate Growth Web (R9,500 - R16,500)" defaultValue="12500">Corporate Growth Web (R12,500 avg)</option>
                    <option value="18500" data-name="E-Commerce Store (R14,500 - R25,000)">E-Commerce Store (R18,500 avg)</option>
                    <option value="35000" data-name="Custom Web Portal (R25,000 - R65,000)">Custom Web Portal (R35,000 avg)</option>
                    <option value="22500" data-name="M365 Tenant Diagnostic Audit">M365 Tenant Diagnostic Audit (R22,500)</option>
                    <option value="75000" data-name="SharePoint & Power Platform Deployment">SharePoint &amp; Power Platform Deployment (R75,000)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">2. Select Monthly Support / Retainer Plan</label>
                  <select
                    id="sel-care-plan"
                    onChange={() => (window as any).recalculateQuote?.()}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl p-3 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none font-medium"
                  >
                    <option value="0" data-name="No Monthly Care Plan">No Monthly Support Plan (Self-managed)</option>
                    <option value="850" data-name="Tier 1: Standard Web Care (R850/mo)">Tier 1: Standard Web Care (R850/mo)</option>
                    <option value="2200" data-name="Tier 2: Growth Web Care (R2,200/mo)">Tier 2: Growth Web Care (R2,200/mo)</option>
                    <option value="4200" data-name="Tier 3: Accelerator Care (R4,200/mo)">Tier 3: Accelerator Care (R4,200/mo)</option>
                    <option value="18500" data-name="Managed Enterprise M365 Retainer (R18,500/mo)">Managed Enterprise M365 Retainer (R18,500/mo)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">3. Select Optional Add-On Modules</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { id: "addon-copy",    value: "3500", name: "Professional Copywriting & Brand Tone (R3,500)", label: "Copywriting & Content (R3,500)" },
                      { id: "addon-payfast", value: "2500", name: "Payment Gateway Setup (PayFast/Yoco) (R2,500)",   label: "Payment Gateway Integration (R2,500)" },
                      { id: "addon-powerbi", value: "8500", name: "Power BI Executive Analytics Dashboard (R8,500)", label: "Power BI Live Analytics Dashboard (R8,500)" },
                      { id: "addon-popia",   value: "4500", name: "POPIA Privacy & Data Protection Compliance Setup (R4,500)", label: "POPIA Data Protection Setup (R4,500)" },
                    ].map((addon) => (
                      <label key={addon.id} className="flex items-center p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                        <input
                          type="checkbox"
                          id={addon.id}
                          value={addon.value}
                          data-name={addon.name}
                          onChange={() => (window as any).recalculateQuote?.()}
                          className="w-4 h-4 text-brand-orange rounded focus:ring-brand-orange"
                        />
                        <span className="ml-2 font-semibold text-slate-800">{addon.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">4. Client / Company Details</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text"  id="client-company" placeholder="Company Name"              className="bg-slate-50 border border-slate-300 text-sm rounded-xl p-3 outline-none focus:ring-2 focus:ring-brand-orange" />
                    <input type="text"  id="client-contact" placeholder="Contact Person Name"       className="bg-slate-50 border border-slate-300 text-sm rounded-xl p-3 outline-none focus:ring-2 focus:ring-brand-orange" />
                    <input type="email" id="client-email"   placeholder="Email Address"             className="bg-slate-50 border border-slate-300 text-sm rounded-xl p-3 outline-none focus:ring-2 focus:ring-brand-orange" />
                    <input type="tel"   id="client-phone"   placeholder="Phone / WhatsApp Number"   className="bg-slate-50 border border-slate-300 text-sm rounded-xl p-3 outline-none focus:ring-2 focus:ring-brand-orange" />
                  </div>
                </div>
              </div>

              {/* Right — live summary */}
              <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-6">
                <div>
                  <div className="border-b border-slate-200 pb-4 mb-4 flex justify-between items-center">
                    <h4 className="text-base font-bold text-slate-900">Investment Summary</h4>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full">Live Estimate</span>
                  </div>
                  <div className="space-y-3 text-xs text-slate-700 max-h-56 overflow-y-auto pr-1" id="quote-items-list"></div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">Once-Off Project Total:</span>
                    <span className="text-lg font-bold text-slate-900" id="total-onceoff">R0</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-medium">Monthly Retainer Total:</span>
                    <span className="text-lg font-bold text-brand-orange" id="total-monthly">R0 /mo</span>
                  </div>
                  <div className="bg-slate-200/60 rounded-xl p-3 text-[11px] text-slate-600 space-y-1">
                    <div className="flex justify-between">
                      <span>50% Initial Deposit Due:</span>
                      <strong id="deposit-amount" className="text-slate-900">R0</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>50% Launch Balance:</span>
                      <strong id="launch-amount" className="text-slate-900">R0</strong>
                    </div>
                  </div>
                  <button
                    onClick={() => (window as any).generateProposalModal?.()}
                    className="w-full py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <i className="fa-solid fa-file-pdf"></i>
                    <span>Generate Official Proposal</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── FEATURE COMPARISON TABLE ── */}
          <section className="bg-white rounded-3xl border border-slate-200 p-8 card-shadow no-print">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">Package Feature Comparison Matrix</h3>
            <p className="text-slate-600 text-xs sm:text-sm text-center max-w-xl mx-auto mb-8">Detailed side-by-side comparison of deliverables across core web tiers.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-900 font-bold bg-slate-50">
                    <th className="p-3">Deliverable Feature</th>
                    <th className="p-3 text-center">Business Starter</th>
                    <th className="p-3 text-center text-brand-orange bg-amber-50/50">Corporate Growth</th>
                    <th className="p-3 text-center">E-Commerce Store</th>
                    <th className="p-3 text-center">Custom Portal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-3 font-semibold">Page Capacity</td>
                    <td className="p-3 text-center">Up to 5 Pages</td>
                    <td className="p-3 text-center font-bold text-slate-900 bg-amber-50/20">10 – 15 Pages</td>
                    <td className="p-3 text-center">Catalog + 30 Products</td>
                    <td className="p-3 text-center">Custom Architecture</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Lead Engine / Contact Forms</td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i></td>
                    <td className="p-3 text-center bg-amber-50/20"><i className="fa-solid fa-check text-emerald-500"></i> (Custom Funnels)</td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i></td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">WhatsApp Live Integration</td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i></td>
                    <td className="p-3 text-center bg-amber-50/20"><i className="fa-solid fa-check text-emerald-500"></i></td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i></td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">CRM / Email Automation Sync</td>
                    <td className="p-3 text-center text-slate-300"><i className="fa-solid fa-minus"></i></td>
                    <td className="p-3 text-center bg-amber-50/20"><i className="fa-solid fa-check text-emerald-500"></i> Mailchimp/Hubspot</td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i> Order Emails</td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i> Custom API</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">South African Online Payment Gateway</td>
                    <td className="p-3 text-center text-slate-300"><i className="fa-solid fa-minus"></i></td>
                    <td className="p-3 text-center bg-amber-50/20 text-slate-300"><i className="fa-solid fa-minus"></i></td>
                    <td className="p-3 text-center font-bold text-slate-900"><i className="fa-solid fa-check text-emerald-500"></i> PayFast / Yoco</td>
                    <td className="p-3 text-center"><i className="fa-solid fa-check text-emerald-500"></i> PayFast / Stripe</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Google Local &amp; SEO Setup</td>
                    <td className="p-3 text-center">Basic Local SEO</td>
                    <td className="p-3 text-center bg-amber-50/20 font-bold text-slate-900">Advanced On-Page SEO</td>
                    <td className="p-3 text-center">E-com Product SEO</td>
                    <td className="p-3 text-center">Custom Technical SEO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-xs no-print">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-horizontal-light.jpg"
                alt="KhemoConnect Logo"
                className="h-8 w-auto bg-white p-1 rounded"
              />
              <div>
                <span className="font-bold text-white">KhemoConnect &amp; IT Solutions</span>
                <p className="text-[10px] text-slate-400">Commercial Playbook &amp; Interactive Proposal Configurator</p>
              </div>
            </div>
            <p>© 2026 KhemoConnect. All rights reserved. High-Performance Web &amp; Enterprise IT Architecture.</p>
          </div>
        </footer>

        {/* ── PROPOSAL MODAL ── */}
        <div id="proposal-modal" className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 hidden no-print">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => (window as any).closeProposalModal?.()}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold p-2"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div id="printable-area" className="space-y-6 text-slate-900">
              {/* Proposal Header */}
              <div className="flex justify-between items-start border-b border-slate-200 pb-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo-horizontal-light.jpg"
                    alt="KhemoConnect Logo" 
                    className="h-10 w-auto"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">KhemoConnect &amp; IT Solutions</h2>
                    <p className="text-xs text-slate-500">Commercial Project Proposal &amp; Fee Estimate</p>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <p className="font-bold text-brand-orange text-sm" id="proposal-date">Date: —</p>
                  <p className="text-slate-500">Ref: KC-PROP-<span id="proposal-ref">—</span></p>
                </div>
              </div>

              {/* Client Info */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-slate-500 font-medium">Prepared For:</p>
                  <p className="font-bold text-slate-900 text-sm" id="modal-client-company">Company Name</p>
                  <p className="text-slate-700" id="modal-client-contact">Attn: Contact Name</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 font-medium">Contact Information:</p>
                  <p className="text-slate-700" id="modal-client-email">email@domain.co.za</p>
                  <p className="text-slate-700" id="modal-client-phone">+27 00 000 0000</p>
                </div>
              </div>

              {/* Scope Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Project Scope &amp; Investment Schedule</h4>
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-100 text-slate-900 font-bold">
                      <th className="p-3 border-b border-slate-200">Selected Item / Service Module</th>
                      <th className="p-3 border-b border-slate-200 text-right">Fee (ZAR)</th>
                    </tr>
                  </thead>
                  <tbody id="modal-items-table" className="divide-y divide-slate-200"></tbody>
                </table>
              </div>

              {/* Payment Schedule */}
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs space-y-2">
                <h5 className="font-bold text-amber-900">Commercial Terms &amp; Payment Milestones</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-amber-900">
                  <div>
                    <span className="text-slate-500">Initial Deposit (50%):</span>
                    <p className="font-bold text-sm" id="modal-deposit">R0</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Launch Milestone (50%):</span>
                    <p className="font-bold text-sm" id="modal-launch">R0</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Monthly Care / Retainer:</span>
                    <p className="font-bold text-sm text-brand-orange" id="modal-monthly">R0 /mo</p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 border-t border-slate-200 pt-4 space-y-1">
                <p>• Quote valid for 30 calendar days from issue date. All web builds include responsive mobile formatting, speed tuning, and SSL protection.</p>
                <p>• KhemoConnect &amp; IT Solutions • Web Development, Managed Cloud &amp; Enterprise Microsoft 365 Architecture.</p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => (window as any).closeProposalModal?.()}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
              >
                Close &amp; Edit
              </button>
              <button
                onClick={() => (window as any).printProposal?.()}
                className="px-6 py-2.5 bg-brand-orange hover:bg-orange-600 text-white text-xs font-bold rounded-xl shadow transition-colors flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-print"></i>
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

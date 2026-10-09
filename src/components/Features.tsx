"use client";

import { useState } from "react";
import { ArrowUpRight, Wallet, ChartNoAxesCombined, PiggyBank, CalendarDays, ScanLine, FolderLock, SlidersHorizontal } from "lucide-react";
import AppScreen from "./AppScreen";
import { APP_LINKS } from "@/constants/links";

const views = [
  { name: "Accounts", icon: Wallet, screen: "accounts", title: "See the whole picture.", description: "Cash, bank accounts, and e-wallets. Keep balances together and record transfers without losing track.", detail: "One place for the money you manage." },
  { name: "Activity", icon: ChartNoAxesCombined, screen: "activity", title: "Understand your everyday.", description: "Follow spending trends, compare periods, and find the transactions behind the numbers.", detail: "Turn your transaction history into useful insight." },
  { name: "Budgets", icon: PiggyBank, screen: "budgets", title: "Make room for what matters.", description: "Set category budgets and see how much is left, so your next spending decision feels a little clearer.", detail: "A plan you can check in on, every day." },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const view = views[active];
  return <>
    <section id="features" className="container features-section"><div className="section-heading"><p className="eyebrow">Less guesswork. More understanding.</p><h2>Everything adds up<br />to a clearer picture.</h2><p>From your first coffee to your next big goal, give every part of your finances a place.</p></div>
      <div className="feature-showcase"><div className="feature-info"><div className="feature-tabs" role="tablist" aria-label="Explore Koin features">{views.map((item, i) => <button key={item.name} id={`tab-${item.screen}`} role="tab" aria-selected={active === i} aria-controls="feature-panel" tabIndex={active === i ? 0 : -1} onClick={() => setActive(i)} onKeyDown={event => { const next = event.key === "ArrowRight" ? (i + 1) % views.length : event.key === "ArrowLeft" ? (i + views.length - 1) % views.length : event.key === "Home" ? 0 : event.key === "End" ? views.length - 1 : null; if (next !== null) { event.preventDefault(); setActive(next); document.getElementById(`tab-${views[next].screen}`)?.focus(); } }}><item.icon size={17} aria-hidden="true" />{item.name}</button>)}</div><div id="feature-panel" role="tabpanel" aria-labelledby={`tab-${view.screen}`} tabIndex={0} key={view.screen} className="feature-panel"><h3>{view.title}</h3><p>{view.description}</p><span className="feature-detail">{view.detail}</span></div><a href={APP_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-link">Take a closer look on GitHub <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="feature-visual" key={view.name}><AppScreen screen={view.screen} alt={`Koin ${view.name.toLowerCase()} screen`} /></div></div>
      <div className="capabilities"><article><CalendarDays /><h3>Look a little further ahead.</h3><p>Organize recurring payments, track debts, and plan for savings goals alongside your everyday spending.</p></article><article><ScanLine /><h3>Less effort. More up to date.</h3><p>Record entries with voice input, suggestions from your history, or Android Quick Settings.</p></article></div>
    </section>
    <section className="container privacy-section"><div className="privacy-symbol"><FolderLock size={54} strokeWidth={1.2} aria-hidden="true" /></div><div className="privacy-copy"><h2>Personal finance.<br />Kept personal.</h2><p>Your financial records and category learning stay on your device. Local recovery copies and manual exports help you keep a backup.</p><a className="text-link" href={`${APP_LINKS.github}#your-data`} target="_blank" rel="noopener noreferrer">Read about your data <ArrowUpRight size={17} aria-hidden="true" /></a></div><div className="personal-note"><SlidersHorizontal size={23} aria-hidden="true" /><h3>Feels like your space.</h3><p>Light or dark. Your choice of accent. Make Koin feel right for you.</p></div></section>
  </>;
}

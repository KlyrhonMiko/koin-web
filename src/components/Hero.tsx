import { ArrowUpRight, ShieldCheck, Wallet, ChartNoAxesCombined } from "lucide-react";
import DownloadLink from "./DownloadLink";
import AppScreen from "./AppScreen";
import { APP_LINKS } from "@/constants/links";

export default function Hero() {
  return (
    <>
      <section className="container hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Personal finance, thoughtfully organized</p>
          <h1 id="hero-title">Your money.<br /><span>A clearer picture.</span></h1>
          <p className="hero-description">
            Bring your accounts, spending, and savings together.
            Make everyday decisions with a little more clarity.
          </p>
          <div className="hero-actions">
            <DownloadLink location="Hero" />
            <a className="text-link" href={APP_LINKS.github} target="_blank" rel="noopener noreferrer">
              Explore source <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-label="Koin app screens">
          <div className="hero-screen-overview"><AppScreen screen="home" alt="Koin overview showing your balance, accounts, and upcoming payments" priority /></div>
          <div className="hero-screen-activity"><AppScreen screen="activity" alt="Koin spending analysis with weekly trends and transaction history" priority /></div>
        </div>
      </section>
      <div className="container benefits" aria-label="Koin at a glance">
        <div><Wallet aria-hidden="true" /><span>All your accounts, one view</span></div>
        <div><ChartNoAxesCombined aria-hidden="true" /><span>Everyday spending, made clear</span></div>
        <div><ShieldCheck aria-hidden="true" /><span>Financial records stay on your device</span></div>
      </div>
    </>
  );
}


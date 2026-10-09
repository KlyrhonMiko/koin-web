import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DownloadLink from "./DownloadLink";
import { APP_LINKS } from "@/constants/links";

export default function Footer() {
  return <footer className="container"><section className="download-section" id="download"><div><h2>A clearer view starts here.</h2><p>Make a little space for your money.</p></div><div className="download-action"><DownloadLink location="Footer" /><span>Android APK · Available on GitHub</span></div></section><div className="footer-bottom"><Link href="/" className="wordmark">Koin<span aria-hidden="true">.</span></Link><p>Personal finance, thoughtfully organized.</p><a href={APP_LINKS.githubProfile} target="_blank" rel="noopener noreferrer">Made by KlyrhonMiko <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>;
}

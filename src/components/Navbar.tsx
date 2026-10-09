import Link from "next/link";
import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import DownloadLink from "./DownloadLink";
import { APP_LINKS } from "@/constants/links";

export default function Navbar() {
  return <header className="site-header"><nav className="container navigation" aria-label="Main navigation">
    <Link href="/" className="wordmark" aria-label="Koin home">Koin<span aria-hidden="true">.</span></Link>
    <div className="nav-links"><Link href="#features">Features</Link><a className="source-nav" href={APP_LINKS.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" /> Source</a></div>
    <div className="nav-actions"><ThemeToggle /><DownloadLink location="Navbar" compact /></div>
  </nav></header>;
}

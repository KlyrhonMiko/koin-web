"use client";

import { Download } from "lucide-react";
import { track } from "@vercel/analytics";
import { APP_LINKS } from "@/constants/links";

export default function DownloadLink({ location, compact = false }: { location: string; compact?: boolean }) {
  return <a className={`button button-primary${compact ? " button-small" : ""}`} href={APP_LINKS.download} onClick={() => track("Download", { location })}><Download size={17} aria-hidden="true" />{compact ? "Download" : "Download for Android"}</a>;
}

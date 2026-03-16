"use client";

import { useRef } from "react";
import { RevealHeader } from "@/components/ui/reveal-header";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────── *
 *  SVG Icon Components (inline for perf)     *
 * ────────────────────────────────────────── */

function IconHTML() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8h8l-.5 6L12 16l-3.5-2-.2-2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCSS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8h8l-.3 3H9.5l.3 3h5.5l-.4 4L12 19.5 9.3 18l-.2-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconJS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 15v-3m0 3c0 1.1-.9 2-2 2m6-5c-.6-.6-1.3-1-2-1s-2 .5-2 1.5.9 1.5 2 1.5 2 .5 2 1.5-.9 1.5-2 1.5c-.7 0-1.4-.4-2-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 12h5m-2.5 0v6M17 12h-3v2c0 1.1.9 2 2 2h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconReact() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function IconNext() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8v8m0 0l7-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8v6" strokeLinecap="round" />
    </svg>
  );
}

function IconTailwind() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 8c1-3 3.5-4 6-4 3.5 0 4.5 2.5 4 4.5-.5 2-2.5 2.5-4 2.5-2 0-3 .5-3.5 2.5-.5 2 1 3 3 3s4-1 4.5-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" strokeLinejoin="round" />
      <path d="M12 12V3m0 9l8-4.5M12 12l-8-4.5" strokeLinejoin="round" />
    </svg>
  );
}

function IconExpress() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h16M4 12l4-4m-4 4l4 4m12-8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconJWT() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6m-6 3h6m-6 3h4" strokeLinecap="round" />
      <circle cx="15" cy="17" r="2" />
    </svg>
  );
}

function IconAPI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 9l-4 3 4 3m8-6l4 3-4 3M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMongo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C9 6 7 9 7 13c0 3.3 2.2 6 5 6s5-2.7 5-6c0-4-2-7-5-11z" strokeLinejoin="round" />
      <path d="M12 15v6" strokeLinecap="round" />
    </svg>
  );
}

function IconMySQL() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="7" rx="8" ry="3" />
      <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

function IconPostgres() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="7" rx="8" ry="3" />
      <path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
      <path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" />
      <path d="M12 10v10" strokeLinecap="round" />
    </svg>
  );
}

function IconRedis() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 15l8 4 8-4M4 11l8 4 8-4M12 3l8 4-8 4-8-4 8-4z" strokeLinejoin="round" />
    </svg>
  );
}

function IconDocker() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 13h20c0 4-3 7-7.5 7S5 18 4 16" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="10" width="3" height="3" rx=".5" />
      <rect x="10.5" y="10" width="3" height="3" rx=".5" />
      <rect x="10.5" y="6.5" width="3" height="3" rx=".5" />
      <rect x="14" y="10" width="3" height="3" rx=".5" />
      <rect x="7" y="6.5" width="3" height="3" rx=".5" />
    </svg>
  );
}

function IconAWS() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 16l4-10 4 10m-7-3h6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 6l2 5 2-5m-6 10c1.5 1 3.5 1 5 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconVercel() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4l9 16H3L12 4z" strokeLinejoin="round" />
    </svg>
  );
}

function IconNginx() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 4v16l7-6 7 6V4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGit() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="10" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M6 8.5V15.5m0-7l9.5 2" strokeLinecap="round" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18c-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.16.59.67.5A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconRabbitMQ() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <rect x="6" y="9" width="3" height="3" rx=".5" />
      <rect x="10.5" y="9" width="3" height="3" rx=".5" />
      <rect x="15" y="9" width="3" height="3" rx=".5" />
      <path d="M10.5 14h3v4h-3z" />
    </svg>
  );
}

function IconPython() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c-1.7 0-3 .5-3.8 1.3C7.5 4 7.5 5 7.5 6v2H12v1H6c-1 0-3 .6-3 4s1 4.5 2.5 4.5H7v-2.3c0-1.5 1.2-2.7 2.7-2.7h4.6c1.2 0 2.2-1 2.2-2.2V6.5c0-1.2-.6-2.2-1.5-3C14.2 2.5 13 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 22c1.7 0 3-.5 3.8-1.3.7-.7.7-1.7.7-2.7v-2H12v-1h6c1 0 3-.6 3-4s-1-4.5-2.5-4.5H17v2.3c0 1.5-1.2 2.7-2.7 2.7H9.7c-1.2 0-2.2 1-2.2 2.2v3.8c0 1.2.6 2.2 1.5 3 .8 1 2 1.5 3 1.5z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="5.5" r=".8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconGraphQL() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12,2 3,7 3,17 12,22 21,17 21,7" strokeLinejoin="round" />
      <circle cx="12" cy="2" r="1.5" />
      <circle cx="3" cy="7" r="1.5" />
      <circle cx="21" cy="7" r="1.5" />
      <circle cx="3" cy="17" r="1.5" />
      <circle cx="21" cy="17" r="1.5" />
      <circle cx="12" cy="22" r="1.5" />
    </svg>
  );
}

function IconSocketIO() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l3 5h-6l3-5z" strokeLinejoin="round" />
      <path d="M12 17l-3-5h6l-3 5z" strokeLinejoin="round" />
    </svg>
  );
}

function IconMongoose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C8 7 6 10 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-4-2-7-6-12z" strokeLinejoin="round" />
      <path d="M12 14v8M10 16h4" strokeLinecap="round" />
    </svg>
  );
}

function IconFirebase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 20l2-14 3 6-5 8z" strokeLinejoin="round" />
      <path d="M5 20l7-4 7 4-7-18-2 8-1.5-3L5 20z" strokeLinejoin="round" />
    </svg>
  );
}

function IconPrisma() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l9 16H7L3 10l9-8z" strokeLinejoin="round" />
      <path d="M12 2v10l9 6" strokeLinejoin="round" />
    </svg>
  );
}

function IconGitHubActions() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <path d="M7 7l3 3M17 7l-3 3M7 17l3-3" strokeLinecap="round" />
    </svg>
  );
}

function IconLinux() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c-2 0-4 3-4 7v4c-2 1-3 2-3 3 0 2 3 3 3 3h8s3-1 3-3c0-1-1-2-3-3v-4c0-4-2-7-4-7z" strokeLinejoin="round" />
      <circle cx="10.5" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="8" r="1" fill="currentColor" stroke="none" />
      <path d="M10 11h4" strokeLinecap="round" />
    </svg>
  );
}

function IconVSCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 3l4 2v14l-4 2-9-7.5L4 17l-2-1.5v-7L4 7l4 3.5L17 3z" strokeLinejoin="round" />
      <path d="M17 3v18" strokeLinecap="round" />
    </svg>
  );
}

function IconPostman() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconNPM() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="M7 9v6M7 9h4v6M11 9h4v4h-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChatGPT() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 10c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1c0 1.1-.9 2-2 2h-3l-2 3v-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLangChain() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <circle cx="12" cy="5" r="3" />
      <circle cx="12" cy="19" r="3" />
      <path d="M8.5 10.5l2-3.5M15.5 10.5l-2-3.5M8.5 13.5l2 3.5M15.5 13.5l-2 3.5" />
    </svg>
  );
}

function IconPromptEng() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 8h4M7 12h8M7 16h6" strokeLinecap="round" />
      <path d="M16 8l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconOpenAI() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3a9 9 0 0 1 8 13l-4-2.5V9l-4-2-4 2v4.5L4 16A9 9 0 0 1 12 3z" strokeLinejoin="round" />
      <path d="M12 3v6l4 2.5" strokeLinejoin="round" />
      <path d="M8 13.5L4 16" strokeLinecap="round" />
    </svg>
  );
}

function IconGemini() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2c0 5.5-4.5 10-10 10 5.5 0 10 4.5 10 10 0-5.5 4.5-10 10-10-5.5 0-10-4.5-10-10z" strokeLinejoin="round" />
    </svg>
  );
}

function IconRAG() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="7" height="7" rx="1.5" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" />
      <rect x="8.5" y="13" width="7" height="7" rx="1.5" />
      <path d="M6.5 11v2.5h2M17.5 11v2.5h-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconHuggingFace() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <path d="M8 14.5c1.3 1.5 3 2 4 2s2.7-.5 4-2" strokeLinecap="round" />
      <path d="M5.5 8.5C6.3 7 7.5 7 8 7.5M18.5 8.5C17.7 7 16.5 7 16 7.5" strokeLinecap="round" />
    </svg>
  );
}

function IconLLMs() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h16M4 10h16M4 14h10M4 18h6" strokeLinecap="round" />
      <circle cx="18" cy="16" r="3" />
      <path d="M18 14.5v3M16.7 15.2l2.6 2.6" strokeLinecap="round" />
    </svg>
  );
}

function IconN8N() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="9" width="5" height="5" rx="1" />
      <rect x="9.5" y="9" width="5" height="5" rx="1" />
      <rect x="17" y="9" width="5" height="5" rx="1" />
      <path d="M7 11.5h2.5M14.5 11.5h2.5" strokeLinecap="round" />
      <path d="M4.5 9V6.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V9" strokeLinecap="round" />
    </svg>
  );
}

function IconVectorDB() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M7.5 7.5l3 3M16.5 7.5l-3 3M7.5 16.5l3-3M16.5 16.5l-3-3" />
    </svg>
  );
}

function IconAIAgents() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M7 20v-2a5 5 0 0 1 10 0v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
      <path d="M10 9h4" strokeLinecap="round" />
      <path d="M4 12h3M17 12h3" strokeLinecap="round" />
    </svg>
  );
}

function IconClaude() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8c-1.5 0-3 1.3-3 4s1.5 4 3 4" strokeLinecap="round" />
      <path d="M15 8c1.5 0 3 1.3 3 4s-1.5 4-3 4" strokeLinecap="round" />
      <path d="M10 12h4" strokeLinecap="round" />
    </svg>
  );
}

/* ────────────────────────────────────────── *
 *  Skill categories data                     *
 * ────────────────────────────────────────── */

interface Skill {
  name: string;
  icon: React.ComponentType;
}

interface SkillCategory {
  title: string;
  accent: string;
  glowColor: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "#00f0ff",
    glowColor: "rgba(0,240,255,0.15)",
    skills: [
      { name: "HTML", icon: IconHTML },
      { name: "CSS", icon: IconCSS },
      { name: "JavaScript", icon: IconJS },
      { name: "TypeScript", icon: IconTS },
      { name: "React", icon: IconReact },
      { name: "Next.js", icon: IconNext },
      { name: "Tailwind CSS", icon: IconTailwind },
    ],
  },
  {
    title: "Backend",
    accent: "#8b5cf6",
    glowColor: "rgba(139,92,246,0.15)",
    skills: [
      { name: "Node.js", icon: IconNode },
      { name: "Express.js", icon: IconExpress },
      { name: "Python", icon: IconPython },
      { name: "GraphQL", icon: IconGraphQL },
      { name: "REST APIs", icon: IconAPI },
      { name: "Socket.io", icon: IconSocketIO },
      { name: "JWT", icon: IconJWT },
      { name: "Mongoose", icon: IconMongoose },
    ],
  },
  {
    title: "Databases",
    accent: "#06d6a0",
    glowColor: "rgba(6,214,160,0.15)",
    skills: [
      { name: "MongoDB", icon: IconMongo },
      { name: "MySQL", icon: IconMySQL },
      { name: "PostgreSQL", icon: IconPostgres },
      { name: "Redis", icon: IconRedis },
      { name: "Firebase", icon: IconFirebase },
      { name: "Prisma", icon: IconPrisma },
    ],
  },
  {
    title: "DevOps & Cloud",
    accent: "#f59e0b",
    glowColor: "rgba(245,158,11,0.15)",
    skills: [
      { name: "Docker", icon: IconDocker },
      { name: "AWS", icon: IconAWS },
      { name: "Vercel", icon: IconVercel },
      { name: "Nginx", icon: IconNginx },
      { name: "GitHub Actions", icon: IconGitHubActions },
      { name: "Linux", icon: IconLinux },
    ],
  },
  {
    title: "Tools",
    accent: "#ec4899",
    glowColor: "rgba(236,72,153,0.15)",
    skills: [
      { name: "Git", icon: IconGit },
      { name: "GitHub", icon: IconGitHub },
      { name: "RabbitMQ", icon: IconRabbitMQ },
      { name: "VS Code", icon: IconVSCode },
      { name: "Postman", icon: IconPostman },
      { name: "npm", icon: IconNPM },
    ],
  },
  {
    title: "AI & ML",
    accent: "#10b981",
    glowColor: "rgba(16,185,129,0.15)",
    skills: [
      { name: "OpenAI", icon: IconOpenAI },
      { name: "Gemini AI", icon: IconGemini },
      { name: "ChatGPT API", icon: IconChatGPT },
      { name: "LangChain", icon: IconLangChain },
      { name: "RAG", icon: IconRAG },
      { name: "Hugging Face", icon: IconHuggingFace },
      { name: "Prompt Eng.", icon: IconPromptEng },
      { name: "LLMs", icon: IconLLMs },
      { name: "n8n", icon: IconN8N },
      { name: "Vector DBs", icon: IconVectorDB },
      { name: "AI Agents", icon: IconAIAgents },
      { name: "Claude API", icon: IconClaude },
    ],
  },
];

/* ────────────────────────────────────────── *
 *  Skills Section Component                   *
 * ────────────────────────────────────────── */

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate category cards on scroll
      gsap.utils
        .toArray<HTMLElement>(".skill-category-card")
        .forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              delay: index * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      // Animate individual skill badges staggered
      gsap.utils
        .toArray<HTMLElement>(".skill-badge")
        .forEach((badge, index) => {
          gsap.fromTo(
            badge,
            { opacity: 0, y: 15, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.4,
              delay: index * 0.03,
              ease: "power2.out",
              scrollTrigger: {
                trigger: badge,
                start: "top 90%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      return () =>
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    },
    { scope: containerRef }
  );

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      {/* ─── Ambient Background Gradients ─── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,240,255,0.03)_0%,transparent_70%)] rounded-full translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(139,92,246,0.03)_0%,transparent_70%)] rounded-full -translate-x-1/3 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(188,19,254,0.02)_0%,transparent_70%)]" />
      </div>

      {/* ─── Animated Grid Pattern Background ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* ─── Header ─── */}
        <div className="mb-16 md:mb-20 text-center">
          <RevealHeader className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-foreground">
            Tech Stack
          </RevealHeader>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life — from pixel-perfect
            interfaces to scalable backend systems.
          </p>
        </div>

        {/* ─── Category Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="skill-category-card group relative rounded-2xl p-6 md:p-8 transition-all duration-500"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = `${category.accent}33`;
                el.style.boxShadow = `0 8px 40px ${category.glowColor}, 0 4px 24px rgba(0,0,0,0.3)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${category.glowColor}, transparent 60%)`,
                }}
              />

              {/* Category Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-3 mb-1">
                  {/* Accent dot */}
                  <div
                    className="w-2 h-2 rounded-full transition-shadow duration-300"
                    style={{
                      background: category.accent,
                      boxShadow: `0 0 6px ${category.accent}40`,
                    }}
                  />
                  <h3
                    className="text-sm font-bold uppercase tracking-widest transition-colors duration-300"
                    style={{ color: category.accent }}
                  >
                    {category.title}
                  </h3>
                </div>
                <div
                  className="h-[1px] mt-3 rounded-full opacity-20"
                  style={{
                    background: `linear-gradient(to right, ${category.accent}, transparent)`,
                  }}
                />
              </div>

              {/* Skill Badges */}
              <div className="relative z-10 flex flex-wrap gap-2.5">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="skill-badge group/badge flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-default transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.background = `${category.accent}12`;
                        el.style.borderColor = `${category.accent}30`;
                        el.style.boxShadow = `0 0 16px ${category.accent}15`;
                        el.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.background = "rgba(255,255,255,0.04)";
                        el.style.borderColor = "rgba(255,255,255,0.06)";
                        el.style.boxShadow = "none";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      <span
                        className="text-muted-foreground transition-colors duration-300"
                        style={{}}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.color =
                            category.accent;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.color = "";
                        }}
                      >
                        <SkillIcon />
                      </span>
                      <span className="text-sm font-medium text-muted-foreground/90 group-hover/badge:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Bottom Stats / Count ─── */}
        <div className="mt-16 flex justify-center">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                boxShadow: "0 0 8px rgba(0,240,255,0.4)",
              }}
            />
            <span className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">
                {skillCategories.reduce(
                  (sum, cat) => sum + cat.skills.length,
                  0
                )}
              </span>{" "}
              technologies across{" "}
              <span className="font-bold text-foreground">
                {skillCategories.length}
              </span>{" "}
              domains
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

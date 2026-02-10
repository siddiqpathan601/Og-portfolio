"use client";

import { useRef } from "react";
import { RevealHeader } from "@/components/ui/reveal-header";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeyItems = [
  {
    year: "2021",
    role: "Foundation in Programming",
    company: "Self-Learning",
    description: "Started learning programming fundamentals and web technologies, laying the groundwork for a career in software development.",
  },
  {
    year: "2022",
    role: "Early Projects & Growth",
    company: "Personal Projects",
    description: "Built small projects to solidify fundamentals and explore frontend technologies like React and Tailwind CSS.",
  },
  {
    year: "2023",
    role: "Intermediate Developer",
    company: "Open Source / Freelance",
    description: "Contributed to open-source projects and took freelance work to gain real-world engineering experience.",
  },
  {
    year: "2024",
    role: "Final Year Projects",
    company: "B.Tech Program",
    description: "Worked on industry-oriented final year projects, focusing on backend architecture and full-stack integration.",
  },
  {
    year: "2025",
    role: "Full Stack Developer",
    company: "Freelance & College Milestones",
    description: "Completed college and delivered end-to-end web solutions as a freelance Full Stack Developer.",
  },
  {
    year: "2026 – Present",
    role: "Software Engineer",
    company: "Trangla Innovation Private Limited",
    description: "Working as a Software Engineer, contributing to production-grade software and collaborating across teams.",
  }
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate center vertical line on scroll
      const centerLine = containerRef.current?.querySelector(".timeline-center-line");
      if (centerLine) {
        gsap.fromTo(
          centerLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            },
          }
        );
      }

      // Animate timeline cards on in-view
      gsap.utils.toArray(".journey-card").forEach((card) => {
        const cardElement = card as HTMLElement;
        gsap.fromTo(
          cardElement,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: cardElement,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    },
    { scope: containerRef }
  );

  return (
    <section id="journey" className="py-24 bg-background relative">
      <div ref={containerRef} className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <RevealHeader className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-foreground">
            My Journey
          </RevealHeader>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A timeline of my growth as a Full Stack Developer
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Single Vertical Center Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-px h-full z-0">
            {/* Static base line */}
            <div className="w-px h-full bg-foreground/10 dark:bg-white/10" />
            
            {/* Animated fill line */}
            <div
              className="timeline-center-line absolute top-0 left-0 w-px h-full bg-gradient-to-b from-secondary via-secondary to-secondary/50 origin-top"
            />
          </div>

          {/* Timeline Cards Stack (Mobile-first, prep for desktop zig-zag) */}
          <div className="relative z-10 space-y-8 md:space-y-12">
            {journeyItems.map((item, index) => (
              <div
                key={index}
                className="journey-card max-w-2xl mx-auto md:mx-0"
              >
                <div className="bg-white/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 p-6 md:p-8 rounded-xl backdrop-blur-sm hover:bg-white/8 dark:hover:bg-white/8 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wide">
                      {item.year}
                    </span>
                    <div className="flex-1 h-px bg-foreground/10" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-2 text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-base font-semibold text-muted-foreground uppercase mb-4 tracking-wide">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ROADMAP NOTES FOR FUTURE IMPLEMENTATION:
              To add zig-zag layout with dots in the future:
              
              1. Convert space-y-8 div to a grid or flex layout with alternating left/right positioning
              2. Add data-side attribute to journeyItems: side: index % 2 === 0 ? "left" : "right"
              3. Use JavaScript to position cards alternately left and right of center
              4. Create a "dot" component to position on the center line
              5. Dots should use absolute positioning on the center line (50% left)
              6. Mobile: fall back to centered single-column layout
              
              Current state: Single vertical line, no zig-zag, no dots - clean foundation ready to extend.
          */}
        </div>
      </div>
    </section>
  );
}

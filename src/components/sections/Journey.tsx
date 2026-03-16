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
    subtitle: "Learning",
    description:
      "Started learning programming fundamentals and web technologies, laying the groundwork for a career in software development.",
  },
  {
    year: "2022",
    role: "Early Projects & Growth",
    subtitle: "Projects",
    description:
      "Built small projects to solidify fundamentals and explore frontend technologies like React and Tailwind CSS.",
  },
  {
    year: "2023",
    role: "Intermediate Developer",
    subtitle: "Open Source",
    description:
      "Contributed to open-source projects and took freelance work to gain real-world engineering experience.",
  },
  {
    year: "2024",
    role: "Final Year Projects",
    subtitle: "Academics",
    description:
      "Worked on industry-oriented final year projects, focusing on backend architecture and full-stack integration.",
  },
  {
    year: "2025",
    role: "Full Stack Developer",
    subtitle: "Freelance",
    description:
      "Completed college and delivered end-to-end web solutions as a freelance Full Stack Developer.",
  },
  {
    year: "2026",
    role: "Software Engineer",
    subtitle: "Career",
    description:
      "Working as a Software Engineer at Trangla Innovation Pvt. Ltd., contributing to production-grade software.",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate the glowing progress line
      const progressLine = containerRef.current?.querySelector(
        ".timeline-progress-line"
      );
      if (progressLine) {
        gsap.fromTo(
          progressLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 0.8,
            },
          }
        );
      }

      // Animate timeline dots
      gsap.utils.toArray<HTMLElement>(".timeline-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: dot,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate cards from their respective sides
      gsap.utils
        .toArray<HTMLElement>(".journey-card")
        .forEach((card, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: isLeft ? -60 : 60,
              y: 20,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 82%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      // Animate year badges
      gsap.utils
        .toArray<HTMLElement>(".year-badge")
        .forEach((badge) => {
          gsap.fromTo(
            badge,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: badge,
                start: "top 82%",
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
    <section id="journey" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,240,255,0.04)_0%,transparent_70%)] rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(188,19,254,0.04)_0%,transparent_70%)] rounded-full" />
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <RevealHeader className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-4 text-foreground">
            My Journey
          </RevealHeader>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From writing my first line of code to building production software —
            a timeline of growth, milestones, and persistence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* ─── Vertical Line (center on desktop, left on mobile) ─── */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px]">
            {/* Static base line */}
            <div className="absolute inset-0 bg-white/[0.06] rounded-full" />
            {/* Animated glowing progress line */}
            <div
              className="timeline-progress-line absolute top-0 left-0 w-full h-full origin-top rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, #00f0ff, #8b5cf6, #bc13fe)",
                boxShadow:
                  "0 0 8px rgba(0,240,255,0.4), 0 0 20px rgba(139,92,246,0.2)",
              }}
            />
          </div>

          {/* ─── Milestone Items ─── */}
          <div className="relative z-10">
            {journeyItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative mb-12 md:mb-16 last:mb-0"
                >
                  {/* ─── Timeline Dot ─── */}
                  <div
                    className={`
                      timeline-dot absolute z-20
                      left-4 md:left-1/2 top-8
                      -translate-x-1/2
                    `}
                  >
                    {/* Outer pulse ring */}
                    <div className="absolute -inset-2 rounded-full bg-[#00f0ff]/20 animate-[pulse-glow_2.5s_ease-in-out_infinite]" />
                    {/* Inner dot */}
                    <div
                      className="relative w-4 h-4 rounded-full border-2 border-[#00f0ff]"
                      style={{
                        background:
                          "linear-gradient(135deg, #00f0ff, #8b5cf6)",
                        boxShadow:
                          "0 0 10px rgba(0,240,255,0.5), 0 0 20px rgba(0,240,255,0.2)",
                      }}
                    />
                  </div>

                  {/* ─── Card ─── */}
                  <div
                    className={`
                      journey-card
                      ml-12 md:ml-0
                      md:w-[calc(50%-40px)]
                      ${isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"}
                    `}
                  >
                    <div
                      className="group relative p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(-4px)";
                        el.style.border =
                          "1px solid rgba(0,240,255,0.25)";
                        el.style.boxShadow =
                          "0 8px 40px rgba(0,240,255,0.1), 0 0 60px rgba(188,19,254,0.05), 0 4px 30px rgba(0,0,0,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.transform = "translateY(0)";
                        el.style.border =
                          "1px solid rgba(255,255,255,0.08)";
                        el.style.boxShadow =
                          "0 4px 30px rgba(0,0,0,0.3)";
                      }}
                    >
                      {/* Card Top Row: Year Badge + Subtitle */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="year-badge inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(0,240,255,0.15), rgba(139,92,246,0.15))",
                            color: "#00f0ff",
                            border: "1px solid rgba(0,240,255,0.2)",
                          }}
                        >
                          {item.year}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                          {item.subtitle}
                        </span>
                      </div>

                      {/* Role / Title */}
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-[#00f0ff] transition-colors duration-300">
                        {item.role}
                      </h3>

                      {/* Divider */}
                      <div
                        className="w-12 h-[2px] mb-4 rounded-full transition-all duration-500 group-hover:w-20"
                        style={{
                          background:
                            "linear-gradient(to right, #00f0ff, #8b5cf6)",
                        }}
                      />

                      {/* Description */}
                      <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* ─── Connector line from dot to card (desktop only) ─── */}
                  <div
                    className={`
                      hidden md:block absolute top-[34px] h-[1px] w-[40px]
                      ${isLeft ? "right-1/2 mr-[7px]" : "left-1/2 ml-[7px]"}
                    `}
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0,240,255,0.3), rgba(139,92,246,0.1))",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* ─── Terminal Dot ─── */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-3 z-20">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #bc13fe)",
                boxShadow: "0 0 10px rgba(188,19,254,0.4)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

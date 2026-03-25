"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      let currentSection = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
        <motion.nav
          className={cn(
            "pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
            isScrolled
              ? "bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
              : "w-full max-w-7xl px-0 py-2"
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className={cn(
                "text-xl font-bold tracking-tighter uppercase transition-all duration-500",
                isScrolled ? "text-sm scale-95" : "text-xl"
              )}
            >
              Siddiq<span className="text-secondary">.Dev</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors duration-300",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-secondary/10 dark:bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <div className={cn(
                "hidden lg:flex items-center gap-4 transition-all duration-500",
                isScrolled ? "pl-2 border-l border-white/10" : ""
              )}>
                <ThemeToggle />
                <MagneticButton>
                  <a
                    href="/Trangla Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden px-6 py-2 text-xs font-black uppercase tracking-widest bg-foreground text-background dark:bg-white dark:text-black rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20"
                  >
                    <span className="relative z-10 font-bold">Resume</span>
                    <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </a>
                </MagneticButton>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="flex lg:hidden items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-foreground dark:text-white rounded-full bg-secondary/10"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-white/90 dark:bg-black/90 flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-4 text-foreground hover:rotate-90 transition-transform duration-300"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black uppercase tracking-tighter hover:text-secondary transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                href="/Trangla Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 w-full py-5 text-xl font-bold uppercase tracking-widest bg-secondary text-secondary-foreground text-center rounded-2xl shadow-2xl"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

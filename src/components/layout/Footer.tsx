export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-accent/30 border-t border-black/5 dark:border-white/5 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold uppercase tracking-tighter">Siddiq Pathan</h3>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/siddiq601/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wide hover:text-secondary transition-colors" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://github.com/siddiqpathan601/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wide hover:text-secondary transition-colors" aria-label="GitHub">GitHub</a>
          <a href="https://www.instagram.com/mr__s_i_d_d_i_q" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-wide hover:text-secondary transition-colors" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

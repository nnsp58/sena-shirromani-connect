const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-14 md:h-16 bg-gradient-to-r from-primary to-[hsl(220,20%,18%)] z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="w-full h-full flex items-center justify-between px-3 sm:px-6 text-primary-foreground/80 text-xs sm:text-sm">
        <span className="font-hindi truncate">© 2026 सैनिक शिरोमणि सिखेड़ा</span>
        <div className="hidden sm:flex gap-4 sm:gap-6">
          <a href="/contact" className="hover:text-secondary transition-colors font-hindi whitespace-nowrap">संपर्क</a>
          <a href="/privacy" className="hover:text-secondary transition-colors font-hindi whitespace-nowrap">गोपनीयता</a>
          <span className="flex gap-2 sm:gap-3">
            <span className="cursor-pointer hover:text-secondary transition-colors">📘</span>
            <span className="cursor-pointer hover:text-secondary transition-colors">🐦</span>
            <span className="cursor-pointer hover:text-secondary transition-colors">📷</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

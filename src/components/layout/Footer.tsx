const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-14 bg-gradient-to-r from-primary to-[hsl(220,20%,18%)] z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 text-primary-foreground/80 text-sm">
        <span>© 2026 सैनिक शिरोमणि सिखेड़ा | ग्राम पंचायत पोर्टल</span>
        <div className="flex gap-6">
          <a href="/contact" className="hover:text-secondary transition-colors">संपर्क</a>
          <a href="/privacy" className="hover:text-secondary transition-colors">गोपनीयता नीति</a>
          <span className="flex gap-3">
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

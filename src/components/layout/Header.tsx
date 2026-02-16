import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const location = useLocation();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const navLinks = [
    { label: "होम", path: "/" },
    { label: "योजनाएं", path: "/yojnas" },
    { label: "ब्लॉग", path: "/blogs" },
    { label: "हमारे बारे में", path: "/about" },
    { label: "संपर्क", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 z-50 bg-gradient-to-r from-primary to-[hsl(220,20%,18%)] shadow-lg">
        <div className="w-full h-full flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-secondary/20 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
              🏛️
            </div>
            <div className="min-w-0">
              <h1 className="font-hindi text-base sm:text-[22px] font-bold text-primary-foreground leading-tight truncate">
                सैनिक शिरोमणि सिखेड़ा
              </h1>
              <p className="text-[11px] sm:text-[13px] text-primary-foreground/80">ग्राम पंचायत पोर्टल</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-1 flex-1 justify-center px-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-hindi text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                  location.pathname === link.path
                    ? "bg-primary-foreground/15 text-primary-foreground font-semibold"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 sm:gap-3 items-center">
            <button
              onClick={() => setShowLogin(true)}
              className="hidden sm:block px-4 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-[15px] font-semibold rounded-lg border-2 border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300"
            >
              लॉगिन
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="hidden sm:block px-4 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-[15px] font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              साइन अप
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6 text-primary-foreground" />
            </button>
          </div>
        </div>
      </header>

      <LoginModal
        open={showLogin}
        onOpenChange={setShowLogin}
        onSwitchToSignup={() => {
          setShowLogin(false);
          setShowSignup(true);
        }}
        onForgotPassword={() => {
          setShowLogin(false);
        }}
      />

      <SignupModal
        open={showSignup}
        onOpenChange={setShowSignup}
        onSwitchToLogin={() => {
          setShowSignup(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default Header;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginModal from "@/components/auth/LoginModal";
import SignupModal from "@/components/auth/SignupModal";

const Header = () => {
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
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-3xl">
              🏛️
            </div>
            <div>
              <h1 className="font-hindi text-[22px] font-bold text-primary-foreground leading-tight">
                सैनिक शिरोमणि सिखेड़ा
              </h1>
              <p className="text-[13px] text-primary-foreground/80">ग्राम पंचायत पोर्टल</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-hindi text-base font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-primary-foreground/15 text-primary-foreground font-semibold"
                    : "text-primary-foreground/90 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            <button
              onClick={() => setShowLogin(true)}
              className="px-6 py-2.5 text-[15px] font-semibold rounded-lg border-2 border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300"
            >
              लॉगिन
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="px-6 py-2.5 text-[15px] font-semibold rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
            >
              साइन अप
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

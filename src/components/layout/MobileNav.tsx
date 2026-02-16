import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  ScrollText,
  ClipboardList,
  Users,
  Medal,
  Heart,
  Wallet,
  Wheat,
  GraduationCap,
  HardHat,
  Home,
  Lightbulb,
  Megaphone,
  Newspaper,
  Video,
  Info,
  Phone,
  HelpCircle,
} from "lucide-react";

const sections = [
  {
    title: null,
    items: [{ label: "Dashboard", icon: LayoutDashboard, path: "/" }],
  },
  {
    title: "SERVICES",
    items: [
      { label: "ग्राम इतिहास", icon: ScrollText, path: "/history" },
      { label: "योजना जानकारी केंद्र", icon: ClipboardList, path: "/yojnas" },
      { label: "सभी ग्रामवासी", icon: Users, path: "/villagers", badge: "1250" },
      { label: "भूतपूर्व सैनिक", icon: Medal, path: "/ex-servicemen", badge: "45" },
      { label: "वीर नारी", icon: Heart, path: "/veer-nari" },
      { label: "पेंशन", icon: Wallet, path: "/pension" },
      { label: "किसान", icon: Wheat, path: "/farmers" },
      { label: "छात्रवृत्ति", icon: GraduationCap, path: "/scholarship" },
      { label: "श्रमिक / ई-श्रम", icon: HardHat, path: "/labour" },
      { label: "आवास / शौचालय", icon: Home, path: "/housing" },
    ],
  },
  {
    title: "COMMUNITY",
    items: [
      { label: "सुझाव", icon: Lightbulb, path: "/suggestions" },
      {
        label: "शिकायत",
        icon: Megaphone,
        path: "/complaints",
        badge: "3",
        badgeVariant: "destructive" as const,
      },
      { label: "ब्लॉग", icon: Newspaper, path: "/blogs" },
      { label: "वीडियो / समाचार", icon: Video, path: "/videos" },
    ],
  },
  {
    title: "INFORMATION",
    items: [
      { label: "About Us", icon: Info, path: "/about" },
      { label: "Contact", icon: Phone, path: "/contact" },
      { label: "Help & Support", icon: HelpCircle, path: "/help" },
    ],
  },
];

interface MobileNavProps {
  onClose: () => void;
}

const MobileNav = ({ onClose }: MobileNavProps) => {
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };

    document.addEventListener("click", (e) => {
      if (!(e.target as HTMLElement).closest("nav")) {
        const target = e.target as HTMLElement;
        if (target.tagName === "A") {
          onClose();
        }
      }
    });

    return () => {
      document.removeEventListener("click", handleRouteChange);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 md:hidden z-30"
        onClick={onClose}
      />

      {/* Drawer */}
      <nav className="fixed top-20 left-0 bottom-0 w-64 bg-sidebar shadow-lg overflow-y-auto md:hidden z-40 animate-in slide-in-from-left">
        <div className="flex items-center justify-between p-4 border-b border-sidebar-foreground/10">
          <h2 className="font-hindi font-bold text-sidebar-foreground">मेनू</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-sidebar-foreground/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-sidebar-foreground" />
          </button>
        </div>

        <div className="py-4">
          {sections.map((section, si) => (
            <div key={si} className="mb-4">
              {section.title && (
                <div className="text-[11px] font-bold tracking-wider text-sidebar-foreground/50 px-5 py-2 mb-1">
                  {section.title}
                </div>
              )}
              {section.items.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-5 py-3 font-hindi text-[14px] transition-all duration-300 relative ${
                      active
                        ? "bg-sidebar-accent/15 text-sidebar-accent font-semibold border-l-[3px] border-sidebar-accent"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground border-l-[3px] border-transparent"
                    }`}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant={item.badgeVariant || "secondary"}
                        className={`text-[11px] px-2 py-0 ${
                          item.badgeVariant === "destructive"
                            ? ""
                            : "bg-sidebar-foreground/20 text-sidebar-foreground border-none"
                        }`}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;

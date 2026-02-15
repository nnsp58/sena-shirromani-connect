import { Link, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard, ScrollText, ClipboardList, Users, Medal,
  Heart, Wallet, Wheat, GraduationCap, HardHat, Home,
  Lightbulb, Megaphone, Newspaper, Video, Info, Phone, HelpCircle,
} from "lucide-react";

const sections = [
  {
    title: null,
    items: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    ],
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
      { label: "शिकायत", icon: Megaphone, path: "/complaints", badge: "3", badgeVariant: "destructive" as const },
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

const LeftSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed top-20 left-0 bottom-14 w-[260px] bg-sidebar z-40 shadow-[2px_0_10px_rgba(0,0,0,0.1)]">
      <ScrollArea className="h-full sidebar-scroll">
        <div className="py-4">
          {sections.map((section, si) => (
            <div key={si} className="mb-6">
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
                    className={`flex items-center gap-3 px-5 py-3 font-hindi text-[15px] transition-all duration-300 relative ${
                      active
                        ? "bg-sidebar-accent/15 text-sidebar-accent font-semibold border-l-[3px] border-sidebar-accent"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-foreground/5 hover:text-sidebar-foreground hover:pl-6 border-l-[3px] border-transparent"
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
      </ScrollArea>
    </aside>
  );
};

export default LeftSidebar;

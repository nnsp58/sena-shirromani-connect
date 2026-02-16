import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileText, ClipboardList, ExternalLink, Phone } from "lucide-react";

const officials = [
  { name: "चौधरी चरण सिंह", role: "प्रेरणा स्रोत", initials: "चच", featured: true },
  { name: "राम प्रताप सिंह", role: "ग्राम प्रधान", contact: "📞 98******45", initials: "रप" },
  { name: "सुरेश कुमार", role: "ग्राम सचिव", contact: "📞 97******34", initials: "सु" },
];

const flashNews = [
  { text: "नई योजना की शुरुआत - 15 फरवरी को", time: "2 घंटे पहले" },
  { text: "ग्राम पंचायत बैठक - 18 फरवरी", time: "5 घंटे पहले" },
  { text: "स्वास्थ्य शिविर - आज शाम 4 बजे", time: "1 दिन पहले" },
];

const stats = [
  { value: "1250", label: "कुल ग्रामवासी" },
  { value: "45", label: "भूतपूर्व सैनिक" },
  { value: "680", label: "किसान" },
  { value: "320", label: "छात्र" },
];

const quickLinks = [
  { label: "फॉर्म डाउनलोड करें", icon: FileText, path: "/forms" },
  { label: "महत्वपूर्ण सूचनाएं", icon: ClipboardList, path: "/notices" },
  { label: "सरकारी वेबसाइट्स", icon: ExternalLink, path: "/govt-sites" },
  { label: "आपातकालीन नंबर", icon: Phone, path: "/emergency" },
];

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block fixed top-20 right-0 bottom-14 w-[300px] bg-muted z-40 shadow-[-2px_0_10px_rgba(0,0,0,0.05)]">
      <ScrollArea className="h-full sidebar-scroll">
        <div className="p-4 space-y-5">
          {/* Village Officials */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-hindi text-lg border-b-2 border-secondary pb-3">
                गांव के अधिकारी
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {officials.map((o, i) => (
                <div
                  key={i}
                  className={`text-center p-4 rounded-lg ${
                    o.featured
                      ? "bg-gradient-to-br from-secondary/10 to-secondary/30"
                      : i < officials.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <Avatar className="mx-auto h-20 w-20 border-[3px] border-secondary mb-3">
                    <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">
                      {o.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-hindi text-base font-semibold text-foreground">{o.name}</h4>
                  <p className="text-[13px] text-muted-foreground">{o.role}</p>
                  {o.contact && <p className="text-[13px] text-info mt-1">{o.contact}</p>}
                </div>
              ))}
              <Link to="/officials" className="block text-center text-[13px] font-semibold text-primary hover:text-secondary transition-colors">
                सभी अधिकारी देखें →
              </Link>
            </CardContent>
          </Card>

          {/* Flash News */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-hindi text-lg border-b-2 border-secondary pb-3">
                ताज़ा समाचार
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {flashNews.map((n, i) => (
                <div key={i} className="p-3 bg-secondary/10 border-l-[3px] border-secondary rounded-r-md">
                  <p className="font-hindi text-sm text-foreground">📢 {n.text}</p>
                  <span className="text-[11px] text-muted-foreground">{n.time}</span>
                </div>
              ))}
              <Link to="/news" className="block text-center text-[13px] font-semibold text-primary hover:text-secondary transition-colors">
                सभी समाचार देखें →
              </Link>
            </CardContent>
          </Card>

          {/* Quick Statistics */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-hindi text-lg border-b-2 border-secondary pb-3">
                आंकड़े
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/15 rounded-lg">
                    <div className="text-[28px] font-bold text-primary">{s.value}</div>
                    <div className="font-hindi text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="font-hindi text-lg border-b-2 border-secondary pb-3">
                त्वरित लिंक
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickLinks.map((ql, i) => (
                <Link
                  key={i}
                  to={ql.path}
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg font-hindi text-sm text-foreground hover:bg-primary/10 hover:translate-x-1 transition-all duration-300"
                >
                  <ql.icon className="h-5 w-5 text-secondary shrink-0" />
                  <span>{ql.label}</span>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default RightSidebar;

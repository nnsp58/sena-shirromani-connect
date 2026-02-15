import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Medal, Wheat, GraduationCap, ClipboardList, Heart, Users,
  Megaphone, Newspaper, ArrowRight,
} from "lucide-react";

const quickCards = [
  { label: "भूतपूर्व सैनिक", icon: Medal, path: "/ex-servicemen", color: "from-primary/10 to-primary/20" },
  { label: "किसान सेवाएं", icon: Wheat, path: "/farmers", color: "from-success/10 to-success/20" },
  { label: "छात्रवृत्ति", icon: GraduationCap, path: "/scholarship", color: "from-secondary/10 to-secondary/20" },
  { label: "योजनाएं", icon: ClipboardList, path: "/yojnas", color: "from-info/10 to-info/20" },
  { label: "वीर नारी", icon: Heart, path: "/veer-nari", color: "from-destructive/10 to-destructive/20" },
  { label: "ग्रामवासी", icon: Users, path: "/villagers", color: "from-accent/10 to-accent/30" },
];

const announcements = [
  { title: "प्रधानमंत्री आवास योजना - नई सूची जारी", date: "14 फरवरी 2026", type: "योजना" },
  { title: "ग्राम सभा की बैठक 18 फरवरी को", date: "13 फरवरी 2026", type: "सूचना" },
  { title: "किसान सम्मान निधि - आवेदन की अंतिम तिथि", date: "12 फरवरी 2026", type: "महत्वपूर्ण" },
  { title: "स्वच्छ भारत अभियान - शौचालय निर्माण अपडेट", date: "10 फरवरी 2026", type: "अपडेट" },
];

const recentNews = [
  { title: "गांव में नए सड़क निर्माण का कार्य शुरू", summary: "ग्राम पंचायत ने नए सड़क निर्माण का कार्य आरंभ किया है...", date: "15 फरवरी 2026" },
  { title: "सैनिक सम्मान समारोह आयोजित", summary: "गांव के भूतपूर्व सैनिकों का सम्मान समारोह आयोजित किया गया...", date: "12 फरवरी 2026" },
  { title: "विद्यालय में वार्षिक उत्सव", summary: "प्राथमिक विद्यालय सिखेड़ा में वार्षिक उत्सव का आयोजन...", date: "10 फरवरी 2026" },
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary to-[hsl(220,20%,18%)] p-8 mb-6 text-primary-foreground">
        <div className="relative z-10">
          <Badge className="bg-secondary text-secondary-foreground mb-4">🏛️ ग्राम पंचायत पोर्टल</Badge>
          <h1 className="font-hindi text-3xl font-bold mb-2">
            सैनिक शिरोमणि सिखेड़ा में आपका स्वागत है
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            हमारे गांव की सभी जानकारी, योजनाएं और सेवाएं एक ही जगह पर। 
            अपने गांव से जुड़े रहें।
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-full opacity-10 text-[200px] flex items-center justify-center">
          🇮🇳
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="mb-6">
        <h2 className="font-hindi text-xl font-bold text-foreground mb-4">सेवाएं</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickCards.map((c) => (
            <Link key={c.path} to={c.path}>
              <Card className={`hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-gradient-to-br ${c.color} border-none`}>
                <CardContent className="flex items-center gap-4 p-5">
                  <c.icon className="h-10 w-10 text-primary shrink-0" />
                  <span className="font-hindi text-base font-semibold text-foreground">{c.label}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-hindi text-xl font-bold text-foreground">मुख्य घोषणाएं</h2>
          <Link to="/notices" className="text-sm text-primary hover:text-secondary font-semibold flex items-center gap-1">
            सभी देखें <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Card>
          <CardContent className="p-0">
            {announcements.map((a, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                  i < announcements.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Megaphone className="h-5 w-5 text-secondary shrink-0" />
                  <span className="font-hindi text-sm text-foreground">{a.title}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-[11px]">{a.type}</Badge>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{a.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Recent News */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-hindi text-xl font-bold text-foreground">ताज़ा समाचार</h2>
          <Link to="/news" className="text-sm text-primary hover:text-secondary font-semibold flex items-center gap-1">
            सभी देखें <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {recentNews.map((n, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Newspaper className="h-4 w-4 text-secondary" />
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </div>
                <CardTitle className="font-hindi text-base">{n.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-hindi text-sm text-muted-foreground">{n.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Medal, Wheat, GraduationCap, ClipboardList, Heart, Users,
  Megaphone, Newspaper, ArrowRight, Info,
} from "lucide-react";

const quickCards = [
  { label: "भूतपूर्व सैनिक", icon: Medal, path: "/ex-servicemen", color: "from-primary/10 to-primary/20" },
  { label: "किसान सेवाएं", icon: Wheat, path: "/farmers", color: "from-success/10 to-success/20" },
  { label: "छात्रवृत्ति", icon: GraduationCap, path: "/scholarship", color: "from-secondary/10 to-secondary/20" },
  { label: "योजनाएं", icon: ClipboardList, path: "/yojnas", color: "from-info/10 to-info/20" },
  { label: "वीर नारी", icon: Heart, path: "/veer-nari", color: "from-destructive/10 to-destructive/20" },
  { label: "ग्रामवासी", icon: Users, path: "/villagers", color: "from-accent/10 to-accent/30" },
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

      {/* Announcements - Empty State */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-hindi text-xl font-bold text-foreground">मुख्य घोषणाएं</h2>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <Megaphone className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई घोषणा उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </section>

      {/* Recent News - Empty State */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-hindi text-xl font-bold text-foreground">ताज़ा समाचार</h2>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <Newspaper className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई समाचार उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Index;

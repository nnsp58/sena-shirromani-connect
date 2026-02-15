import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Home, TrendingUp, Baby } from "lucide-react";
import { Input } from "@/components/ui/input";

const demographics = [
  { label: "कुल जनसंख्या", value: "1,250", icon: Users, color: "from-primary/10 to-primary/20", textColor: "text-primary" },
  { label: "कुल परिवार", value: "285", icon: Home, color: "from-secondary/10 to-secondary/20", textColor: "text-secondary" },
  { label: "पुरुष", value: "650", icon: Users, color: "from-info/10 to-info/20", textColor: "text-info" },
  { label: "महिला", value: "600", icon: Users, color: "from-destructive/10 to-destructive/20", textColor: "text-destructive" },
  { label: "बच्चे (0-18)", value: "320", icon: Baby, color: "from-success/10 to-success/20", textColor: "text-success" },
  { label: "वयस्क (19-60)", value: "780", icon: Users, color: "from-accent/10 to-accent/30", textColor: "text-accent" },
  { label: "वरिष्ठ (60+)", value: "150", icon: Users, color: "from-muted/10 to-muted/30", textColor: "text-muted-foreground" },
  { label: "साक्षरता दर", value: "78%", icon: TrendingUp, color: "from-primary/10 to-primary/20", textColor: "text-primary" },
];

const occupations = [
  { name: "कृषि", count: 680, percentage: 54 },
  { name: "सरकारी नौकरी", count: 95, percentage: 8 },
  { name: "निजी नौकरी", count: 180, percentage: 14 },
  { name: "व्यवसाय", count: 125, percentage: 10 },
  { name: "मजदूरी", count: 170, percentage: 14 },
];

const Villagers = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary to-[hsl(220,20%,18%)] p-6 rounded-xl text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-secondary" />
            <h1 className="font-hindi text-3xl font-bold">ग्रामवासी</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            गांव की जनसंख्या और जनसांख्यिकी विवरण
          </p>
        </div>

        <div className="flex gap-3">
          <Input placeholder="नाम से खोजें..." className="font-hindi" />
          <Input placeholder="मोबाइल नंबर से खोजें..." className="max-w-xs" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {demographics.map((stat, i) => (
            <Card key={i} className={`bg-gradient-to-br ${stat.color}`}>
              <CardContent className="p-5 text-center">
                <stat.icon className={`h-8 w-8 ${stat.textColor} mx-auto mb-2`} />
                <div className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</div>
                <div className="font-hindi text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">व्यवसाय वितरण</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {occupations.map((occ, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-hindi text-sm font-medium">{occ.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{occ.count} लोग</span>
                        <Badge variant="outline" className="text-xs">{occ.percentage}%</Badge>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${occ.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-info/10 to-info/20 border-info/30">
          <CardContent className="p-6">
            <h3 className="font-hindi font-bold text-lg mb-3">जनगणना 2026</h3>
            <p className="text-sm text-muted-foreground font-hindi leading-relaxed">
              यह डेटा जनगणना 2026 और ग्राम पंचायत रिकॉर्ड पर आधारित है। पूर्ण जनगणना जानकारी के लिए
              कृपया ग्राम पंचायत कार्यालय से संपर्क करें। सभी आंकड़े अनुमानित हैं और वास्तविक संख्या में
              भिन्नता हो सकती है।
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Villagers;

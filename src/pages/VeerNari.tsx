import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Phone, Home, Wallet } from "lucide-react";

const veerNariData = [
  {
    name: "श्रीमती रामदेई",
    husband: "स्वर्गीय सूबेदार राम सिंह",
    pension: "₹16,000/माह",
    benefits: ["स्वास्थ्य बीमा", "आवास", "राशन कार्ड"],
    contact: "98******11",
  },
  {
    name: "श्रीमती सुमित्रा देवी",
    husband: "स्वर्गीय हवलदार मोहन लाल",
    pension: "₹14,500/माह",
    benefits: ["स्वास्थ्य बीमा", "शिक्षा सहायता"],
    contact: "98******12",
  },
  {
    name: "श्रीमती कमला",
    husband: "स्वर्गीय नायक विजय कुमार",
    pension: "₹13,000/माह",
    benefits: ["स्वास्थ्य बीमा", "आवास", "बिजली छूट"],
    contact: "98******13",
  },
];

const benefits = [
  { name: "पेंशन सहायता", count: 8, icon: Wallet },
  { name: "आवास योजना", count: 5, icon: Home },
  { name: "स्वास्थ्य बीमा", count: 8, icon: Heart },
  { name: "शिक्षा सहायता", count: 6, icon: Heart },
];

const VeerNari = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-destructive/20 to-destructive/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-destructive" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">वीर नारी सम्मान</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            शहीद सैनिकों की विधवाओं के लिए सम्मान और सहायता
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {benefits.map((benefit, i) => (
            <Card key={i} className="bg-gradient-to-br from-destructive/10 to-destructive/20">
              <CardContent className="p-5 text-center">
                <benefit.icon className="h-8 w-8 text-destructive mx-auto mb-2" />
                <div className="text-3xl font-bold text-destructive">{benefit.count}</div>
                <div className="font-hindi text-sm text-muted-foreground">{benefit.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-l-4 border-l-destructive bg-destructive/5">
          <CardContent className="p-5">
            <div className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-destructive shrink-0 mt-1" />
              <div>
                <h3 className="font-hindi font-bold text-lg mb-2">वीर नारी सम्मान योजना</h3>
                <p className="text-sm text-muted-foreground font-hindi leading-relaxed">
                  हमारे गांव की वीर नारियों को राष्ट्र के प्रति उनके पतियों के सर्वोच्च बलिदान के लिए
                  सम्मानित किया जाता है। सरकार द्वारा उन्हें पेंशन, आवास, स्वास्थ्य बीमा, और शिक्षा
                  सहायता प्रदान की जाती है। ग्राम पंचायत भी हर संभव सहायता के लिए प्रतिबद्ध है।
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">पंजीकृत वीर नारी</h2>
          {veerNariData.map((person, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow border-l-4 border-l-destructive">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-hindi text-xl mb-1">{person.name}</CardTitle>
                    <p className="text-sm text-muted-foreground font-hindi">{person.husband}</p>
                  </div>
                  <Badge variant="destructive" className="text-xs">वीर नारी</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-success" />
                      <span className="font-hindi text-sm">पेंशन:</span>
                    </div>
                    <span className="font-bold text-success">{person.pension}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="font-hindi text-sm">संपर्क:</span>
                    </div>
                    <span className="font-semibold">{person.contact}</span>
                  </div>
                  <div>
                    <div className="font-hindi text-sm text-muted-foreground mb-2">लाभ:</div>
                    <div className="flex gap-2 flex-wrap">
                      {person.benefits.map((benefit, j) => (
                        <Badge key={j} variant="outline" className="font-hindi text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default VeerNari;

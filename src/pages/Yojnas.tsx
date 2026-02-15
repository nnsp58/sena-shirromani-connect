import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Download, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const yojnas = [
  {
    name: "प्रधानमंत्री आवास योजना - ग्रामीण",
    category: "आवास",
    beneficiaries: 142,
    amount: "₹1,20,000",
    status: "सक्रिय",
    description: "ग्रामीण क्षेत्रों में पक्का मकान निर्माण के लिए आर्थिक सहायता",
  },
  {
    name: "स्वच्छ भारत मिशन - शौचालय योजना",
    category: "स्वच्छता",
    beneficiaries: 89,
    amount: "₹12,000",
    status: "सक्रिय",
    description: "घरेलू शौचालय निर्माण के लिए अनुदान",
  },
  {
    name: "PM किसान सम्मान निधि",
    category: "कृषि",
    beneficiaries: 420,
    amount: "₹6,000/वर्ष",
    status: "सक्रिय",
    description: "किसानों को आर्थिक सहायता",
  },
  {
    name: "उज्ज्वला योजना",
    category: "ऊर्जा",
    beneficiaries: 305,
    amount: "₹1,600",
    status: "सक्रिय",
    description: "मुफ्त एलपीजी कनेक्शन",
  },
  {
    name: "आयुष्मान भारत योजना",
    category: "स्वास्थ्य",
    beneficiaries: 650,
    amount: "₹5 लाख/वर्ष",
    status: "सक्रिय",
    description: "मुफ्त स्वास्थ्य बीमा कवर",
  },
  {
    name: "राष्ट्रीय ग्रामीण रोजगार गारंटी",
    category: "रोजगार",
    beneficiaries: 580,
    amount: "₹238/दिन",
    status: "सक्रिय",
    description: "100 दिन की गारंटीड रोजगार",
  },
];

const categories = ["सभी", "आवास", "कृषि", "स्वच्छता", "स्वास्थ्य", "रोजगार", "ऊर्जा"];

const Yojnas = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-info/20 to-info/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <ClipboardList className="h-8 w-8 text-info" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">सरकारी योजनाएं</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            गांव में उपलब्ध सभी सरकारी योजनाओं की जानकारी
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "सभी" ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap font-hindi px-4 py-2"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/20">
            <CardContent className="p-5 text-center">
              <div className="text-4xl font-bold text-primary">28</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल योजनाएं</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/20">
            <CardContent className="p-5 text-center">
              <div className="text-4xl font-bold text-success">2,186</div>
              <div className="font-hindi text-sm text-muted-foreground">लाभार्थी</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20">
            <CardContent className="p-5 text-center">
              <div className="text-4xl font-bold text-secondary">₹3.2Cr</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल लाभ</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">योजनाओं की सूची</h2>
          <div className="grid gap-4">
            {yojnas.map((yojna, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="font-hindi text-lg">{yojna.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">{yojna.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-hindi">{yojna.description}</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6 text-sm">
                      <div>
                        <div className="font-hindi text-muted-foreground">लाभार्थी</div>
                        <div className="font-bold text-primary">{yojna.beneficiaries}</div>
                      </div>
                      <div>
                        <div className="font-hindi text-muted-foreground">राशि</div>
                        <div className="font-bold text-success">{yojna.amount}</div>
                      </div>
                      <div>
                        <div className="font-hindi text-muted-foreground">स्थिति</div>
                        <Badge className="bg-success text-white">{yojna.status}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="font-hindi">
                        <Download className="h-4 w-4 mr-1" /> फॉर्म
                      </Button>
                      <Button variant="outline" size="sm" className="font-hindi">
                        <ExternalLink className="h-4 w-4 mr-1" /> विवरण
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Yojnas;

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, TrendingUp, Droplets, Sprout } from "lucide-react";

const farmerSchemes = [
  { name: "PM किसान सम्मान निधि", beneficiaries: 420, amount: "6000/वर्ष", status: "सक्रिय" },
  { name: "फसल बीमा योजना", beneficiaries: 285, amount: "प्रीमियम के अनुसार", status: "सक्रिय" },
  { name: "मृदा स्वास्थ्य कार्ड", beneficiaries: 520, amount: "निःशुल्क", status: "सक्रिय" },
  { name: "कृषि यंत्र सब्सिडी", beneficiaries: 95, amount: "50% सब्सिडी", status: "सक्रिय" },
];

const cropData = [
  { crop: "गेहूं", area: "450 एकड़", season: "रबी", production: "1800 क्विंटल" },
  { crop: "धान", area: "380 एकड़", season: "खरीफ", production: "1520 क्विंटल" },
  { crop: "गन्ना", area: "220 एकड़", season: "वर्षभर", production: "8800 क्विंटल" },
  { crop: "सब्जी", area: "150 एकड़", season: "वर्षभर", production: "विविध" },
];

const Farmers = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-success/20 to-success/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Wheat className="h-8 w-8 text-success" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">किसान सेवाएं</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            किसानों के लिए सरकारी योजनाएं और फसल जानकारी
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-success/10 to-success/20">
            <CardContent className="p-5 text-center">
              <Wheat className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">680</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल किसान</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-primary/10 to-primary/20">
            <CardContent className="p-5 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">1200</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल एकड़</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-info/10 to-info/20">
            <CardContent className="p-5 text-center">
              <Droplets className="h-8 w-8 text-info mx-auto mb-2" />
              <div className="text-3xl font-bold text-info">450</div>
              <div className="font-hindi text-sm text-muted-foreground">सिंचित भूमि</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20">
            <CardContent className="p-5 text-center">
              <Sprout className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-secondary">4</div>
              <div className="font-hindi text-sm text-muted-foreground">मुख्य फसलें</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">किसान योजनाएं</h2>
          <div className="grid grid-cols-2 gap-4">
            {farmerSchemes.map((scheme, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-hindi text-lg flex items-center justify-between">
                    {scheme.name}
                    <Badge className="bg-success text-white">{scheme.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-hindi text-muted-foreground">लाभार्थी:</span>
                      <span className="font-semibold">{scheme.beneficiaries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-hindi text-muted-foreground">राशि:</span>
                      <span className="font-semibold font-hindi">{scheme.amount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">फसल उत्पादन विवरण</h2>
          <div className="grid grid-cols-2 gap-4">
            {cropData.map((crop, i) => (
              <Card key={i}>
                <CardHeader className="pb-3">
                  <CardTitle className="font-hindi text-lg">{crop.crop}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="font-hindi text-muted-foreground">क्षेत्रफल</div>
                      <div className="font-semibold font-hindi">{crop.area}</div>
                    </div>
                    <div>
                      <div className="font-hindi text-muted-foreground">मौसम</div>
                      <div className="font-semibold font-hindi">{crop.season}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="font-hindi text-muted-foreground">उत्पादन</div>
                      <div className="font-semibold font-hindi">{crop.production}</div>
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

export default Farmers;

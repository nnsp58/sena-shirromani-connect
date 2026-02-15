import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const scholarshipSchemes = [
  {
    name: "प्री-मैट्रिक छात्रवृत्ति",
    eligibility: "कक्षा 1-10",
    amount: "3000-5000",
    beneficiaries: 85,
    deadline: "30 सितंबर 2026",
  },
  {
    name: "पोस्ट-मैट्रिक छात्रवृत्ति",
    eligibility: "कक्षा 11-12",
    amount: "5000-10000",
    beneficiaries: 45,
    deadline: "31 अक्टूबर 2026",
  },
  {
    name: "मेरिट छात्रवृत्ति",
    eligibility: "90% से अधिक",
    amount: "10000-15000",
    beneficiaries: 12,
    deadline: "15 नवंबर 2026",
  },
  {
    name: "व्यावसायिक पाठ्यक्रम",
    eligibility: "ITI/Polytechnic",
    amount: "15000-25000",
    beneficiaries: 28,
    deadline: "20 दिसंबर 2026",
  },
];

const toppers = [
  { name: "प्रिया शर्मा", class: "12वीं", percentage: "95.6%", stream: "विज्ञान" },
  { name: "राहुल सिंह", class: "12वीं", percentage: "94.2%", stream: "वाणिज्य" },
  { name: "आयुषी गुप्ता", class: "10वीं", percentage: "96.8%", stream: "सामान्य" },
  { name: "विकास कुमार", class: "12वीं", percentage: "93.5%", stream: "कला" },
];

const Scholarship = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-accent/20 to-accent/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-8 w-8 text-accent" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">छात्रवृत्ति योजनाएं</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            छात्रों के लिए उपलब्ध छात्रवृत्तियां और शैक्षिक सहायता
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/20">
            <CardContent className="p-5 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">320</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल छात्र</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/20">
            <CardContent className="p-5 text-center">
              <Award className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">170</div>
              <div className="font-hindi text-sm text-muted-foreground">लाभार्थी</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20">
            <CardContent className="p-5 text-center">
              <BookOpen className="h-8 w-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-secondary">12</div>
              <div className="font-hindi text-sm text-muted-foreground">योजनाएं</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-accent/10 to-accent/30">
            <CardContent className="p-5 text-center">
              <GraduationCap className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-accent">₹42L</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल राशि</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">उपलब्ध छात्रवृत्तियां</h2>
          <div className="grid grid-cols-2 gap-4">
            {scholarshipSchemes.map((scheme, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="font-hindi text-lg">{scheme.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">{scheme.eligibility}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-hindi text-muted-foreground">राशि:</span>
                      <span className="font-semibold">₹{scheme.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-hindi text-muted-foreground">लाभार्थी:</span>
                      <span className="font-semibold">{scheme.beneficiaries}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-hindi text-muted-foreground">अंतिम तिथि:</span>
                      <span className="font-semibold font-hindi text-destructive">{scheme.deadline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">गांव के टॉपर्स 2025</h2>
          <div className="grid grid-cols-2 gap-4">
            {toppers.map((student, i) => (
              <Card key={i} className="border-l-4 border-l-secondary">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-hindi font-bold text-lg">{student.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="font-hindi">{student.class}</span>
                        <span>•</span>
                        <span className="font-hindi">{student.stream}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-success">{student.percentage}</div>
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

export default Scholarship;

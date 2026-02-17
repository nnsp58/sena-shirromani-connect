import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

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

        <Card>
          <CardContent className="p-8 text-center">
            <GraduationCap className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई डेटा उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Scholarship;

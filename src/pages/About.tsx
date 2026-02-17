import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-info/20 to-info/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Info className="h-8 w-8 text-info" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">हमारे बारे में</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            सैनिक शिरोमणि सिखेड़ा - गौरव और सेवा का प्रतीक
          </p>
        </div>

        <Card>
          <CardContent className="p-8 text-center">
            <Info className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई डेटा उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About;

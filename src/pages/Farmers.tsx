import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Wheat } from "lucide-react";

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

        <Card>
          <CardContent className="p-8 text-center">
            <Wheat className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई डेटा उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Farmers;

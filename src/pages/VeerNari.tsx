import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

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

        <Card>
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई डेटा उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default VeerNari;

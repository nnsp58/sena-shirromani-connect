import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

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

        <Card>
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई डेटा उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Villagers;

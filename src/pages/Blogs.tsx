import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const Blogs = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary to-[hsl(220,20%,18%)] p-6 rounded-xl text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <Newspaper className="h-8 w-8 text-secondary" />
            <h1 className="font-hindi text-3xl font-bold">ग्राम ब्लॉग</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            गांव की घटनाएं, कहानियां और सूचनाएं
          </p>
        </div>

        <Card>
          <CardContent className="p-8 text-center">
            <Newspaper className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई ब्लॉग उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Blogs;

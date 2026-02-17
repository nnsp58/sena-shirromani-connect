import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Suggestions = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-accent/20 to-accent/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Lightbulb className="h-8 w-8 text-accent" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">सुझाव</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            गांव के विकास के लिए अपने विचार साझा करें
          </p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="font-hindi text-xl">नया सुझाव दें</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input placeholder="आपका नाम" className="font-hindi" />
            </div>
            <div className="space-y-2">
              <Input placeholder="मोबाइल नंबर" />
            </div>
            <div className="space-y-2">
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-hindi">
                <option>श्रेणी चुनें</option>
                <option>सड़क</option>
                <option>शिक्षा</option>
                <option>स्वास्थ्य</option>
                <option>पानी</option>
                <option>बिजली</option>
                <option>अन्य</option>
              </select>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="अपना सुझाव विस्तार से लिखें..."
                className="font-hindi min-h-32"
              />
            </div>
            <Button className="w-full font-hindi font-semibold">
              <Send className="h-4 w-4 mr-2" />
              सुझाव भेजें
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8 text-center">
            <Lightbulb className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई सुझाव उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Suggestions;

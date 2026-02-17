import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary to-[hsl(220,20%,18%)] p-6 rounded-xl text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <Phone className="h-8 w-8 text-secondary" />
            <h1 className="font-hindi text-3xl font-bold">संपर्क करें</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            हमसे संपर्क करें, हम आपकी सहायता के लिए तैयार हैं
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-hindi text-xl">संदेश भेजें</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input placeholder="आपका नाम" className="font-hindi" />
              </div>
              <div className="space-y-2">
                <Input placeholder="ईमेल" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Input placeholder="मोबाइल नंबर" />
            </div>
            <div className="space-y-2">
              <Input placeholder="विषय" className="font-hindi" />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="आपका संदेश..."
                className="font-hindi min-h-32"
              />
            </div>
            <Button className="w-full font-hindi font-semibold">
              <Send className="h-4 w-4 mr-2" />
              संदेश भेजें
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Contact;

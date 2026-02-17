import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Complaints = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-destructive/20 to-destructive/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Megaphone className="h-8 w-8 text-destructive" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">शिकायत पंजीकरण</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            अपनी समस्या दर्ज करें, हम जल्द से जल्द समाधान करेंगे
          </p>
        </div>

        <Card className="border-2 border-destructive/20">
          <CardHeader>
            <CardTitle className="font-hindi text-xl">नई शिकायत दर्ज करें</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="आपका नाम" className="font-hindi" />
              <Input placeholder="मोबाइल नंबर" />
            </div>
            <div className="space-y-2">
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm font-hindi">
                <option>श्रेणी चुनें</option>
                <option>पानी</option>
                <option>बिजली</option>
                <option>सड़क</option>
                <option>सफाई</option>
                <option>स्ट्रीट लाइट</option>
                <option>अन्य</option>
              </select>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="अपनी समस्या विस्तार से बताएं..."
                className="font-hindi min-h-32"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-hindi text-muted-foreground">फोटो अपलोड करें (वैकल्पिक)</label>
              <Input type="file" accept="image/*" />
            </div>
            <Button className="w-full font-hindi font-semibold bg-destructive hover:bg-destructive/90">
              <Send className="h-4 w-4 mr-2" />
              शिकायत दर्ज करें
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8 text-center">
            <Megaphone className="h-12 w-12 text-muted-foreground/40 mx-auto mb-3" />
            <p className="font-hindi text-muted-foreground">अभी कोई शिकायत उपलब्ध नहीं है</p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Complaints;

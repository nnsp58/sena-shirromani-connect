import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, AlertCircle, CheckCircle2, Clock, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const complaints = [
  {
    id: "C001",
    name: "अनिल कुमार",
    date: "12 फरवरी 2026",
    category: "पानी",
    complaint: "पीने का पानी दो दिन से नहीं आ रहा है",
    status: "प्रगति में",
    priority: "उच्च",
  },
  {
    id: "C002",
    name: "सुनीता देवी",
    date: "10 फरवरी 2026",
    category: "बिजली",
    complaint: "गली में बिजली का खंभा टूटा हुआ है",
    status: "सुलझाई गई",
    priority: "मध्यम",
  },
  {
    id: "C003",
    name: "रमेश सिंह",
    date: "8 फरवरी 2026",
    category: "सड़क",
    complaint: "मुख्य सड़क में बड़ा गड्ढा है",
    status: "लंबित",
    priority: "उच्च",
  },
];

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

        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-destructive/10 to-destructive/20">
            <CardContent className="p-5 text-center">
              <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-2" />
              <div className="text-3xl font-bold text-destructive">8</div>
              <div className="font-hindi text-sm text-muted-foreground">लंबित</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-info/10 to-info/20">
            <CardContent className="p-5 text-center">
              <Clock className="h-8 w-8 text-info mx-auto mb-2" />
              <div className="text-3xl font-bold text-info">12</div>
              <div className="font-hindi text-sm text-muted-foreground">प्रगति में</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/20">
            <CardContent className="p-5 text-center">
              <CheckCircle2 className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">87</div>
              <div className="font-hindi text-sm text-muted-foreground">सुलझाई गई</div>
            </CardContent>
          </Card>
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

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-hindi text-xl font-bold">हाल की शिकायतें</h2>
            <Badge variant="outline" className="font-hindi">{complaints.length} शिकायत</Badge>
          </div>
          {complaints.map((comp, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="font-hindi text-lg">{comp.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{comp.id}</Badge>
                      <Badge variant="outline" className="text-xs">{comp.category}</Badge>
                      <Badge
                        variant={comp.priority === "उच्च" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {comp.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{comp.date}</p>
                  </div>
                  <Badge
                    className={`text-xs ${
                      comp.status === "सुलझाई गई"
                        ? "bg-success text-white"
                        : comp.status === "प्रगति में"
                        ? "bg-info text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {comp.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-hindi text-foreground">{comp.complaint}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Complaints;

import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ThumbsUp, MessageSquare, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const suggestions = [
  {
    name: "राजेश कुमार",
    date: "10 फरवरी 2026",
    category: "सड़क",
    suggestion: "मुख्य सड़क पर स्ट्रीट लाइट की व्यवस्था की जाए",
    likes: 24,
    replies: 5,
    status: "विचाराधीन",
  },
  {
    name: "प्रिया शर्मा",
    date: "8 फरवरी 2026",
    category: "शिक्षा",
    suggestion: "स्कूल में कंप्यूटर लैब की स्थापना हो",
    likes: 18,
    replies: 3,
    status: "स्वीकृत",
  },
  {
    name: "विकास सिंह",
    date: "5 फरवरी 2026",
    category: "स्वास्थ्य",
    suggestion: "गांव में साप्ताहिक स्वास्थ्य शिविर लगे",
    likes: 32,
    replies: 8,
    status: "कार्यान्वयन में",
  },
];

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

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-hindi text-xl font-bold">हाल के सुझाव</h2>
            <Badge variant="outline" className="font-hindi">{suggestions.length} सुझाव</Badge>
          </div>
          {suggestions.map((sug, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="font-hindi text-lg">{sug.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">{sug.category}</Badge>
                      <Badge
                        className={`text-xs ${
                          sug.status === "स्वीकृत"
                            ? "bg-success text-white"
                            : sug.status === "कार्यान्वयन में"
                            ? "bg-info text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        {sug.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{sug.date}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-hindi text-foreground mb-4">{sug.suggestion}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="font-hindi">{sug.likes} पसंद</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span className="font-hindi">{sug.replies} जवाब</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Suggestions;

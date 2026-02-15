import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollText, Calendar, Award, Users } from "lucide-react";

const milestones = [
  { year: "1720", event: "गांव की स्थापना", description: "सिखेड़ा गांव की नींव रखी गई" },
  { year: "1857", event: "स्वतंत्रता संग्राम", description: "गांव के वीरों ने भाग लिया" },
  { year: "1947", event: "स्वतंत्रता के बाद", description: "विकास का नया दौर शुरू हुआ" },
  { year: "1965", event: "युद्ध में योगदान", description: "गांव के 12 सैनिकों ने भाग लिया" },
  { year: "1971", event: "बांग्लादेश युद्ध", description: "8 सैनिकों का बहादुरी से योगदान" },
  { year: "1999", event: "कारगिल युद्ध", description: "गांव के जवानों ने वीरता दिखाई" },
  { year: "2010", event: "डिजिटलीकरण", description: "ग्राम पंचायत का आधुनिकीकरण" },
  { year: "2025", event: "स्वच्छ ग्राम पुरस्कार", description: "राज्य स्तर पर सम्मानित" },
];

const History = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary to-[hsl(220,20%,18%)] p-6 rounded-xl text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <ScrollText className="h-8 w-8 text-secondary" />
            <h1 className="font-hindi text-3xl font-bold">ग्राम इतिहास</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            सैनिक शिरोमणि सिखेड़ा की गौरवशाली विरासत
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🏛️</div>
              <h2 className="font-hindi text-2xl font-bold mb-4">गांव की स्थापना</h2>
              <p className="font-hindi text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                सैनिक शिरोमणि सिखेड़ा की स्थापना लगभग 300 वर्ष पूर्व हुई थी। यह गांव अपनी
                वीरता, सेवा और संस्कृति के लिए प्रसिद्ध है। हमारे गांव के लोगों ने देश की रक्षा
                में महत्वपूर्ण योगदान दिया है। यहां के 45 से अधिक लोगों ने भारतीय सेना, वायु सेना
                और नौसेना में सेवा की है।
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/20">
            <CardContent className="p-6 text-center">
              <Calendar className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <div className="font-hindi text-sm text-muted-foreground">वर्षों का इतिहास</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20">
            <CardContent className="p-6 text-center">
              <Award className="h-10 w-10 text-secondary mx-auto mb-3" />
              <div className="text-4xl font-bold text-secondary mb-2">45+</div>
              <div className="font-hindi text-sm text-muted-foreground">भूतपूर्व सैनिक</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/20">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 text-success mx-auto mb-3" />
              <div className="text-4xl font-bold text-success mb-2">1250</div>
              <div className="font-hindi text-sm text-muted-foreground">गांववासी</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-2xl font-bold">ऐतिहासिक मील के पत्थर</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="relative pl-20">
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold border-4 border-background shadow-lg">
                    {milestone.year}
                  </div>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-hindi font-bold text-xl mb-2">{milestone.event}</h3>
                      <p className="font-hindi text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-secondary/20 to-secondary/30">
          <CardContent className="p-8">
            <h2 className="font-hindi text-2xl font-bold mb-4 text-center">सैनिक परंपरा</h2>
            <p className="font-hindi text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
              हमारे गांव को "सैनिक शिरोमणि" की उपाधि इसलिए मिली है क्योंकि यहां के लोगों ने हर युद्ध
              में अपनी वीरता का परिचय दिया है। 1965, 1971, 1999 के युद्धों में हमारे गांव के जवानों
              ने अदम्य साहस का प्रदर्शन किया। आज भी हमारे गांव से कई युवा सेना में भर्ती होकर
              देश की सेवा कर रहे हैं।
            </p>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default History;

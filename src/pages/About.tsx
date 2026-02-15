import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Info, MapPin, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-info/20 to-info/40 p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <Info className="h-8 w-8 text-info" />
            <h1 className="font-hindi text-3xl font-bold text-foreground">हमारे बारे में</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            सैनिक शिरोमणि सिखेड़ा - गौरव और सेवा का प्रतीक
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="text-6xl text-center mb-6">🏛️</div>
            <h2 className="font-hindi text-2xl font-bold text-center mb-4">गांव का परिचय</h2>
            <p className="font-hindi text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
              सैनिक शिरोमणि सिखेड़ा एक ऐतिहासिक गांव है जो अपनी वीरता, सेवा और संस्कृति के लिए
              जाना जाता है। हमारा गांव 300 वर्षों से अधिक पुराना है और यहां के लोगों ने देश की
              सेवा में अनेक योगदान दिए हैं।
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-xl mb-2">स्थान</h3>
                  <p className="font-hindi text-muted-foreground">
                    जिला: अमरोहा<br />
                    राज्य: उत्तर प्रदेश<br />
                    पिन कोड: 244221<br />
                    तहसील: हसनपुर
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-xl mb-2">जनसंख्या</h3>
                  <p className="font-hindi text-muted-foreground">
                    कुल जनसंख्या: 1,250<br />
                    परिवार: 285<br />
                    क्षेत्रफल: 450 एकड़<br />
                    साक्षरता: 78%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Award className="h-8 w-8 text-success shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-xl mb-2">उपलब्धियां</h3>
                  <p className="font-hindi text-muted-foreground">
                    45+ भूतपूर्व सैनिक<br />
                    100% शौचालय कवरेज<br />
                    स्वच्छ ग्राम पुरस्कार 2025<br />
                    डिजिटल गांव
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-xl mb-2">हमारा उद्देश्य</h3>
                  <p className="font-hindi text-muted-foreground">
                    पारदर्शी प्रशासन<br />
                    समावेशी विकास<br />
                    डिजिटल सेवाएं<br />
                    सतत विकास
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-primary/20">
          <CardContent className="p-8">
            <h2 className="font-hindi text-2xl font-bold mb-4 text-center">प्रेरणा स्रोत</h2>
            <div className="max-w-2xl mx-auto text-center">
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="font-hindi text-xl font-bold mb-2">चौधरी चरण सिंह</h3>
              <p className="font-hindi text-muted-foreground leading-relaxed">
                भारत के पूर्व प्रधानमंत्री चौधरी चरण सिंह हमारे गांव की प्रेरणा हैं। उनके
                किसान-हितैषी नीतियों और ग्रामीण विकास के प्रति समर्पण ने हमें सदैव प्रेरित
                किया है। हम उनके आदर्शों पर चलते हुए अपने गांव को आगे बढ़ा रहे हैं।
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default About;

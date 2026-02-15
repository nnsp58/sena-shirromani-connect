import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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

        <div className="grid grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">पता</h3>
                  <p className="font-hindi text-muted-foreground">
                    ग्राम पंचायत कार्यालय<br />
                    सैनिक शिरोमणि सिखेड़ा<br />
                    पोस्ट: सिखेड़ा<br />
                    तहसील: हसनपुर<br />
                    जिला: अमरोहा, उत्तर प्रदेश<br />
                    पिन कोड: 244221
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-secondary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-secondary shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">फोन नंबर</h3>
                  <p className="font-hindi text-muted-foreground">
                    ग्राम प्रधान: +91 98******45<br />
                    ग्राम सचिव: +91 97******34<br />
                    पंचायत कार्यालय: +91 59******12<br />
                    आपातकालीन: 100 (पुलिस)<br />
                    स्वास्थ्य: 108 (एम्बुलेंस)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Mail className="h-8 w-8 text-success shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">ईमेल</h3>
                  <p className="font-hindi text-muted-foreground">
                    सामान्य: info@sikhera.info<br />
                    शिकायत: complaints@sikhera.info<br />
                    सुझाव: suggestions@sikhera.info<br />
                    तकनीकी: support@sikhera.info
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-accent shrink-0" />
                <div>
                  <h3 className="font-hindi font-bold text-lg mb-2">कार्यालय समय</h3>
                  <p className="font-hindi text-muted-foreground">
                    सोमवार - शुक्रवार<br />
                    सुबह: 10:00 AM - 1:00 PM<br />
                    शाम: 2:00 PM - 5:00 PM<br />
                    शनिवार: 10:00 AM - 2:00 PM<br />
                    रविवार: बंद
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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

        <Card className="bg-gradient-to-br from-muted/50 to-muted">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="font-hindi text-xl font-bold mb-2">गांव का नक्शा</h3>
              <p className="font-hindi text-muted-foreground mb-4">
                जल्द ही यहां इंटरैक्टिव मैप उपलब्ध होगा
              </p>
              <Button variant="outline" className="font-hindi">
                <MapPin className="h-4 w-4 mr-2" />
                Google Maps पर देखें
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Contact;

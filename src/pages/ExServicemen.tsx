import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Medal, Phone, MapPin, Calendar, Award } from "lucide-react";

const exServicemenData = [
  { name: "सूबेदार राम सिंह", rank: "सूबेदार", service: "भारतीय सेना", years: "1985-2010", phone: "98******01", pension: "हाँ" },
  { name: "हवलदार मोहन लाल", rank: "हवलदार", service: "भारतीय सेना", years: "1990-2015", phone: "98******02", pension: "हाँ" },
  { name: "नायक विजय कुमार", rank: "नायक", service: "भारतीय वायु सेना", years: "1995-2020", phone: "98******03", pension: "हाँ" },
  { name: "सिपाही अजय सिंह", rank: "सिपाही", service: "भारतीय नौसेना", years: "2000-2022", phone: "98******04", pension: "हाँ" },
  { name: "सूबेदार मेजर प्रदीप", rank: "सूबेदार मेजर", service: "भारतीय सेना", years: "1988-2013", phone: "98******05", pension: "हाँ" },
];

const ExServicemen = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-primary to-[hsl(220,20%,18%)] p-6 rounded-xl text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <Medal className="h-8 w-8 text-secondary" />
            <h1 className="font-hindi text-3xl font-bold">भूतपूर्व सैनिक</h1>
          </div>
          <p className="text-primary-foreground/80 text-lg">
            गांव के सम्मानित भूतपूर्व सैनिकों की जानकारी
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/20">
            <CardContent className="p-5 text-center">
              <div className="text-4xl font-bold text-primary">45</div>
              <div className="font-hindi text-sm text-muted-foreground">कुल सैनिक</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/20">
            <CardContent className="p-5 text-center">
              <div className="text-4xl font-bold text-secondary">38</div>
              <div className="font-hindi text-sm text-muted-foreground">पेंशनर</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-success/10 to-success/20">
            <CardContent className="p-5 text-center">
              <div className="text-4xl font-bold text-success">7</div>
              <div className="font-hindi text-sm text-muted-foreground">सक्रिय</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="font-hindi text-xl font-bold">पंजीकृत भूतपूर्व सैनिक</h2>
          {exServicemenData.map((person, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Medal className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-hindi text-lg">{person.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{person.rank}</Badge>
                        <Badge variant="outline" className="text-xs">{person.service}</Badge>
                      </div>
                    </div>
                  </div>
                  <Award className="h-5 w-5 text-secondary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="font-hindi">{person.years}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="font-hindi">{person.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-hindi">पेंशन: {person.pension}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ExServicemen;

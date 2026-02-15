import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, User, Eye, Heart } from "lucide-react";

const blogs = [
  {
    title: "सिखेड़ा गांव का गौरवशाली इतिहास",
    author: "राम प्रताप सिंह",
    date: "10 फरवरी 2026",
    category: "इतिहास",
    excerpt: "हमारे गांव सिखेड़ा का इतिहास 300 वर्ष पुराना है। यह गांव अपनी वीरता और सेवा के लिए प्रसिद्ध है...",
    views: 245,
    likes: 32,
    image: "🏛️",
  },
  {
    title: "जैविक खेती की ओर बढ़ता कदम",
    author: "किसान मोहन लाल",
    date: "8 फरवरी 2026",
    category: "कृषि",
    excerpt: "हमारे गांव के किसान अब जैविक खेती की ओर बढ़ रहे हैं। रासायनिक उर्वरकों को छोड़कर जैविक विधियों को अपना रहे हैं...",
    views: 189,
    likes: 28,
    image: "🌾",
  },
  {
    title: "गांव में नई पीढ़ी की शिक्षा",
    author: "प्रधानाचार्य सुरेश कुमार",
    date: "5 फरवरी 2026",
    category: "शिक्षा",
    excerpt: "आधुनिक शिक्षा प्रणाली के साथ-साथ हमारे स्कूल में पारंपरिक मूल्यों को भी प्राथमिकता दी जाती है...",
    views: 312,
    likes: 45,
    image: "📚",
  },
  {
    title: "स्वच्छता अभियान की सफलता",
    author: "ग्राम सचिव",
    date: "2 फरवरी 2026",
    category: "सामाजिक",
    excerpt: "स्वच्छ भारत मिशन के तहत हमारे गांव ने अनुकरणीय प्रदर्शन किया है। 100% शौचालय कवरेज प्राप्त किया...",
    views: 421,
    likes: 67,
    image: "🧹",
  },
];

const categories = ["सभी", "इतिहास", "कृषि", "शिक्षा", "सामाजिक", "योजना", "खेल"];

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

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Badge
              key={cat}
              variant={cat === "सभी" ? "default" : "outline"}
              className="cursor-pointer whitespace-nowrap font-hindi px-4 py-2"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <Card key={i} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
              <CardHeader>
                <div className="text-6xl text-center mb-4 bg-gradient-to-br from-muted to-muted/50 rounded-lg py-8">
                  {blog.image}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs font-hindi">{blog.category}</Badge>
                  <Badge variant="outline" className="text-xs">
                    <Eye className="h-3 w-3 mr-1" />
                    {blog.views}
                  </Badge>
                </div>
                <CardTitle className="font-hindi text-xl leading-tight">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-hindi line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-hindi">{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-hindi">{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-destructive">
                      <Heart className="h-4 w-4" />
                      <span>{blog.likes}</span>
                    </div>
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

export default Blogs;

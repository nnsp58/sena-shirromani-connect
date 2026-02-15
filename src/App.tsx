import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExServicemen from "./pages/ExServicemen";
import Farmers from "./pages/Farmers";
import Scholarship from "./pages/Scholarship";
import Yojnas from "./pages/Yojnas";
import VeerNari from "./pages/VeerNari";
import Villagers from "./pages/Villagers";
import Suggestions from "./pages/Suggestions";
import Complaints from "./pages/Complaints";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/history" element={<History />} />
          <Route path="/yojnas" element={<Yojnas />} />
          <Route path="/villagers" element={<Villagers />} />
          <Route path="/ex-servicemen" element={<ExServicemen />} />
          <Route path="/veer-nari" element={<VeerNari />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useState } from "react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-1 pt-20 pb-14">
        <LeftSidebar />
        <main className="flex-1 ml-[260px] lg:mr-[300px] min-h-screen">
          <div className="p-6">
            {children}
          </div>
        </main>
        <RightSidebar />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col flex-1 pt-20 pb-20">
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Navigation Drawer */}
      {sidebarOpen && (
        <MobileNav onClose={() => setSidebarOpen(false)} />
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;

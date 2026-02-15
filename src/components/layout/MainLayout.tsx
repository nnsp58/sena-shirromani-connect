import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <LeftSidebar />
      <main className="pt-20 pb-14 ml-[260px] mr-[300px] min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </main>
      <RightSidebar />
      <Footer />
    </div>
  );
};

export default MainLayout;

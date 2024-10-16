
import { AppProvider } from "@/Component/Context";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import SubNavbar from "@/Component/SubNavbar/SubNavbar";
import SideBar from "@/Component/SideBar/SideBar";
export const metadata = {
  title: "Empire Livescore",
  description: "The official website for Empire Livescore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className='layout'>
          <Navbar/>
          <SubNavbar/>
          <div className="content">
            <div className="sidebar">
            <SideBar/>
            </div>
          <div className="main">
          {children}
          </div>
          </div>
          <Footer/>
        </body>
      </AppProvider>
    </html>
  );
}


import { AppProvider } from "@/Component/Context";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import SubNavbar from "@/Component/SubNavbar/SubNavbar";
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
          {children}
          <Footer/>
        </body>
      </AppProvider>
    </html>
  );
}

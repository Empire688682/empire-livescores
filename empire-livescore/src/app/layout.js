
import { AppProvider } from "@/Component/Context";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import SubNavbar from "@/Component/SubNavbar/SubNavbar";
import SideBar from "@/Component/SideBar/SideBar";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Empire Livescore</title>
        <meta name="description" content='The official website for Empire Livescore' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className='layout'>
      <AppProvider>
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
      </AppProvider>
      </body>
    </html>
  );
}


import { AppProvider } from "@/Component/Context";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
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
          {children}
        </body>
      </AppProvider>
    </html>
  );
}

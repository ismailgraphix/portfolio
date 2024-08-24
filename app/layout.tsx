import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter =  Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ismail-Personal Portfolio",
  description: "junior developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >
           <Navbar/>
        {children}
        </ThemeProvider>
        <Footer/>
        </body>
    </html>
  );
}

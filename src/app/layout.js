import { Inter } from "next/font/google";
import "./globals.css";

// components

// redux providers
import { Providers } from "../globalRedux/Providers";


import SideBar from "./components/SideBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAHMOUN Fares",
  description: "Portfolio website of Rahmoun Fares, showcasing projects, skills, and expertise in full-stack development.",
  keywords: "Rahmoun Fares, Full-Stack Developer, Portfolio, Web Development, React, Next.js, Golang",
  author: "Rahmoun Fares",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {children}
          
          <SideBar />
        </body>
      </Providers>
    </html>
  );
}

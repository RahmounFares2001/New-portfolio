import { Inter } from "next/font/google";
import "./globals.css";

// components

// redux providers
import { Providers } from "../globalRedux/Providers";


import SideBar from "./components/SideBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAHMOUN Fares",
  description: "Generated by create next app",
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

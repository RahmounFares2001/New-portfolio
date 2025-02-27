import { Inter, Roboto_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/globalRedux/Providers";
import SideBar from "./components/SideBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "RAHMOUN Fares - Full-Stack Developer Portfolio",
  description: "Portfolio website of Rahmoun Fares, showcasing projects, skills, and expertise in full-stack development.",
  keywords: "Rahmoun Fares, Full-Stack Developer, Portfolio, Web Development, React, Next.js, Golang",
  author: "Rahmoun Fares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <Providers>
        <body className={`${inter.variable} ${poppins.variable} ${robotoMono.variable} antialiased`}>
          {children}
          <SideBar />
        </body>
      </Providers>
    </html>
  );
}
import type { Metadata } from "next";
import { spaceGrotesk } from "./font"
import "./globals.css";
import MainGrid from "@/components/templates/MainGrid";
import Header from "@/components/organisms/Header";

export const metadata : Metadata = {
  title: "Favio Saico | Frontend Developer",
  description: "Portafolio profesional con React y Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html 
      lang="es"
      //  ${inter.variable} ${playfair.variable}
      className={`${spaceGrotesk.variable}`}
    >
      <body
        className="font-sans"
        // className={`antialiased`}
      >
        <Header />
        <MainGrid>{children}</MainGrid>
      </body>
    </html>
  );
}

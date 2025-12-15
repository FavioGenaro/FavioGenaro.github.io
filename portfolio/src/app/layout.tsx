import type { Metadata } from "next";
import { spaceGrotesk, inter, playfair } from "./font"
import "./globals.css";

export const metadata : Metadata = {
  title: "Favio Saico | Frontend Developer",
  description: "Portafolio profesional con React y Next.js",
}

// const themeScript = `
// (function () {
//   const theme = localStorage.getItem("theme");
//   const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const finalTheme = theme || (systemDark ? "dark" : "light");
//   document.documentElement.setAttribute("data-theme", finalTheme);
// })();
// `;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es"
      data-theme="dark"
      // class="dark"
      className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/* <script dangerouslySetInnerHTML={{ __html: themeScript }} /> */}
      </head>
      <body
        // className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

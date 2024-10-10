import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Loading from "./loading";
import Header from "../app/components/layout/Header";
import Footer from "../app/components/layout/Footer";
// import { CssBaseline } from "@mui/material";
// import { ThemeProvider, createTheme } from "@mui/material/styles";



const quandoSans = localFont({
  src: "./fonts/Quando-Regular.woff",
  variable: "--font-quando-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const theme = createTheme({
//   // Customize your theme here if needed
//   palette: {
//     primary: {
//       main: "#1976d2",
//     },
//   },
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quandoSans.variable} antialiased`}
      >
        <Header />
        {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <Suspense fallback={<Loading />}>{children}</Suspense>
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  );
}

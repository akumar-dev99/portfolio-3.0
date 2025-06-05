import Navbar from "../components/Navbar";
import "./globals.css";
import { ReactNode } from "react";



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}



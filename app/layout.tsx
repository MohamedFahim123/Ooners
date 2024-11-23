import type { Metadata } from "next";
import "./globals.css";
import { LayoutInterface } from "./utils/interfaces";


export const metadata: Metadata = {
  title: "Ooners",
  description: "Find an Investment that suits you",
  icons: {
    icon: "/image1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<LayoutInterface>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}

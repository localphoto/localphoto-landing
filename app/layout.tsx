import { ThemeProvider } from "@/providers/ThemeProvider";
import "./globals.css";
import { Work_Sans, Source_Sans_3, Source_Code_Pro } from "next/font/google";

const display = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
const sans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const mono = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: "local.photo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      lang="en"
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

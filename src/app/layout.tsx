import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Lumière Dental — Premier Cosmetic & Family Dentistry",
  description:
    "Lumière Dental is an award-winning dental clinic offering cosmetic dentistry, dental implants, orthodontics, teeth whitening, and gentle family care. Book your appointment today.",
  keywords: [
    "dental clinic",
    "cosmetic dentistry",
    "teeth whitening",
    "dental implants",
    "orthodontics",
    "family dentist",
    "invisible aligners",
    "emergency dentist",
  ],
  authors: [{ name: "Lumière Dental" }],
  openGraph: {
    title: "Lumière Dental — Premier Cosmetic & Family Dentistry",
    description:
      "Award-winning dental care. Cosmetic dentistry, implants, orthodontics & gentle family care.",
    siteName: "Lumière Dental",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumière Dental",
    description: "Award-winning cosmetic & family dentistry.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${fraunces.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

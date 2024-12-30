import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiteFooter } from "@/components/site-footer";
import { OfferPopup } from "@/components/offer-popup";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JC Stocks Official - Professional Trading Services",
  description:
    "Expert stock market trading services, mentorship, and exclusive telegram groups",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header className="px-4 lg:px-6 h-16 flex justify-between items-center border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50">
            <Link className="flex items-center justify-center gap-2" href="/">
              <Image
                src="/logo.jpeg"
                alt="JC Stocks Logo"
                width={32}
                height={32}
                className="border-1 border-black rounded-full"
              />
              <span className="ml-2 text-xl font-bold">JCStocks</span>
            </Link>
            <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
              <Link
                className="text-lg font-medium hover:text-emerald-600 transition-colors"
                href="/mentorship"
              >
                Mentorship
              </Link>
              <Link
                className="text-lg font-medium hover:text-emerald-600 transition-colors"
                href="/premium"
              >
                Premium
              </Link>
              <Link
                className="text-lg font-medium hover:text-emerald-600 transition-colors"
                href="/2.0"
              >
                2.0
              </Link>
              <Link
                className="text-lg font-medium hover:text-emerald-600 transition-colors"
                href="/jc-stocks"
              >
                JC Stocks
              </Link>
            </nav>
            <Sheet>
              <SheetTrigger asChild className="md:hidden ml-4">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-4">
                  <Link
                    className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                    href="/mentorship"
                  >
                    Mentorship
                  </Link>
                  <Link
                    className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                    href="/premium"
                  >
                    Premium
                  </Link>
                  <Link
                    className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                    href="/2.0"
                  >
                    2.0
                  </Link>
                  <Link
                    className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                    href="/jc-stocks"
                  >
                    JC Stocks
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </header>
          {children}
          <SiteFooter />
          <OfferPopup />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}

import { Facebook, Instagram, Mail, MessageCircle, Phone, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import { ContactForm } from './contact-form'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">JCStocks</h3>
            <p className="text-gray-500 max-w-md">
              Your trusted partner in the stock market. Join our community and access expert trading insights.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>help@jcstock</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="https://youtube.com/@jcstocksofficial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
                <Link 
                  href="https://www.instagram.com/jcstocksofficial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link 
                  href="https://x.com/@jc_stocks" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">X (formerly Twitter)</span>
                </Link>
                <Link 
                  href="https://telegram.im/@jcstocksofficial" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="sr-only">Telegram</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link className="hover:text-primary transition-colors" href="/mentorship">Mentorship</Link>
              <Link className="hover:text-primary transition-colors" href="/premium">Premium</Link>
              <Link className="hover:text-primary transition-colors" href="/2.0">2.0</Link>
              <Link className="hover:text-primary transition-colors" href="/jc-stocks">JC Stocks</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ContactForm />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">© 2024 JCStocksOfficial.in. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link className="text-sm text-gray-500 hover:underline" href="/terms">Terms</Link>
              <Link className="text-sm text-gray-500 hover:underline" href="/privacy">Privacy</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}


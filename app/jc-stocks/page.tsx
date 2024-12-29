import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { MessageCircle, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel"

export default function JCStocksPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-8 md:py-12 lg:p-16 bg-gradient-to-b from-black via-emerald-950 to-black text-white min-h-[40vh] flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                JC Stocks Public Group
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Join our vibrant community and stay updated with market insights
              </p>
              <div className="text-center py-5 flex flex-wrap gap-4">

              <Link
                href="https://telegram.im/jcstocksofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative ">Join Public Stocks Group</span>
              </Link>
              <Link
                href="https://telegram.im/jcforexofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative ">Join Public Forex Group</span>
              </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 lg:p-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Success Stories</CardTitle>
                <CardDescription>Previous Premium Call Results</CardDescription>
              </CardHeader>
              <CardContent>
                <SuccessStoriesCarousel />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Updates</CardTitle>
                <CardDescription>Latest insights and analysis</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-semibold">Sector Analysis</h3>
                  <p className="text-sm text-gray-500">
                    Banking and IT sectors showing strength. Key stocks from these sectors are likely to outperform.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Market Outlook</h3>
                  <p className="text-sm text-gray-500">
                    Markets are in an uptrend. Focus on quality stocks with strong fundamentals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Why Join Our Public Group?</CardTitle>
                <CardDescription>Benefits of being part of our community</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center text-center gap-2">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Track Record</h3>
                  <p className="text-sm text-gray-500">View our previous successful calls and performance</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <MessageCircle className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Community Discussion</h3>
                  <p className="text-sm text-gray-500">Engage with fellow traders and share insights</p>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <h3 className="font-semibold">Market Updates</h3>
                  <p className="text-sm text-gray-500">Regular updates on market trends and opportunities</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Join Our Telegram Group</CardTitle>
                <CardDescription className="text-center text-lg">
                  Get access to market insights and join our growing community of traders
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4 justify-center">
                <Link href="https://telegram.im/jcstocksofficial">
                  <Button size="lg" className="w-full max-w-sm">
                    Join Public Stocks Group
                  </Button>
                </Link>
                <Link href="https://telegram.im/jcforexofficial">
                  <Button size="lg" className="w-full max-w-sm">
                    Join Public Forex Group
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}


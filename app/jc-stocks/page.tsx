import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { CheckCircle, MessageCircle, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link';

export default function JCStocksPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                JC Stocks Public Group
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Join our vibrant community and stay updated with market insights
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Success Stories</CardTitle>
                <CardDescription>Previous Premium Call Results</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Stock XYZ</h3>
                    <p className="text-sm text-gray-500">Entry: 100 | Target Hit: 120 | Return: 20%</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Stock ABC</h3>
                    <p className="text-sm text-gray-500">Entry: 250 | Target Hit: 285 | Return: 14%</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div>
                    <h3 className="font-semibold">Stock PQR</h3>
                    <p className="text-sm text-gray-500">Entry: 150 | Target Hit: 180 | Return: 20%</p>
                  </div>
                </div>
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

          <div className="mt-12">
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

          <div className="mt-12">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Join Our Telegram Group</CardTitle>
                <CardDescription className="text-center text-lg">
                  Get access to market insights and join our growing community of traders
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 justify-center">
                <Link href="https://telegram.im/jcstocksofficial">
                  <Button size="lg" className="w-full max-w-sm">
                    Join Public Stocks Group
                  </Button>
                </Link>
                <Link href="https://telegram.im/jcforexofficial">
                  <Button size="lg" variant="outline" className="w-full max-w-sm">
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


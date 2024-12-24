import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, Rocket, Search, TrendingUp } from 'lucide-react'
import Image from "next/image"
import Link from "next/link";

export default function TwoPointZeroPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to JC STOCKS 2.0
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Where Stocks Take Off like rocket 🚀
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
                <p className="text-gray-500 md:text-xl">
                  In this exclusive community, we spotlight stocks that are primed for rocket moves! Our process is simple yet powerful.
                </p>
              </div>
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <Search className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Stock Scanning</CardTitle>
                    <CardDescription>
                      We meticulously analyze a group of stocks using demand supply and HTF Support.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Top-Down Approach</CardTitle>
                    <CardDescription>
                      A comprehensive method to ensure we're on the right side of the market trends.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <BarChart className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Sector Focus</CardTitle>
                    <CardDescription>
                      Focusing on sector specific stocks for maximum potential.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Trading Analysis"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={400}
                src="/placeholder.svg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Results Speak for Themselves</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">10%++</CardTitle>
                <CardDescription>Consistent Moves</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">15%++</CardTitle>
                <CardDescription>Strong Performers</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">20%</CardTitle>
                <CardDescription>Upper Circuit Locks</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Ready to Take Your Research to the Next Level?</CardTitle>
              <CardDescription className="text-center text-lg">
                Join the 2.0 community today and let's turn insights into results together!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Link href="https://telegram.im/jc_upstox_bot">
                <Button size="lg" className="w-full max-w-sm">
                  Join 2.0 Community
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}


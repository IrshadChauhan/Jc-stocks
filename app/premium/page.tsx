import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, CheckCircle, LineChart, Target, TrendingUp } from 'lucide-react'
import Link from 'next/link';

export default function PremiumPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Premium Channel
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Precision Trades, Superior Results
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Crystal-Clear Entries</CardTitle>
                <CardDescription>
                  Every trade comes with a defined entry, stop-loss, and target.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <CardTitle>80%++ Accuracy</CardTitle>
                <CardDescription>
                  Our track record speaks for itself, ensuring consistent results.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Sector-Specific Focus</CardTitle>
                <CardDescription>
                  Targeting select sectors for quick targets even in challenging markets.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Best-in-Class Execution</CardTitle>
                <CardDescription>
                  Meticulously planned trades for strong achievements.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Everything you need to know about our Premium service</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">How can I join Premium?</h3>
                  <p className="text-gray-500">By paying on our XYZ bot platform.</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">What are the monthly charges?</h3>
                  <p className="text-gray-500">Currently ₹999 (subject to change)</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Which calls are given?</h3>
                  <p className="text-gray-500">Only equity (cash) calls are provided</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">How many calls can I expect?</h3>
                  <p className="text-gray-500">10+ quality calls expected per month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plans</CardTitle>
                <CardDescription>Choose the plan that suits you best</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-bold">Monthly Plan</h3>
                  <p className="text-gray-500">₹999 per month</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Quarterly Plan</h3>
                  <p className="text-gray-500">3 months subscription</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Half Yearly Plan</h3>
                  <p className="text-gray-500">6 months subscription</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Special Offer</h3>
                  <p className="text-gray-500">
                    Get 1 month complimentary access to Premium and lifetime access to 2.0 by opening an Upstox account through us
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Experience Trading at its Finest</CardTitle>
              <CardDescription className="text-center text-lg">
                Join the Premium channel today and unlock the edge you deserve!
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Link href="https://telegram.im/jcpremium_payment_bot">
                <Button size="lg" className="w-full max-w-sm">
                  Subscribe Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}


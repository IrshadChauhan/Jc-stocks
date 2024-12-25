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

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Everything you need to know about our Premium service</p>
          </div>
          <Card>
            <CardContent className="grid gap-6 pt-6">
                <div className="grid gap-2">
                  <h3 className="font-bold">What is JC Stocks Premium?</h3>
                  <p className="text-gray-500">
                    JC Stocks Premium is an exclusive channel where stock recommendations are provided with detailed entry points, stop-loss (SL), and target levels.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">How can I join JC Stocks Premium?</h3>
                  <p className="text-gray-500">
                    You can join by subscribing to the premium channel during the subscription window.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">What are the subscription plans?</h3>
                  <p className="text-gray-500">
                    We offer monthly, quarterly, and half-yearly subscription plans. To know more, message our premium bot.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Is there an alternative way to join Premium?</h3>
                  <p className="text-gray-500">
                    Yes, you can receive complimentary 1-month Premium access along with lifetime access to JC Stocks 2.0 by opening an Upstox account using our referral link.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">What types of recommendations are provided?</h3>
                  <p className="text-gray-500">
                    Only equity recommendations are shared, including entry points, stop-loss (SL), and target levels. We focus on trades with the highest probability of success, considering factors like strong execution (7/7 setups), sector support, and closing price action.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">How many recommendations per month?</h3>
                  <p className="text-gray-500">
                    You can expect 10+ recommendations per month. If fewer calls are provided, your next month's subscription will be free.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">When can I join Premium?</h3>
                  <p className="text-gray-500">
                    The subscription window is open from the 25th to the 30th/31st of each month. Access is granted immediately after payment during this window.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">How long is the subscription valid?</h3>
                  <p className="text-gray-500">
                    The subscription is valid until the end of the enrollment month. For example, if you took January premium, your subscription will end on January 31st.
                  </p>
                </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}


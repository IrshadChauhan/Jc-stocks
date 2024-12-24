import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, LineChart, Rocket, Target, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to JC Stocks Official
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Your trusted partner in the stock market. Join our community and access expert trading insights.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/mentorship">
                <Button variant="default" size="lg">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
             <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Lifetime Mentorship</CardTitle>
                <CardDescription>Transform your trading journey with our comprehensive mentorship program</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/mentorship" className="inline-flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Premium Signals</CardTitle>
                <CardDescription>Get access to exclusive trading calls with detailed entry, stop-loss, and targets</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/premium" className="inline-flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-10 w-10 text-primary mb-4" />
                <CardTitle>JC Stocks 2.0</CardTitle>
                <CardDescription>Join our exclusive community where stocks take off like rockets</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/2.0" className="inline-flex items-center text-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
           
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  We offer comprehensive trading solutions from basic to advanced levels, helping you become a successful trader.
                </p>
              </div>
              <ul className="grid gap-6">
                <li className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-1">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Analysis</h3>
                    <p className="text-sm text-gray-500">Daily market insights and professional analysis</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-1">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Precise Calls</h3>
                    <p className="text-sm text-gray-500">Accurate entry, exit points and stop-loss levels</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-1">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Community Support</h3>
                    <p className="text-sm text-gray-500">Active community of traders helping each other</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Trading Dashboard"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={400}
                src="/placeholder.svg"
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChartIcon as ChartBar, LineChart, ListChecks, MessageCircle, Target, Users } from 'lucide-react'
import Link from 'next/link';

export default function MentorshipPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Lifetime Mentorship Program
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Transform your trading journey with our comprehensive mentorship services
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <Card>
              <CardHeader>
                <ListChecks className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Stock Scanning and Watchlist</CardTitle>
                <CardDescription>Learn effective methods to scan stocks and compile a personalized list of favorites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Effective stock screening techniques</li>
                  <li>• Creating and managing watchlists</li>
                  <li>• Daily monitoring strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ChartBar className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Sectorial Analysis</CardTitle>
                <CardDescription>Conduct sectorial analysis and identify key stocks within each sector</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Sector rotation analysis</li>
                  <li>• Identifying sector leaders</li>
                  <li>• Inter-market relationships</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Psychology and Mindset</CardTitle>
                <CardDescription>Maintain composure and execute trades without panicking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Emotional control techniques</li>
                  <li>• Risk management mindset</li>
                  <li>• Disciplined trading approach</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LineChart className="h-8 w-8 text-primary mb-4" />
                <CardTitle>125 EMA & Gap Up Strategy</CardTitle>
                <CardDescription>Master the 125 EMA and Gap Up trading strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Understanding 125 EMA</li>
                  <li>• Gap up trading techniques</li>
                  <li>• Implementation guidelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Live Sessions</CardTitle>
                <CardDescription>Interactive sessions for doubt solving and market analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Weekly market review</li>
                  <li>• Doubt clearing sessions</li>
                  <li>• Real-time market analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Rule-Based Trading</CardTitle>
                <CardDescription>Learn systematic approach to trading with clear rules</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>• Trading system development</li>
                  <li>• Entry/exit rules</li>
                  <li>• Position sizing guidelines</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Program Benefits</CardTitle>
                <CardDescription>Everything included in our lifetime mentorship program</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-semibold">Stock Scanning and Daily Tracking</h3>
                  <p className="text-sm text-gray-500">
                    Learn effective methods to scan stocks and compile a personalized list of favorites. Master the art of
                    monitoring your selected stocks on a daily basis for optimal trading opportunities.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Stock Management for Different Roles</h3>
                  <p className="text-sm text-gray-500">
                    Tips on managing your stocks whether you are employed, running a business, or a full-time trader. Learn to
                    balance your trading activities with your lifestyle.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Sectorial Analysis</h3>
                  <p className="text-sm text-gray-500">
                    Conduct comprehensive sectorial analysis and identify key stocks to focus on within each sector. Learn to
                    spot sector rotation and capitalize on emerging trends.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Psychology and Mindset</h3>
                  <p className="text-sm text-gray-500">
                    Maintain composure and execute trades without panicking. Develop the right mindset for setting and
                    achieving targets while managing stop losses effectively.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Live Sessions and Support</h3>
                  <p className="text-sm text-gray-500">
                    Regular live sessions to discuss your doubts and get market views. Weekend sessions to prepare for the
                    upcoming week/month with sector-specific focus areas.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">125 EMA & 125 Gap Up Strategy</h3>
                  <p className="text-sm text-gray-500">
                    Master the 125 EMA and Gap Up trading strategies. Learn when and how to implement these strategies, and
                    most importantly, when not to use them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Link href="https://telegram.im/jcmentorship_bot">
              <Button size="lg" className="w-full max-w-sm">
                Join Mentorship Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}


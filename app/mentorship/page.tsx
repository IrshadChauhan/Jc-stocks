// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import {
//   BookOpen,
//   BarChartIcon as ChartBar,
//   LineChart,
//   ListChecks,
//   Target,
//   Users,
// } from "lucide-react";
// import Link from "next/link";
// import { ReviewsCarousel } from "@/components/reviews-carousel";

// export default function MentorshipPage() {
//   return (
//     <main className="flex-1">
//       <section className="w-full py-8 md:py-12 lg:p-16 bg-gradient-to-b from-black via-emerald-950 to-black text-white min-h-[40vh] flex items-center justify-center">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                 Lifetime Mentorship Program
//               </h1>
//               <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
//                 Transform your trading journey with our comprehensive mentorship
//                 services
//               </p>
//             </div>
//             <div className="text-center">
//               <Link
//                 href="https://telegram.im/jcmentorship_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
//               >
//                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
//                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
//                 <span className="relative">Enroll Mentorship Program</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
//             <Card>
//               <CardHeader>
//                 <ListChecks className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Stock Scanning and Watchlist</CardTitle>
//                 <CardDescription>
//                   Learn effective methods to scan stocks and compile a
//                   personalized list of favorites
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm text-gray-500">
//                   <li>• Effective stock screening techniques</li>
//                   <li>• Creating and managing watchlists</li>
//                   <li>• Daily monitoring strategies</li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <ChartBar className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Sectorial Analysis</CardTitle>
//                 <CardDescription>
//                   Conduct sectorial analysis and identify key stocks within each
//                   sector
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm text-gray-500">
//                   <li>• Sector rotation analysis</li>
//                   <li>• Identifying sector leaders</li>
//                   <li>• Inter-market relationships</li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <Target className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Psychology and Mindset</CardTitle>
//                 <CardDescription>
//                   Maintain composure and execute trades without panicking
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm text-gray-500">
//                   <li>• Emotional control techniques</li>
//                   <li>• Risk management mindset</li>
//                   <li>• Disciplined trading approach</li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <LineChart className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>125 EMA & Gap Up Strategy</CardTitle>
//                 <CardDescription>
//                   Master the 125 EMA and Gap Up trading strategies
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm text-gray-500">
//                   <li>• Understanding 125 EMA</li>
//                   <li>• Gap up trading techniques</li>
//                   <li>• Implementation guidelines</li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <Users className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Live Sessions</CardTitle>
//                 <CardDescription>
//                   Interactive sessions for doubt solving and market analysis
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm text-gray-500">
//                   <li>• Weekly market review</li>
//                   <li>• Doubt clearing sessions</li>
//                   <li>• Real-time market analysis</li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <BookOpen className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Rule-Based Trading</CardTitle>
//                 <CardDescription>
//                   Learn systematic approach to trading with clear rules
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-2 text-sm text-gray-500">
//                   <li>• Trading system development</li>
//                   <li>• Entry/exit rules</li>
//                   <li>• Position sizing guidelines</li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="mt-16">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Detailed Program Benefits</CardTitle>
//                 <CardDescription>
//                   Everything included in our lifetime mentorship program
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <div className="grid gap-2">
//                   <h3 className="font-semibold">
//                     Stock Scanning and Daily Tracking
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     Learn effective methods to scan stocks and compile a
//                     personalized list of favorites. Master the art of monitoring
//                     your selected stocks on a daily basis for optimal trading
//                     opportunities.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-semibold">
//                     Stock Management for Different Roles
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     Tips on managing your stocks whether you are employed,
//                     running a business, or a full-time trader. Learn to balance
//                     your trading activities with your lifestyle.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-semibold">Sectorial Analysis</h3>
//                   <p className="text-sm text-gray-500">
//                     Conduct comprehensive sectorial analysis and identify key
//                     stocks to focus on within each sector. Learn to spot sector
//                     rotation and capitalize on emerging trends.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-semibold">Psychology and Mindset</h3>
//                   <p className="text-sm text-gray-500">
//                     Maintain composure and execute trades without panicking.
//                     Develop the right mindset for setting and achieving targets
//                     while managing stop losses effectively.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-semibold">Live Sessions and Support</h3>
//                   <p className="text-sm text-gray-500">
//                     Regular live sessions to discuss your doubts and get market
//                     views. Weekend sessions to prepare for the upcoming
//                     week/month with sector-specific focus areas.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-semibold">
//                     125 EMA & 125 Gap Up Strategy
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     Master the 125 EMA and Gap Up trading strategies. Learn when
//                     and how to implement these strategies, and most importantly,
//                     when not to use them.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="container px-4 md:px-6 py-8">
//             <div className="text-center">
//               <Link href="https://telegram.im/jcmentorship_bot">
//                 <Button size="lg" className="w-full max-w-sm">
//                   Enroll Mentorship Program
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           <section className="w-full py-8 md:py-12 lg:p-16 bg-gray-50">
//             <div className="container px-4 md:px-6">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold tracking-tighter">
//                   Mentees Review
//                 </h2>
//                 <p className="text-gray-500 mt-2">
//                   Hear what our mentees have to say about their journey
//                 </p>
//               </div>
//               <ReviewsCarousel />
//             </div>
//           </section>

//           <section className="w-full py-8 md:py-12 lg:p-16 bg-gray-100">
//             <div className="container px-4 md:px-6">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold tracking-tighter">
//                   Frequently Asked Questions
//                 </h2>
//                 <p className="text-gray-500 mt-2">
//                   Everything you need to know about our Mentorship Program
//                 </p>
//               </div>
//               <Card>
//                 <CardContent className="grid gap-6 pt-6">
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">What is Lifetime Mentorship?</h3>
//                     <p className="text-gray-500">
//                       This is not a short-term 2-3 month course but a program
//                       designed to provide ongoing support and learning
//                       throughout your trading journey.
//                     </p>
//                   </div>
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">Is this a signal service?</h3>
//                     <p className="text-gray-500">
//                       No, this program is focused on teaching you how to trade
//                       independently. If you are only looking for trade signals,
//                       consider joining the premium channel where trading
//                       insights are shared.
//                     </p>
//                   </div>
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">
//                       What are the core focus areas?
//                     </h3>
//                     <p className="text-gray-500">
//                       You will learn what to trade, when to trade, how to trade,
//                       and understand the critical factors for making informed
//                       trading decisions.
//                     </p>
//                   </div>
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">
//                       How do you address mindset development?
//                     </h3>
//                     <p className="text-gray-500">
//                       The program addresses how to handle both losses and
//                       profits, ensuring you cultivate the right mindset for
//                       trading.
//                     </p>
//                   </div>
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">
//                       What kind of support will I receive?
//                     </h3>
//                     <p className="text-gray-500">
//                       You will have one-on-one access to me. There are no bots
//                       or intermediaries; your questions and messages will be
//                       answered directly by me. You will also become part of a
//                       private group where mentees can discuss stocks and trades
//                       freely.
//                     </p>
//                   </div>
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">
//                       What about the community aspect?
//                     </h3>
//                     <p className="text-gray-500">
//                       Gain access to exclusive insights on stock price action
//                       and market trends. When necessary, I will explain concepts
//                       via short videos and provide similar stocks for practice
//                       in our mentorship community channel.
//                     </p>
//                   </div>
//                   <div className="grid gap-2">
//                     <h3 className="font-bold">
//                       What is your commitment to students?
//                     </h3>
//                     <p className="text-gray-500">
//                       I am dedicated to providing you with 100% support.
//                       However, success depends on your commitment to following
//                       the guidance and putting in the work. My promise is to
//                       help you become a disciplined, rule-based trader.
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </section>
//         </div>
//       </section>
//     </main>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, BarChartIcon as ChartBar, LineChart, ListChecks, Target, Users } from 'lucide-react';
import Link from "next/link";
import { ReviewsCarousel } from "@/components/reviews-carousel";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MentorshipPage() {
  return (
    <main className="flex-1">
      <motion.section
        className="w-full py-8 md:py-12 lg:p-16 bg-gradient-to-b from-black via-emerald-950 to-black text-white min-h-[40vh] flex items-center justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div
          className="container px-4 md:px-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Lifetime Mentorship Program
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Transform your trading journey with our comprehensive mentorship
                services
              </p>
            </div>
            <div className="text-center">
              <Link
                href="https://telegram.im/jcmentorship_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                <span className="relative">Enroll Mentorship Program</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="w-full py-8 md:py-12 lg:p-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <ListChecks className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Stock Scanning and Watchlist</CardTitle>
                  <CardDescription>
                    Learn effective methods to scan stocks and compile a
                    personalized list of favorites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Effective stock screening techniques</li>
                    <li>• Creating and managing watchlists</li>
                    <li>• Daily monitoring strategies</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <ChartBar className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Sectorial Analysis</CardTitle>
                  <CardDescription>
                    Conduct sectorial analysis and identify key stocks within each
                    sector
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Sector rotation analysis</li>
                    <li>• Identifying sector leaders</li>
                    <li>• Inter-market relationships</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Psychology and Mindset</CardTitle>
                  <CardDescription>
                    Maintain composure and execute trades without panicking
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Emotional control techniques</li>
                    <li>• Risk management mindset</li>
                    <li>• Disciplined trading approach</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <LineChart className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>125 EMA & Gap Up Strategy</CardTitle>
                  <CardDescription>
                    Master the 125 EMA and Gap Up trading strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Understanding 125 EMA</li>
                    <li>• Gap up trading techniques</li>
                    <li>• Implementation guidelines</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Live Sessions</CardTitle>
                  <CardDescription>
                    Interactive sessions for doubt solving and market analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Weekly market review</li>
                    <li>• Doubt clearing sessions</li>
                    <li>• Real-time market analysis</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Rule-Based Trading</CardTitle>
                  <CardDescription>
                    Learn systematic approach to trading with clear rules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Trading system development</li>
                    <li>• Entry/exit rules</li>
                    <li>• Position sizing guidelines</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Detailed Program Benefits</CardTitle>
                <CardDescription>
                  Everything included in our lifetime mentorship program
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <h3 className="font-semibold">
                    Stock Scanning and Daily Tracking
                  </h3>
                  <p className="text-sm text-gray-500">
                    Learn effective methods to scan stocks and compile a
                    personalized list of favorites. Master the art of monitoring
                    your selected stocks on a daily basis for optimal trading
                    opportunities.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">
                    Stock Management for Different Roles
                  </h3>
                  <p className="text-sm text-gray-500">
                    Tips on managing your stocks whether you are employed,
                    running a business, or a full-time trader. Learn to balance
                    your trading activities with your lifestyle.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Sectorial Analysis</h3>
                  <p className="text-sm text-gray-500">
                    Conduct comprehensive sectorial analysis and identify key
                    stocks to focus on within each sector. Learn to spot sector
                    rotation and capitalize on emerging trends.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Psychology and Mindset</h3>
                  <p className="text-sm text-gray-500">
                    Maintain composure and execute trades without panicking.
                    Develop the right mindset for setting and achieving targets
                    while managing stop losses effectively.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Live Sessions and Support</h3>
                  <p className="text-sm text-gray-500">
                    Regular live sessions to discuss your doubts and get market
                    views. Weekend sessions to prepare for the upcoming
                    week/month with sector-specific focus areas.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">
                    125 EMA & 125 Gap Up Strategy
                  </h3>
                  <p className="text-sm text-gray-500">
                    Master the 125 EMA and Gap Up trading strategies. Learn when
                    and how to implement these strategies, and most importantly,
                    when not to use them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="container px-4 md:px-6 py-8">
            <div className="text-center">
              <Link href="https://telegram.im/jcmentorship_bot">
                <Button size="lg" className="w-full max-w-sm">
                  Enroll Mentorship Program
                </Button>
              </Link>
            </div>
          </div>

          <motion.section
            className="w-full py-8 md:py-12 lg:p-16 bg-gray-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Mentees Review
                </h2>
                <p className="text-gray-500 mt-2">
                  Hear what our mentees have to say about their journey
                </p>
              </div>
              <ReviewsCarousel />
            </div>
          </motion.section>

          <motion.section
            className="w-full py-8 md:py-12 lg:p-16 bg-gray-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 mt-2">
                  Everything you need to know about our Mentorship Program
                </p>
              </div>
              <Card>
                <CardContent className="grid gap-6 pt-6">
                  <div className="grid gap-2">
                    <h3 className="font-bold">What is Lifetime Mentorship?</h3>
                    <p className="text-gray-500">
                      This is not a short-term 2-3 month course but a program
                      designed to provide ongoing support and learning
                      throughout your trading journey.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">Is this a signal service?</h3>
                    <p className="text-gray-500">
                      No, this program is focused on teaching you how to trade
                      independently. If you are only looking for trade signals,
                      consider joining the premium channel where trading
                      insights are shared.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">
                      What are the core focus areas?
                    </h3>
                    <p className="text-gray-500">
                      You will learn what to trade, when to trade, how to trade,
                      and understand the critical factors for making informed
                      trading decisions.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">
                      How do you address mindset development?
                    </h3>
                    <p className="text-gray-500">
                      The program addresses how to handle both losses and
                      profits, ensuring you cultivate the right mindset for
                      trading.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">
                      What kind of support will I receive?
                    </h3>
                    <p className="text-gray-500">
                      You will have one-on-one access to me. There are no bots
                      or intermediaries; your questions and messages will be
                      answered directly by me. You will also become part of a
                      private group where mentees can discuss stocks and trades
                      freely.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">
                      What about the community aspect?
                    </h3>
                    <p className="text-gray-500">
                      Gain access to exclusive insights on stock price action
                      and market trends. When necessary, I will explain concepts
                      via short videos and provide similar stocks for practice
                      in our mentorship community channel.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <h3 className="font-bold">
                      What is your commitment to students?
                    </h3>
                    <p className="text-gray-500">
                      I am dedicated to providing you with 100% support.
                      However, success depends on your commitment to following
                      the guidance and putting in the work. My promise is to
                      help you become a disciplined, rule-based trader.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </main>
  );
}


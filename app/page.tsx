// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ArrowRight, LineChart, Rocket, Target, Users } from 'lucide-react'
// import Image from "next/image"
// import Link from "next/link"

// export default function Home() {
//   return (
//     <main className="flex-1">
//       <section className="w-full py-8 md:py-12 lg:p-16 xl:py-24 bg-black text-white min-h-[40vh] flex items-center justify-center">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                 Welcome to JC Stocks Official
//               </h1>
//               <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
//                 Your trusted partner in the stock market. Join our community and access expert trading insights.
//               </p>
//             </div>
//             <div className="space-x-4">
//               <Link href="/mentorship">
//                 <Button variant="default" size="lg">
//                   Start Learning
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16 bg-gray-100">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
//              <Card>
//               <CardHeader>
//                 <Users className="h-10 w-10 text-primary mb-4" />
//                 <CardTitle>Lifetime Mentorship</CardTitle>
//                 <CardDescription>Transform your trading journey with our comprehensive mentorship program</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/mentorship" className="inline-flex items-center text-primary">
//                   Learn more <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <Target className="h-10 w-10 text-primary mb-4" />
//                 <CardTitle>Premium Signals</CardTitle>
//                 <CardDescription>Get access to exclusive trading calls with detailed entry, stop-loss, and targets</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/premium" className="inline-flex items-center text-primary">
//                   Learn more <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <Rocket className="h-10 w-10 text-primary mb-4" />
//                 <CardTitle>JC Stocks 2.0</CardTitle>
//                 <CardDescription>Join our exclusive community where stocks take off like rockets</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Link href="/2.0" className="inline-flex items-center text-primary">
//                   Learn more <ArrowRight className="ml-2 h-4 w-4" />
//                 </Link>
//               </CardContent>
//             </Card>

//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us?</h2>
//                 <p className="max-w-[600px] text-gray-500 md:text-xl">
//                   We offer comprehensive trading solutions from basic to advanced levels, helping you become a successful trader.
//                 </p>
//               </div>
//               <ul className="grid gap-6">
//                 <li className="flex items-center gap-4">
//                   <div className="rounded-lg bg-primary/10 p-1">
//                     <LineChart className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Expert Analysis</h3>
//                     <p className="text-sm text-gray-500">Daily market insights and professional analysis</p>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-4">
//                   <div className="rounded-lg bg-primary/10 p-1">
//                     <Target className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Precise Calls</h3>
//                     <p className="text-sm text-gray-500">Accurate entry, exit points and stop-loss levels</p>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-4">
//                   <div className="rounded-lg bg-primary/10 p-1">
//                     <Users className="h-6 w-6 text-primary" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold">Community Support</h3>
//                     <p className="text-sm text-gray-500">Active community of traders helping each other</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex items-center justify-center">
//               <Image
//                 alt="Trading Dashboard"
//                 className="aspect-video overflow-hidden rounded-xl object-cover object-center"
//                 height={400}
//                 src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 width={600}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, LineChart, Rocket, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { YouTubeSection } from "@/components/youtube-section";

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

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:p-16 xl:py-48 bg-gradient-to-b from-black via-emerald-950 to-black text-white">
        <motion.div
          className="container px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to{" "}
                <span className="text-emerald-400">JC Stocks Official</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-emerald-100 md:text-xl">
                Your trusted partner in the stock market. Join our community and
                access expert trading insights.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/mentorship">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 hover-scale"
                >
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-full py-12 md:py-24 lg:p-16 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-3 lg:gap-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="hover-scale border-emerald-100">
                <CardHeader>
                  <Users className="h-10 w-10 text-emerald-600 mb-4" />
                  <CardTitle>Lifetime Mentorship</CardTitle>
                  <CardDescription>
                    Transform your trading journey with our comprehensive
                    mentorship program
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/mentorship"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="hover-scale border-emerald-100">
                <CardHeader>
                  <Target className="h-10 w-10 text-emerald-600 mb-4" />
                  <CardTitle>Premium Signals</CardTitle>
                  <CardDescription>
                    Get access to exclusive trading calls with detailed entry,
                    stop-loss, and targets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/premium"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card className="hover-scale border-emerald-100">
                <CardHeader>
                  <Rocket className="h-10 w-10 text-emerald-600 mb-4" />
                  <CardTitle>JC Stocks 2.0</CardTitle>
                  <CardDescription>
                    Join our exclusive community where stocks take off like
                    rockets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/2.0"
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:p-16">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose <span className="text-emerald-600">Us?</span>
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  We offer comprehensive trading solutions from basic to
                  advanced levels, helping you become a successful trader.
                </p>
              </div>
              <ul className="grid gap-6">
                <motion.li
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="rounded-lg bg-emerald-100 p-1">
                    <LineChart className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Analysis</h3>
                    <p className="text-sm text-gray-500">
                      Daily market insights and professional analysis
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="rounded-lg bg-emerald-100 p-1">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Precise Calls</h3>
                    <p className="text-sm text-gray-500">
                      Accurate entry, exit points and stop-loss levels
                    </p>
                  </div>
                </motion.li>
                <motion.li
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="rounded-lg bg-emerald-100 p-1">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Community Support</h3>
                    <p className="text-sm text-gray-500">
                      Active community of traders helping each other
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  alt="Trading Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  width={600}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <YouTubeSection/>
    </main>
  );
}

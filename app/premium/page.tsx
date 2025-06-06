// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { BarChart, CheckCircle, Target, TrendingUp } from 'lucide-react'
// import Link from 'next/link';

// export default function PremiumPage() {
//   return (
//     <main className="flex-1">
//       <section className="w-full py-8 md:py-12 lg:p-16 bg-gradient-to-b from-black via-emerald-950 to-black text-white min-h-[40vh] flex items-center justify-center">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                 Premium Channel
//               </h1>
//               <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
//                 Precision Trades, Superior Results
//               </p>
//               <div className="text-center py-5">
//               <Link
//                 href="https://telegram.im/jcpremium_payment_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
//               >
//                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
//                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
//                 <span className="relative ">Join Premium Now</span>
//               </Link>
//             </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
//             <Card>
//               <CardHeader>
//                 <Target className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Crystal-Clear Entries</CardTitle>
//                 <CardDescription>
//                   Every trade comes with a defined entry, stop-loss, and target.
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CheckCircle className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>80%++ Accuracy</CardTitle>
//                 <CardDescription>
//                   Our track record speaks for itself, ensuring consistent results.
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <BarChart className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Sector-Specific Focus</CardTitle>
//                 <CardDescription>
//                   Targeting select sectors for quick targets even in challenging markets.
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <TrendingUp className="h-8 w-8 text-primary mb-4" />
//                 <CardTitle>Best-in-Class Execution</CardTitle>
//                 <CardDescription>
//                   Meticulously planned trades for strong achievements.
//                 </CardDescription>
//               </CardHeader>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16">
//         <div className="container px-4 md:px-6">
//           <Card className="border-2 border-primary">
//             <CardHeader>
//               <CardTitle className="text-2xl text-center">Experience Trading at its Finest</CardTitle>
//               <CardDescription className="text-center text-lg">
//                 Join the Premium channel today and unlock the edge you deserve!
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="flex justify-center">
//               <Link href="https://telegram.im/jcpremium_payment_bot">
//                 <Button size="lg" className="w-full max-w-sm">
//                   Join Premium Now
//                 </Button>
//               </Link>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16 bg-gray-100">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
//             <p className="text-gray-500 mt-2">Everything you need to know about our Premium service</p>
//           </div>
//           <Card>
//             <CardContent className="grid gap-6 pt-6">
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">What is JC Stocks Premium?</h3>
//                   <p className="text-gray-500">
//                     JC Stocks Premium is an exclusive channel where stock recommendations are provided with detailed entry points, stop-loss (SL), and target levels.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">How can I join JC Stocks Premium?</h3>
//                   <p className="text-gray-500">
//                     You can join by subscribing to the premium channel during the subscription window.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">What are the subscription plans?</h3>
//                   <p className="text-gray-500">
//                     We offer monthly, quarterly, and half-yearly subscription plans. To know more, message our premium bot.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">Is there an alternative way to join Premium?</h3>
//                   <p className="text-gray-500">
//                     Yes, you can receive complimentary 1-month Premium access along with lifetime access to JC Stocks 2.0 by opening an Upstox account using our referral link.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">What types of recommendations are provided?</h3>
//                   <p className="text-gray-500">
//                     Only equity recommendations are shared, including entry points, stop-loss (SL), and target levels. We focus on trades with the highest probability of success, considering factors like strong execution (7/7 setups), sector support, and closing price action.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">How many recommendations per month?</h3>
//                   <p className="text-gray-500">
//                     You can expect 10+ recommendations per month. If fewer calls are provided, your next month subscription will be free.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">When can I join Premium?</h3>
//                   <p className="text-gray-500">
//                     The subscription window is open from the 25th to the 30th/31st of each month. Access is granted immediately after payment during this window.
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <h3 className="font-bold">How long is the subscription valid?</h3>
//                   <p className="text-gray-500">
//                     The subscription is valid until the end of the enrollment month. For example, if you took January premium, your subscription will end on January 31st.
//                   </p>
//                 </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </main>
//   )
// }


"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, CheckCircle, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';

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

export default function PremiumPage() {
  return (
    <main className="flex-1">
      <motion.section
        className="w-full py-8 md:py-12 lg:p-16 bg-gradient-to-b from-black via-emerald-950 to-black text-white min-h-[40vh] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="container px-4 md:px-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <motion.div className="space-y-2" variants={item}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Premium Channel
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Precision Trades, Superior Results
              </p>
              <div className="text-center py-5">
                <Link
                  href="https://telegram.im/jcpremium_payment_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">Join Premium Now</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="w-full py-8 md:py-12 lg:p-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Crystal-Clear Entries</CardTitle>
                  <CardDescription>
                    Every trade comes with a defined entry, stop-loss, and target.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>80%++ Accuracy</CardTitle>
                  <CardDescription>
                    Our track record speaks for itself, ensuring consistent results.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Sector-Specific Focus</CardTitle>
                  <CardDescription>
                    Targeting select sectors for quick targets even in challenging markets.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div variants={item}>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <CardTitle>Best-in-Class Execution</CardTitle>
                  <CardDescription>
                    Meticulously planned trades for strong achievements.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="w-full py-8 md:py-12 lg:p-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
                    Join Premium Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
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
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2">Everything you need to know about our Premium service</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
                    You can expect 10+ recommendations per month. If fewer calls are provided, your next month subscription will be free.
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
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}




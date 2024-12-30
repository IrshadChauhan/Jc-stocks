// import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { BarChart,  Search, TrendingUp } from 'lucide-react'
// import Image from "next/image"
// import Link from "next/link";

// export default function TwoPointZeroPage() {
//   return (
//     <main className="flex-1">
//       <section className="w-full py-8 md:py-12 lg:p-16 bg-gradient-to-b from-black via-emerald-950 to-black text-white min-h-[40vh] flex items-center justify-center">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                 Welcome to JC STOCKS 2.0
//               </h1>
//               <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
//                 Where Stocks Take Off like rocket 🚀
//               </p>
//               <div className="text-center py-5">
//               <Link
//                 href="https://telegram.im/jc_upstox_bot"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
//               >
//                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
//                 <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
//                 <span className="relative ">Join 2.0 Community</span>
//               </Link>
//             </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-2">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
//                 <p className="text-gray-500 md:text-xl">
//                   In this exclusive community, we spotlight stocks that are primed for rocket moves! Our process is simple yet powerful.
//                 </p>
//               </div>
//               <div className="grid gap-6">
//                 <Card>
//                   <CardHeader>
//                     <Search className="h-8 w-8 text-primary mb-2" />
//                     <CardTitle>Stock Scanning</CardTitle>
//                     <CardDescription>
//                       We meticulously analyze a group of stocks using demand supply and HTF Support.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//                 <Card>
//                   <CardHeader>
//                     <TrendingUp className="h-8 w-8 text-primary mb-2" />
//                     <CardTitle>Top-Down Approach</CardTitle>
//                     <CardDescription>
//                       A comprehensive method to ensure we are on the right side of the market trends.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//                 <Card>
//                   <CardHeader>
//                     <BarChart className="h-8 w-8 text-primary mb-2" />
//                     <CardTitle>Sector Focus</CardTitle>
//                     <CardDescription>
//                       Focusing on sector specific stocks for maximum potential.
//                     </CardDescription>
//                   </CardHeader>
//                 </Card>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <Image
//                 alt="Trading Analysis"
//                 className="aspect-video overflow-hidden rounded-xl object-cover object-center"
//                 height={600}
//                 src="https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 width={600}
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16 bg-gray-100">
//         <div className="container px-4 md:px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Results Speak for Themselves</h2>
//           </div>
//           <div className="grid gap-6 lg:grid-cols-1">
//           <Card>
//               <CardHeader>
//                 <CardTitle>Recent Success Stories</CardTitle>
//                 <CardDescription>Previous Premium Call Results</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <SuccessStoriesCarousel />
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       <section className="w-full py-8 md:py-12 lg:p-16">
//         <div className="container px-4 md:px-6">
//           <Card className="border-2 border-primary">
//             <CardHeader>
//               <CardTitle className="text-2xl text-center">Ready to Take Your Research to the Next Level?</CardTitle>
//               <CardDescription className="text-center text-lg">
//                 Join the 2.0 community today and let us turn insights into results together!
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="flex justify-center">
//               <Link href="https://telegram.im/jc_upstox_bot">
//                 <Button size="lg" className="w-full max-w-sm">
//                   Join 2.0 Community
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
//             <p className="text-gray-500 mt-2">Everything you need to know about JC Stocks 2.0</p>
//           </div>
//           <Card>
//             <CardContent className="grid gap-6 pt-6">
//               <div className="grid gap-2">
//                 <h3 className="font-bold">What is JC Stocks 2.0?</h3>
//                 <p className="text-gray-500">
//                   JC Stocks 2.0 is an upgraded version of JC Stocks, where stocks with exceptional price action are shared. These stocks have a high probability of forming strong candles with potential moves of 5%, 10%, 15%, or even 20% upper circuit gains from their current market price (CMP).
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <h3 className="font-bold">How can I join JC Stocks 2.0?</h3>
//                 <p className="text-gray-500">
//                   You can join by opening an Upstox account using our referral link.
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <h3 className="font-bold">Are there any charges? Is it lifetime free?</h3>
//                 <p className="text-gray-500">
//                   Yes, it is lifetime free. All you need to do is open an account and remain active by trading in it.
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <h3 className="font-bold">When will I lose access to JC Stocks 2.0?</h3>
//                 <p className="text-gray-500">
//                   You will lose access if you are inactive or stop trading in the account. Make sure you donot stay inactive frequently else you might lose access and will not be part of it again.
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <h3 className="font-bold">If I lose access, how can I regain it?</h3>
//                 <p className="text-gray-500">
//                   To regain access, you need to become active or start trading in the account again. Access will be restored from the following month after your account activity resumes.
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <h3 className="font-bold">Are there any additional benefits?</h3>
//                 <p className="text-gray-500">
//                   Yes, you get 1 month complimentary subscription of JC Stocks premium when you open an account under our link.
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <h3 className="font-bold">How do I open an Upstox account?</h3>
//                 <p className="text-gray-500">
//                   You can message us at our  <Link href='https://telegram.in/jc_upstox_bot' className="">Upstox bot</Link> and you will be given the details.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//     </main>
//   )
// }


"use client";

import { motion } from "framer-motion";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Search, TrendingUp } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

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

export default function TwoPointZeroPage() {
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
                Welcome to JC STOCKS 2.0
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Where Stocks Take Off like rocket 🚀
              </p>
              <div className="text-center py-5">
                <Link
                  href="https://telegram.im/jc_upstox_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                  <span className="relative">Join 2.0 Community</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="w-full py-8 md:py-12 lg:p-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div className="space-y-2" variants={item}>
                <h2 className="text-3xl font-bold tracking-tighter">Our Process</h2>
                <p className="text-gray-500 md:text-xl">
                  In this exclusive community, we spotlight stocks that are primed for rocket moves! Our process is simple yet powerful.
                </p>
              </motion.div>
              <motion.div className="grid gap-6" variants={container}>
                <motion.div variants={item}>
                  <Card>
                    <CardHeader>
                      <Search className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Stock Scanning</CardTitle>
                      <CardDescription>
                        We meticulously analyze a group of stocks using demand supply and HTF Support.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
                <motion.div variants={item}>
                  <Card>
                    <CardHeader>
                      <TrendingUp className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Top-Down Approach</CardTitle>
                      <CardDescription>
                        A comprehensive method to ensure we are on the right side of the market trends.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
                <motion.div variants={item}>
                  <Card>
                    <CardHeader>
                      <BarChart className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Sector Focus</CardTitle>
                      <CardDescription>
                        Focusing on sector specific stocks for maximum potential.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                alt="Trading Analysis"
                className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                height={600}
                src="https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={600}
              />
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Results Speak for Themselves</h2>
          </motion.div>
          <motion.div
            className="grid gap-6 lg:grid-cols-1"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Recent Success Stories</CardTitle>
                <CardDescription>Previous Premium Call Results</CardDescription>
              </CardHeader>
              <CardContent>
                <SuccessStoriesCarousel />
              </CardContent>
            </Card>
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
                <CardTitle className="text-2xl text-center">Ready to Take Your Research to the Next Level?</CardTitle>
                <CardDescription className="text-center text-lg">
                  Join the 2.0 community today and let us turn insights into results together!
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
            <p className="text-gray-500 mt-2">Everything you need to know about JC Stocks 2.0</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="grid gap-6 pt-6">
                {/* FAQ content remains the same */}
                <div className="grid gap-2">
                  <h3 className="font-bold">What is JC Stocks 2.0?</h3>
                  <p className="text-gray-500">
                    JC Stocks 2.0 is an upgraded version of JC Stocks, where stocks with exceptional price action are shared. These stocks have a high probability of forming strong candles with potential moves of 5%, 10%, 15%, or even 20% upper circuit gains from their current market price (CMP).
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">How can I join JC Stocks 2.0?</h3>
                  <p className="text-gray-500">
                    You can join by opening an Upstox account using our referral link.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Are there any charges? Is it lifetime free?</h3>
                  <p className="text-gray-500">
                    Yes, it is lifetime free. All you need to do is open an account and remain active by trading in it.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">When will I lose access to JC Stocks 2.0?</h3>
                  <p className="text-gray-500">
                    You will lose access if you are inactive or stop trading in the account. Make sure you donot stay inactive frequently else you might lose access and will not be part of it again.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">If I lose access, how can I regain it?</h3>
                  <p className="text-gray-500">
                    To regain access, you need to become active or start trading in the account again. Access will be restored from the following month after your account activity resumes.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">Are there any additional benefits?</h3>
                  <p className="text-gray-500">
                    Yes, you get 1 month complimentary subscription of JC Stocks premium when you open an account under our link.
                  </p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-bold">How do I open an Upstox account?</h3>
                  <p className="text-gray-500">
                    You can message us at our <Link href='https://telegram.in/jc_upstox_bot' className="underline text-blue-600">Upstox bot</Link> and you will be given the details.
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


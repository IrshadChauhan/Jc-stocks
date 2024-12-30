"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const videos = [
  {
    id: "H0My0y4FY8o",
    title: "Price Action: DEVYANI Top-Down Approach",
    description: "Comprehensive analysis of Devyani International Ltd. using HTF Demand and Supply Zones"
  },
  {
    id: "ZP6IOjewILY", // Replace with actual YouTube video IDs
    title: "Crypto Analysis : BTC, ETH and Many more",
    description: "Highlighting Key Market Trends, Critical Technical Patterns, and possible Future Scenarios"
  },
  {
    id: "EkyIg3VmaXA",
    title: "Commodity Analysis",
    description: "Learn advanced technical analysis patterns and strategies"
  },
  {
    id: "C1fasWCJagk",
    title: "RELIGARE Top-Down Approach",
    description: "Religare Securities Ltd. (RELIGARE), a prominent stock within the Nifty Finance sector, using a comprehensive Top-Down Approach."
  }
];

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

export function YouTubeSection() {
  return (
    <motion.section
      className="w-full py-8 md:py-12 lg:p-16 bg-gray-50"
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
          <h2 className="text-3xl font-bold tracking-tighter">Latest Analysis</h2>
          <p className="text-gray-500 mt-2">Watch our detailed technical analysis and market insights</p>
        </motion.div>
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={item}
              className="flex flex-col h-full"
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="line-clamp-1">{video.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {video.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


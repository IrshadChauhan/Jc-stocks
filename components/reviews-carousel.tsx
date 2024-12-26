'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ReviewCard } from "./review-card"

const reviews = [
  {
    name: "Nirmal Adhiya",
    profession: "Banking, Part time trader",
    review: `Firstly thanks alot sir for sharpening the concept of demand supply on which i am working with.

I have a prior knowledge of demand supply theory but somehow not working well with it, so i joined mentorship program of your's because you are senior to me in this theory....after joining i have improving myself with reserch and confidence.

Mentorship join karne se psychology improve ho rahi he and aapka stock TDA(top down approch) is on another level...and sir aapne jo community group banaya he usme aap new ideas implement kar rahe ho wo bhi bahot badhiya he jisse price actions samjna bahot easy ho raha he.

One of the best line i heard in last live session " ANY PROFIT IS BETTER THAN A LOSS" so always follow the rules.

One of the best decision i have ever made to join your mentorship and select demand supply as my base theory of trading.

Salute to you and your hardwork.`,
  },
  {
    name: "Akash",
    profession: "Part time trader",
    review: `Hello…I have joined JC Mentorship and I would like to give my feedback…
We all know that learning something is easy but how to practice it is important.
After joining the mentorship program, the guidance given and the efforts that have been guided in the mentorship have made learning like a beginner feel like a journey has begun.
I don't have the words to explain in simple words…`,
  },
    {
    name: "Shrimant Jangra Sir",
    profession: "Part time trader",
    review: `I can very proudly say I’ve made best  decision to join your mentorship programme where i get my every doubt cleared regarding trading and psychology.
As we all know trading is 90% mindset game and you are master in it and I am very lucky to learn that mindgame  from you .🤗

Your passion for the trading truly shines through, making every session engaging and insightful. Thank you for creating such a positive learning environment.♥️


Lasssttttt thing ………
Big fan of your TDA ♥️♥️♥️♥️`,
  },
]

export function ReviewsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        // autoPlay: true,
        // interval: 500,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-full lg:basis-full">
            <div className="p-1">
              <ReviewCard {...review} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


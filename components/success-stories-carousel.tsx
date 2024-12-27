'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

const successStories = [
  {
    id: 1,
    imageUrl: "/1.jpeg?height=300&width=600",
    alt: "Success Story 1"
  },
  {
    id: 2,
    imageUrl: "/2.jpeg?height=300&width=600",
    alt: "Success Story 2"
  },
  {
    id: 3,
    imageUrl: "/3.jpeg?height=300&width=600",
    alt: "Success Story 3"
  },
  {
    id: 4,
    imageUrl: "/4.jpeg?height=300&width=600",
    alt: "Success Story 4"
  }
]

export function SuccessStoriesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        // autolay: true,
        // interval: 3000,
      }}
      className="w-full"
    >
      <CarouselContent>
        {successStories.map((story) => (
          <CarouselItem key={story.id}>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
            <Link href='https://www.youtube.com/playlist?list=PLPrx47molqZBWmqwCqRlFJRZ2lCAdYTVE' target="_blank">

              <Image
                src={story.imageUrl}
                alt={story.alt}
                fill
                className="object-cover"
                priority
              />
              </Link>


            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}


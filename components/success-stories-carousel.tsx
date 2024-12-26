'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const successStories = [
  {
    id: 1,
    imageUrl: "/1.jpeg?height=300&width=600",
    alt: "Success Story 1"
  },
  {
    id: 2,
    imageUrl: "/1.jpeg?height=300&width=600",
    alt: "Success Story 2"
  },
  {
    id: 3,
    imageUrl: "/1.jpeg?height=300&width=600",
    alt: "Success Story 3"
  }
]

export function SuccessStoriesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        autoPlay: true,
        interval: 3000,
      }}
      className="w-full"
    >
      <CarouselContent>
        {successStories.map((story) => (
          <CarouselItem key={story.id}>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
              <Image
                src={story.imageUrl}
                alt={story.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}


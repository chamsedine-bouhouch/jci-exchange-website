"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function SousseCarousel() {
  const images = [
    { src: "/sousse-medina-shopping-1.webp", alt: "Sousse Medina and coastline" },
    { src: "/souuse-marine.jpg", alt: "Sousse Marine" },
    { src: "/sousse-kantaoui.webp", alt: "Sousse Kantaoui" },
  ]

  return (
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {images.map((img, index) => (
          <CarouselItem key={index}>
            <Image
              src={`${img.src}?height=400&width=600`}
              alt={img.alt}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

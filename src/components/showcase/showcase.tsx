import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const images = [
  {id:1, src: './posters/COVIDPOSTER.png', title: "image1"},
  {id:2, src: './posters/MOVIE(A1 SIZE).png', title: "image2"},
  {id:3, src: './posters/PAGTALIMAv2.png', title: "image3"},
  {id:4, src: './posters/PAKIKIBAHAGI.jpg', title: "image4"},
  {id:5, src: './posters/STARWARSEMI.png', title: "image5"},
  {id:6, src: './posters/Tanging Bigkis7.jpg', title: "image6"}
]

export function Showcase() {
  return (
    <Carousel className="lg:w-4xl md:w-2xl sm:w-xl xs:w-lg xxs:w-2xs w-[20rem] text-end">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="lg:basis-1/3 md:basis-2/5 sm:basis-3/6 xs:basis-5/6">
            <div className="p-1">
              <Card className="border-[#397c34] border-[.25rem]">
                <CardContent className="flex items-center justify-center ">
                  <img src={image.src} className="text-4xl font-semibold rounded-md aspect-9/16"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-[#397c34] border-[.25rem] mx-1" />
      <CarouselNext className="border-[#397c34] border-[.25rem] mx-1"/>
    </Carousel>
  )
}

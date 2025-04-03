import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";
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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <img src={image.src} className="text-4xl font-semibold rounded-md"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

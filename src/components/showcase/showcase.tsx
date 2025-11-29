import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Project } from "../../lib/constants/content.constants";

interface ShowcaseProp {
  className?: string
  carouselSyle: string
  projects: Project[]
}

export const Showcase: React.FC<ShowcaseProp> = ({className, projects, carouselSyle}) => {
  return (
    <div className={`${className}`}>
      <Carousel className={`${carouselSyle}`}>
        <CarouselContent className="">
          {projects.map((image, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card className="border-[#404040]">
                  <CardContent className="flex items-center justify-center ">
                    <img src={image.src} className="text-4xl font-semibold rounded-md aspect-9/16"/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="m-1 flex justify-end gap-1">
          <CarouselPrevious/>
          <CarouselNext/>
        </div>
      </Carousel>
    </div>
  )
}

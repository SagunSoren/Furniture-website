import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Card2 from "./Card2"

const Testimonials = () => {
  return (
    <div className=" px-20">
        <div className="text-center mb-6">
            <p className="text-primary">TESTIMONIALS</p>
            <h1>Our Client Reviews</h1>
        </div>

    <div className="flex items-center justify-center">
          <Carousel className="w-[280px] sm:w-[360px] xl:w-full">
  <CarouselContent className="">
    <CarouselItem className="xl:basis-1/3"><Card2 name="Liam Carter" profileimage="/images/profile.png" image="/images/card1bg.png" title="Cozy Sofa" review="“Beautiful sofa, exactly as pictured! Super comfy and delivery was smooth. Very happy with my purchase.”"/></CarouselItem>
    <CarouselItem className="xl:basis-1/3"><Card2 name="Maya Collins" profileimage="/images/profile2.png" image="/images/card2bg.png" title="Sturdy Dining Table" review="“Great quality dining table for the price. Easy to assemble and feels sturdy. Highly recommend!”"/></CarouselItem>
    <CarouselItem className="xl:basis-1/3"><Card2 name="Ethan Brooks" profileimage="/images/profile3.png" image="/images/card3bg.png" title="Stylish Accent Chair" review="“The accent chair arrived quickly and looks amazing in my living room. Excellent service overall.”"/></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
        </div>



        
        
        
    </div>
  )
}
export default Testimonials
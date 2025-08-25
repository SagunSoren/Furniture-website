import Navbar from "./Navbar"
import { IoSearchCircleSharp } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen w-full">
        <div class="relative bg-[url('/images/hero.png')] bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px] lg:h-full w-full">



            
        <Navbar/>
        <div className="mx-auto text-center text-white flex flex-col  gap-4 md:gap-8 items-center">
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl text-3xl md:leading-14 font-bold tracking-wide sm:mt-10">Make Your Interior More <br /> Minimilistic & Modern</h1>
            <p className="text-sm font-light px-20 sm:text-md md:text-xl">Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</p>
            <div className="inline-flex justify-center items-center border-1 pl-2 rounded-full backdrop-blur-2xl bg-white/20">
                <input type="text" placeholder="Search furniture" className="outline-none" />
                <IoSearchCircleSharp className="text-4xl text-primary"/>
            </div>
        </div>
        </div>
        
    </div>
  )
}
export default Hero
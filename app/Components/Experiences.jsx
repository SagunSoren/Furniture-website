const Experiences = () => {
  return (
    <div className="flex md:flex-row flex-col py-20 max-sm:px-10 px-20 items-center">
        <div className="md:w-1/2 p-2 lg:p-20">
            <img src="/images/sofa.png" alt="" />
        </div>
        <div className="md:w-1/2 md:p-2 lg:p-20 flex flex-col lg:gap-6 max-md:gap-2 mt-4">
            <p className="text-primary">EXPERIENCES</p>
            <h1 className="text-3xl font-bold">We Provide You The <br /> Best Experience</h1>
            <p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <div className="flex items-center gap-2">
                <p className="text-primary">More Info</p>
                <img src="/images/arrow.png" className="h-3" alt="" />
                
            </div>
        </div>
    </div>
  )
}
export default Experiences
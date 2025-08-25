const Card2 = (props) => {
  return (

        <div className="relative rounded-2xl overflow-hidden shadow-lg w-90 max-sm:w-70 max-md:w-80">
            <img src={props.image} alt="" className="object-cover w-full" />
                <div className="absolute left-1/2  bottom-1/2 transform -translate-x-1/2 translate-y-1/4 z-10">
                    <img src={props.profileimage} alt="" className="w-16 h-16 border-6 border-white shadow-lg bg-white rounded-full" />
                </div>

            <div className="absolute text-black bottom-0 left-0 bg-white m-4 h-1/2 rounded-3xl">
                
                
                <div className="text-center m-4 mt-10 rounded-3xl">
                    
                    <h1 className="font-bold">{props.name}</h1>
                    <p>{props.title}</p>
                    <p className="sm:mt-6 text-sm">{props.review}</p>
                    <p className="text-primary mt-4 max-sm:hidden">★★★★★</p>
                </div>
            </div>

            </div>
    
  )
}
export default Card2
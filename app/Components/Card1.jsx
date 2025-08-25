import { IoIosAddCircle } from "react-icons/io";
const Card1 = (props) => {
  return (
    <div className=" w-[200px] ">
        <img src={props.image} alt="" />
        <div className="bg-white p-2 rounded-b-3xl">
        <p>Chair</p>
        <h2 className="font-semibold">{props.name}</h2>
        <p className="text-primary mt-4">★★★★★</p>
        <div className="flex items-center justify-between">
            <p className="font-semibold">$ 392</p>
            <IoIosAddCircle className="text-4xl" />
            
        </div>
        </div>
        
    </div>
  )
}
export default Card1
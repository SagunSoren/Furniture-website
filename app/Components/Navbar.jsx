import { PiShoppingCartFill } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="flex items-center py-5 px-10 md:px-20 lg:px-40 lg:py-10 justify-between text-white">
        <h1 className="font-bold">Panto</h1>
        <ul className="flex items-center justify-between gap-8 max-sm:hidden">
            <li><a href="">Furniture</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">AboutUs</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <PiShoppingCartFill className="max-sm:hidden" />
        <CiMenuFries className="sm:hidden"/>
    </div>
  )
}
export default Navbar
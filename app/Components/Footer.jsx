import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" flex flex-row max-sm:flex-col gap-10 py-16 mt-10 bg-ter max-sm:px-2 sm:px-16 md:px-20 lg:px-40 overflow-x-hidden">
        <div className="max-w-[400px]">
            <h1 className="text-2xl font-semibold">Panto</h1>
            <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        </div>


        <div className="flex w-full justify-around gap-10">
            <ul className="flex flex-col gap-2">
            <li className="text-primary">Services</li>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li> 
        </ul>
        <ul className="flex flex-col gap-2">
            <li className="text-primary">Furniture</li>
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li> 
        </ul>
        <ul className="flex flex-col gap-2">
            <li className="text-primary">Follow Us</li>
            <li className="flex items-center gap-1"> <FaFacebookF />Facebook</li>
            <li className="flex items-center gap-1"><FaTwitter />Twitter</li>
            <li className="flex items-center gap-1"><FaInstagram />Instagram</li> 
        </ul>
        </div>

        {/* <div className="flex justify-between">
            <p>Copyright © 2021</p>
            <div className="flex gap-10 max-md:gap-4">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div> */}
        
    </div>
  )
}
export default Footer
import { RxHamburgerMenu } from "react-icons/rx"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 md:px-3 lg:px-12">
            <div className="flex space-x-8">
                <img src='https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg' />
                <ul className="hidden md:flex space-x-8 text-gray-500 font-medium ">
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Solutions</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Plans & Pricing</a></li>
                </ul>
            </div>
            <div className="hidden md:flex space-x-8 text-sm">
                <button className="px-4 border-2 text-sky-600 border-sky-500 rounded-full
                                    hover:bg-sky-500 hover:text-white">Contact Sales</button>
                <button className="py-1  px-3 border-2 text-blue-800 border-[#0C5CFF] rounded-full
                                    hover:bg-[#0C5CFF] hover:text-white">Sign Up Free</button>
            </div>
            <div className="flex space-x-6 items-center md:hidden">
                <a className="font-lato font-bold text-lg text-blue-800">Join</a>
                <a className="font-lato font-bold text-lg text-blue-800">Host</a>
                <RxHamburgerMenu size={"1.5rem"} color="#31ACFF" />
            </div>
        </nav>
    )
}
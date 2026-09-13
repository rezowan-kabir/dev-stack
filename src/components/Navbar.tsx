import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="md:hidden">
            <FiMenu size={25} className="text-gray-700 cursor-pointer" />
          </div>
          <div className="flex-1 text-center md:flex-initial md:text-left">
            <a href="/" className="inline-block"> <img src={Logo} alt="Logo" className="h-8 w-auto" /> </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="" className="text-pink-500 font-semibold"> Home</a>
            <a href="" className="text-gray-600 hover:text-pink-500"> Technologies </a>
            <a href="" className="text-gray-600 hover:text-pink-500"> Projects </a>
            <a href="" className="text-gray-600 hover:text-pink-500"> About </a>
            <a href="" className="text-gray-600 hover:text-pink-500"> Contact </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="" className="px-3 py-2 text-gray-700 font-semibold text-sm sm:text-base"> Sign In </a>
            <a href="" className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-full text-sm sm:text-base shadow-sm" >Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

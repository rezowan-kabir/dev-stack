import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a>
              <img src={Logo} className="h-7 sm:h-9 w-auto object-contain" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a className="text-pink-500 font-semibold">Home</a>
            <a className="hover:text-slate-900 ">Technologies</a>
            <a className="hover:text-slate-900 ">Projects</a>
            <a className="hover:text-slate-900 ">About</a>
            <a className="hover:text-slate-900 ">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="btn btn-ghost btn-sm text-sm font-semibold text-slate-700 hover:text-slate-900">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white brand-gradient px-6 py-2.5 rounded-full shadow-md hover:opacity-95">
              Sign Up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <div className="p-2 text-slate-800">
              <FiMenu size={25} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

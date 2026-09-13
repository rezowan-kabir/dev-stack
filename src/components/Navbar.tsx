import { FiMenu } from 'react-icons/fi';
import Logo from '../assets/logo-text.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <div className="flex items-center">
            <a href=""><img src={Logo} alt="" 
                className="h-7 sm:h-9 w-auto object-contain"/>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="" className="text-pink-500 font-semibold">Home</a>
            <a href="" className="hover:text-slate-900 transition">Technologies</a>
            <a href="" className="hover:text-slate-900 transition">Projects</a>
            <a href="" className="hover:text-slate-900 transition">About</a>
            <a href="" className="hover:text-slate-900 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2">Sign In</button>
            <button className="text-sm font-semibold text-white brand-gradient px-6 py-2.5 rounded-full shadow-md hover:opacity-95 transition">Sign Up</button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-800 p-2 focus:outline-none">
              <FiMenu size={25} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
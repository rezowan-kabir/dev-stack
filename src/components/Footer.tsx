import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import logoImg from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="text-center md:text-left">
            <a href=""><img src={logoImg} alt="" className="h-8 mx-auto md:mx-0"/></a>
            <p className="text-gray-600 text-sm mt-4 max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <a href="" className="text-gray-600 hover:text-pink-500"><FaGithub size={20} /></a>
              <a href="" className="text-gray-600 hover:text-pink-500"><FaTwitter size={20} /></a>
              <a href="" className="text-gray-600 hover:text-pink-500"><FaLinkedin size={20} /></a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Product</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="" className="hover:text-pink-500"> Home </a></li>
                <li><a href="" className="hover:text-pink-500">Technologies </a></li>
                <li> <a href="" className="hover:text-pink-500"> Projects</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="" className="hover:text-pink-500"> About </a></li>
                <li><a href="" className="hover:text-pink-500"> Contact</a> </li>
                <li><a href="" className="hover:text-pink-500"> Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="" className="hover:text-pink-500">Privacy Policy </a></li>
                <li><a href="" className="hover:text-pink-500">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="" className="hover:text-gray-600"> Privacy</a>
            <a href="" className="hover:text-gray-600"> Terms </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

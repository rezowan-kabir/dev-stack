import logoImg from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="pt-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-90">
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="flex justify-center lg:justify-start">
              <img src={logoImg} className="h-8 w-auto " />
            </div>

            <p className="text-slate-600 text-sm  mx-auto lg:mx-0 ">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-700 font-medium pt-1">
              <a href="" className="hover:text-pink-600 transition">
                GitHub
              </a>
              <span className="hidden sm:inline text-slate-300">.</span>
              <a href="" className="hover:text-pink-600 transition">
                Twitter
              </a>
              <span className="hidden sm:inline text-slate-300">.</span>
              <a href="" className="hover:text-pink-600 transition">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-12 text-sm">
            <div>
              <h4 className="font-bold text-slate-900  mb-4">PRODUCT</h4>
              <ul className="space-y-2.5 text-slate-500">
                <li>
                  <a className="hover:text-slate-900 ">Home</a>
                </li>
                <li>
                  <a className="hover:text-slate-900 ">Technologies</a>
                </li>
                <li>
                  <a className="hover:text-slate-900 ">Projects</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900  mb-4">COMPANY</h4>
              <ul className="space-y-2.5 text-slate-500">
                <li>
                  <a className="hover:text-slate-900">About</a>
                </li>
                <li>
                  <a className="hover:text-slate-900">Contact</a>
                </li>
                <li>
                  <a className="hover:text-slate-900">Careers</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900  mb-4">LEGAL</h4>
              <ul className="space-y-2.5 text-slate-500">
                <li>
                  <a className="hover:text-slate-900 ">Privacy Policy</a>
                </li>
                <li>
                  <a className="hover:text-slate-900 ">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a className="hover:text-slate-600 ">Privacy</a>
            <a className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import heroImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5 leading-tight">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="brand-gradient bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a className="text-xs sm:text-sm font-semibold text-white brand-gradient px-6 py-3 rounded-lg shadow-md hover:opacity-95 transition-all">
                Explore Technologies
              </a>
              <button className="btn btn-outline border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 bg-white px-6 py-3 rounded-lg hover:bg-slate-50 ">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-xl">
            <img src={heroImg} className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}

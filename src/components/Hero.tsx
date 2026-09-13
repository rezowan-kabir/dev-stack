import heroImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home" className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-5">
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

            <div className="flex items-center justify-center lg:justify-start gap-5">
              <a className="text-xs sm:text-sm font-semibold text-white brand-gradient px-6 py-3 rounded-lg ">
                Explore Technologies
              </a>
              <button className="text-xs sm:text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-6 py-3 rounded-lg hover:bg-slate-50 ">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full max-w-md lg:max-w-xl">
            <img src={heroImg} className="w-full h-auto " />
          </div>
        </div>
      </div>
    </section>
  );
}

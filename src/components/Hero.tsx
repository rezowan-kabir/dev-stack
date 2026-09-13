import heroImg from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section id="home"className="bg-white pt-[31px] pb-0 md:pt-[96px] md:pb-[112px]">      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Build Your Ideal <br /><span className=" text-brand-gradient ">Development Stack</span>
            </h1>
            <p className="text-gray-600 mt-4 max-w-lg">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
              </p>

            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <a href="" className="brand-gradient text-white px-5 py-3 rounded-lg"> Explore Technologies</a>
              <a href=""className="border border-gray-300 text-gray-700 px-5 py-3 rounded-lg">{" "}Learn More{" "} </a>
            </div>
          </div>
          <div>
            <img src={heroImg} alt="" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

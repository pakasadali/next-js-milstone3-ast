

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#c6c6c6] to-[#ffffff] font-[sans-serif]">
      <div className="relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              Welcome to
              <br className="xl:hidden" />
              <span className="text-orange-400"> BLOGGING WEBSITE</span>
            </h1>
            <p className="max-w-md mx-auto text-lg text-white sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
              Blogging website, the site where you get your favourite blogs. Read about new Technologies in the filed of science ...
            </p>
            <div className="mt-12 flex max-sm:flex-col sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out">
                  Get Started
                </button>
              </div>
              <div>
                <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-orange-400 hover:bg-orange-300 transition duration-150 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="./blog.jpg"
            alt="Books"
          />
        </div>
      </div>
    </div>

  );
}

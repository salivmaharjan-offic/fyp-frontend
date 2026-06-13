const Hero = () => {
  return (
    <div className="bg-zinc-950">
      <div className="max-w-7xl mx-auto py-22">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            <span className="text-primary">MN</span> HARDWARES
          </h1>
          <h2 className="text-white max-w-2xl text-center">
            Providing quality hardware solutions and building materials to
            support every project, from small repairs to large-scale
            construction.
          </h2>
          <div className="flex gap-12">
            <button className="bg-zinc-50 px-12 py-2 font-semibold rounded cursor-pointer">
              Shop now
            </button>
            <button className="border border-zinc-50 text-zinc-50 px-12 py-2 font-semibold rounded cursor-pointer">
              Explore colors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

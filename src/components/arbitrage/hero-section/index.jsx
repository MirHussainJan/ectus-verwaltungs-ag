const ArbitrageHeroSection = () => {
  return (
    <div
      className={`flex flex-col gap-8 md:gap-12 justify-center items-center min-h-[385px] text-white hero-image px-8`}
    >
      <h1 className="text-3xl md:text-6xl text-center font-light">Arbitrage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="bg-[#5f1718] text-white rounded-lg p-[5px_20px] h-[42px]">
          Call us
        </button>
        <button className="bg-white rounded-lg p-[5px_20px] text-black h-[42px]">
          Make an appointment
        </button>
      </div>
    </div>
  );
};

export default ArbitrageHeroSection;

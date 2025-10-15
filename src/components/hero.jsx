export default function Hero({ imageUrl }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${imageUrl}')`, // required Source URL from the user
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/25" />
      <div className="relative max-w-5xl mx-auto pt-24">
        <div className="text-white space-y-6 md:space-y-24">
          <h1 className="text-3xl font-light md:text-5xl lg:text-6xl w-[90%] leading-relaxed text-balance">
            Gemeinsam finanzielle Träume verwirklichen mit Der Ectus Verwaltungs
            AG
          </h1>
          <a className="px-6 py-4 rounded-lg bg-[#5f1718] font-bold">
            Konsultation buchen
          </a>
        </div>
      </div>
    </section>
  );
}

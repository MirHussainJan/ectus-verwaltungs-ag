export default function Hero({ imageUrl }) {
  return (
    <section
      className="relative h-[60vh] md:h-[72vh] lg:h-[80vh] flex items-center"
      style={{
        backgroundImage: `url('${imageUrl}')`, // required Source URL from the user
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl text-white space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            Gemeinsam finanzielle Träume verwirklichen mit
            <br className="hidden md:block" />
            <span className="block mt-2 md:mt-3">Der Ectus Verwaltungs AG</span>
          </h1>
          <p className="text-white/90 max-w-2xl">
            Strukturierte Beratung, klare Strategien und verlässliche Begleitung – maßgeschneidert für Ihre Ziele.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a className="px-5 py-3 rounded-md bg-primary text-primary-foreground inline-block text-center hover:opacity-90 transition">
              Individuelle Lösungen
            </a>
            <a className="px-5 py-3 rounded-md bg-white/10 backdrop-blur border border-white/20 inline-block text-center hover:bg-white/15 transition">
              Kostenlose Erstberatung
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

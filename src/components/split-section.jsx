export default function SplitSection({
  kicker,
  title,
  copy,
  image,
  imageAlt,
  imageLeft = false,
}) {
  return (
    <section
      id="UNSERE_GESCHICHTE"
      className="w-full bg-gray-50 py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-24"
    >
      <div
        className={`max-w-5xl mx-auto flex flex-col ${
          imageLeft ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-10 md:gap-16`}
      >
        {/* Text Section */}
        <div className="flex-1">
          <p className="uppercase font-bold text-base text-muted-foreground">
            {kicker}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 text-balance">
            {title}
          </h2>
          <div className="text-base md:text-lg leading-relaxed font-light space-y-4">
            {copy}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={image}
            alt={imageAlt}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

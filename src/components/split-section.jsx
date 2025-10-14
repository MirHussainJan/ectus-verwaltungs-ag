export default function SplitSection({ kicker, title, copy, image, imageAlt, imageLeft = false }) {
  return (
    <div
      className={`grid gap-8 md:gap-12 items-center ${imageLeft ? "md:grid-cols-[1fr_1.1fr]" : "md:grid-cols-[1.1fr_1fr]"}`}
    >
      {imageLeft && (
        <div className="order-none md:order-none">
          <img
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-64 md:h-[28rem] object-cover rounded-lg border border-border"
          />
        </div>
      )}

      <div className={`${imageLeft ? "order-last md:order-none" : ""}`}>
        <p className="uppercase tracking-widest text-sm text-muted-foreground">{kicker}</p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-2 mb-4 text-pretty">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{copy}</p>
      </div>

      {!imageLeft && (
        <div>
          <img
            src={image || "/placeholder.svg"}
            alt={imageAlt}
            className="w-full h-64 md:h-[28rem] object-cover rounded-lg border border-border"
          />
        </div>
      )}
    </div>
  )
}

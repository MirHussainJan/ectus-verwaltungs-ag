function Quote({ author, children }) {
  return (
    <div className="text-center max-w-xl mx-auto">
      <svg
        className="mx-auto mb-4 text-primary"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8v-8H6.83A3.17 3.17 0 0 1 10 10.83V6H7.17Zm9 0A5.17 5.17 0 0 0 11 11.17V22h8v-8h-3.17A3.17 3.17 0 0 1 19 10.83V6h-2.83Z" />
      </svg>
      <p className="text-lg leading-relaxed text-pretty">{children}</p>
      <p className="mt-4 font-medium">{author}</p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="grid gap-10 md:gap-12 md:grid-cols-3">
      <Quote author="Claudia R.">
        „Die Beratung war klar, ehrlich und extrem hilfreich. Endlich habe ich einen Plan, der zu mir passt.“
      </Quote>
      <Quote author="Daniel K.">„Transparente Kosten, starke Ergebnisse – ich fühle mich bestens aufgehoben.“</Quote>
      <Quote author="Mara S.">„Regelmäßige Updates und verständliche Analysen. Genau das habe ich gesucht.“</Quote>
    </div>
  )
}

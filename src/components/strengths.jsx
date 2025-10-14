function Item({ title, children, icon }) {
  return (
    <div className="rounded-lg border border-border p-6 bg-card">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground">{children}</p>
    </div>
  )
}

export default function Strengths() {
  const icon = (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M4 12l6 6L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Item title="Erfahrene Expertise" icon={icon}>
        Jahrzehntelange Erfahrung und verlässliche Marktkenntnis für fundierte Entscheidungen.
      </Item>
      <Item title="Individuelle Strategie" icon={icon}>
        Lösungen, die sich präzise an Ihren Zielen und Ihrer Lebenssituation orientieren.
      </Item>
      <Item title="Transparente Prozesse" icon={icon}>
        Klare Kommunikation, nachvollziehbare Kosten und regelmäßige Reports.
      </Item>
      <Item title="Messbare Ergebnisse" icon={icon}>
        Zielorientierte KPIs und strukturierte Reviews in festen Intervallen.
      </Item>
    </div>
  )
}

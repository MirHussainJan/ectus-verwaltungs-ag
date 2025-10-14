function Card({ icon, title, children }) {
  return (
    <div className="rounded-lg border border-border p-6 bg-card">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{children}</p>
    </div>
  )
}

export default function FeatureCards() {
  const iconClass = "w-5 h-5"
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        icon={
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 12h16M4 6h16M4 18h10" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        title="Anlageberatung"
      >
        Individuelle Portfolios mit Fokus auf Risiko, Rendite und Nachhaltigkeit.
      </Card>
      <Card
        icon={
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 3v18M3 12h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        title="Vermögensplanung"
      >
        Ganzheitliche Strategien für Vermögensaufbau, Absicherung und Liquidität.
      </Card>
      <Card
        icon={
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M4 12l6 6L20 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }
        title="Steueroptimierung"
      >
        Effiziente Konzepte zur Reduktion der Steuerlast mit klarer Umsetzung.
      </Card>
      <Card
        icon={
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="9" strokeWidth="2" />
            <path d="M12 7v5l3 3" strokeWidth="2" strokeLinecap="round" />
          </svg>
        }
        title="Langfristige Begleitung"
      >
        Proaktive Betreuung und regelmäßige Reviews für nachhaltigen Erfolg.
      </Card>
    </div>
  )
}

function Award({ title, children }) {
  return (
    <div className="rounded-lg border border-border p-6 bg-card">
      <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8l3-6z" />
        </svg>
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground">{children}</p>
    </div>
  )
}

export default function Awards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Award title="Top Finanzberater 2024">Ausgezeichnet für Kundenzufriedenheit und Ergebnisse.</Award>
      <Award title="Zertifizierte Unabhängigkeit">Transparente Beratung ohne versteckte Interessen.</Award>
      <Award title="Exzellenter Service">Hervorragende Erreichbarkeit und persönliche Betreuung.</Award>
      <Award title="Datenschutz konform">Sichere Prozesse gemäß neuesten Standards.</Award>
    </div>
  )
}

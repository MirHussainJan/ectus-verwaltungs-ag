function Person({ name, role, img, children }) {
  return (
    <div className="rounded-lg border border-border bg-card">
      <img
        src={img || "/placeholder.svg"}
        alt={`${name} – ${role}`}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground mb-3">{role}</p>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Person name="Martin Huber" role="Leitender Berater" img="/portrait-professional-man.jpg">
        Spezialist für Vermögensplanung und langfristige Strategien.
      </Person>
      <Person name="Jonas Wagner" role="Investment-Analyst" img="/portrait-analyst-man.jpg">
        Analytik, Research und Portfolio-Monitoring mit klaren KPIs.
      </Person>
      <Person name="Sophie Keller" role="Kundenbetreuung" img="/professional-woman-portrait.png">
        Verbindliche Betreuung, transparente Kommunikation und Service.
      </Person>
      <Person name="Laura Brandt" role="Steuerexpertin" img="/portrait-tax-expert-woman.jpg">
        Smarte Steuerkonzepte für effiziente Vermögensentwicklung.
      </Person>
    </div>
  )
}

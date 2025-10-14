export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 border-t border-border bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary/90 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-primary-foreground">
                  <path fill="currentColor" d="M4 20h4V8H4v12Zm6 0h4V4h-4v16Zm6 0h4v-8h-4v8Z" />
                </svg>
              </div>
              <span className="font-medium">Ectus Verwaltungs AG</span>
            </div>
            <p className="text-muted-foreground mt-4">Gemeinsam finanzielle Träume verwirklichen.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Leistungen</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li>Anlageberatung</li>
              <li>Vermögensplanung</li>
              <li>Steueroptimierung</li>
              <li>Risikomanagement</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Unternehmen</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li>Über uns</li>
              <li>Karriere</li>
              <li>Presse</li>
              <li>Kontakt</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Rechtliches</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li>Datenschutz</li>
              <li>Impressum</li>
              <li>AGB</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ectus Verwaltungs AG. Alle Rechte vorbehalten.</p>
          <p>Made with Klarheit und Verantwortung.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary/90 flex items-center justify-center">
            <span className="sr-only">Logo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" className="text-primary-foreground">
              <path fill="currentColor" d="M4 20h4V8H4v12Zm6 0h4V4h-4v16Zm6 0h4v-8h-4v8Z" />
            </svg>
          </div>
          <span className="font-medium">Ectus Verwaltungs AG</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-primary transition">Leistungen</a>
          <a className="hover:text-primary transition">Über uns</a>
          <a className="hover:text-primary transition">Referenzen</a>
          <a className="hover:text-primary transition">Blog</a>
          <a className="hover:text-primary transition">Kontakt</a>
        </nav>
        <div className="hidden md:block">
          <a className="inline-block px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
            Beratung anfragen
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-border"
          aria-label="Menü öffnen"
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default function Contact() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-lg border border-border p-6 bg-card">
        <h4 className="font-semibold mb-2">Informationen zu uns</h4>
        <p className="text-muted-foreground">
          Ectus Verwaltungs AG
          <br />
          Musterstraße 12, 8000 Zürich
        </p>
        <div className="mt-4 space-y-1 text-muted-foreground">
          <p>+41 44 000 00 00</p>
          <p>kontakt@ectus-verwaltungs-ag.de</p>
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a
            aria-label="Facebook"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border hover:bg-muted transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 22v-9h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v2H6v4h3v9h4Z" />
            </svg>
          </a>
          <a
            aria-label="X"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border hover:bg-muted transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h3l5 7 5-7h3l-7 10 7 8h-3l-6-8-6 8H3l7-10L3 3z" />
            </svg>
          </a>
          <a
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border hover:bg-muted transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 8h2v13H3V8Zm5 0h2v2h.03c.28-.53 1.03-1.09 2.12-1.09C15.35 8.91 17 10 17 12.83V21h-2v-7.06c0-1.68-.6-2.83-2.1-2.83-1.14 0-1.81.77-2.1 1.51-.11.26-.13.62-.13.98V21H8V8Z" />
            </svg>
          </a>
        </div>
      </div>

      <form className="rounded-lg border border-border p-6 bg-card">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="first" className="text-sm">
              Vorname
            </label>
            <input id="first" className="h-11 rounded-md border border-input px-3 bg-background" placeholder="Max" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="last" className="text-sm">
              Nachname
            </label>
            <input
              id="last"
              className="h-11 rounded-md border border-input px-3 bg-background"
              placeholder="Mustermann"
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="email" className="text-sm">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="h-11 rounded-md border border-input px-3 bg-background"
              placeholder="name@mail.de"
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="msg" className="text-sm">
              Nachricht
            </label>
            <textarea
              id="msg"
              rows={5}
              className="rounded-md border border-input px-3 py-2 bg-background"
              placeholder="Wie können wir helfen?"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <input type="checkbox" className="size-4 border border-input" />
            Ich stimme der Verarbeitung zu.
          </label>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="p-6 bg-card h-[90%] self-center flex flex-col justify-between col-span-1">
        <h4 className="font-light text-2xl mb-2">Informationen zum Büro</h4>
        <p className="text-muted-foreground text-lg font-light">
          Neue Straße 12A
          <br />
          06901 Kemberg
          <br />
          Germany
        </p>
        <div className="mt-4 space-y-8 text-muted-foreground text-lg font-light">
          <p>+49 32 221807849</p>
          <p>info@ectus-verwaltungs-ag.de</p>
        </div>
        <div className="mt-6 flex items-center gap-6">
          <svg viewBox="0 0 45 45" style={{ width: "32px", height: "32px" }}>
            <g fill="none">
              <path
                fill="#1877f2"
                d="M44.506 22.23C44.506 9.951 34.543 0 22.253 0 9.963 0 0 9.952 0 22.23c0 11.094 8.138 20.29 18.776 21.958V28.655h-5.65V22.23h5.65v-4.897c0-5.571 3.322-8.649 8.405-8.649 2.435 0 4.981.435 4.981.435v5.47h-2.806c-2.764 0-3.626 1.714-3.626 3.472v4.17h6.172l-.987 6.425H25.73V44.19c10.638-1.668 18.776-10.864 18.776-21.96"
              ></path>
              <path
                fill="#ffffff"
                d="M30.915 28.655l.987-6.426H25.73v-4.17c0-1.757.862-3.47 3.626-3.47h2.806V9.117s-2.546-.435-4.98-.435c-5.084 0-8.406 3.078-8.406 8.649v4.897h-5.65v6.426h5.65V44.19a22.443 22.443 0 006.954 0V28.655h5.185"
              ></path>
            </g>
          </svg>

          <svg viewBox="0 0 48 39" style={{ width: "32px", height: "32px" }}>
            <path
              d="M33.7969 0H40.3773L26.0012 16.431L42.9135 38.7899H29.6713L19.2995 25.2293L7.43174 38.7899H0.84741L16.2241 21.2151L0 0H13.5784L22.9537 12.3949L33.7969 0ZM31.4874 34.8512H35.1337L11.5972 3.73179H7.68437L31.4874 34.8512Z"
              fill="#1DA1F2"
            ></path>
          </svg>

          <svg viewBox="0 0 43 43" style={{ width: "32px", height: "32px" }}>
            <g fill="none" fillRule="evenodd">
              <path
                fill="#2867b2"
                d="M39.34 0H3.132C1.405 0 0 1.371 0 3.063v36.354c0 1.692 1.405 3.066 3.133 3.066H39.34c1.732 0 3.143-1.374 3.143-3.066V3.063C42.483 1.371 41.073 0 39.34 0"
              ></path>
              <path
                fill="#ffffff"
                d="M9.45 5.849a3.654 3.654 0 11-.005 7.308A3.654 3.654 0 019.45 5.85zm-3.155 30.35h6.307V15.927H6.295V36.2zm10.26-20.273h6.04v2.772h.086c.84-1.594 2.896-3.275 5.961-3.275 6.38 0 7.56 4.198 7.56 9.658V36.2H29.9v-9.86c0-2.351-.04-5.376-3.274-5.376-3.279 0-3.78 2.563-3.78 5.208V36.2h-6.292V15.926"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <form className="bg-white p-10 bg-card col-span-2">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="name" className="text-sm">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="border border-input border-gray-500 px-3 h-8 bg-background"
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="email" className="text-sm">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="border border-input border-gray-500 px-3 h-8 bg-background"
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="name" className="text-sm">
              Betreff
            </label>
            <input
              id="name"
              type="text"
              className="border border-input border-gray-500 px-3 h-8 bg-background"
            />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label htmlFor="msg" className="text-sm">
              Nachricht
            </label>
            <textarea
              id="msg"
              rows={5}
              className="border border-input border-gray-500 px-3 py-2 bg-background"
              placeholder="Wie können wir helfen?"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              className="size-4 border border-input border-gray-500"
            />
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
  );
}

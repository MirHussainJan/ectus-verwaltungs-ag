export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <img
          src="/Logo!.png"
          alt="Ectus Verwaltungs AG Logo"
          className="w-30 h-auto mb-2"
        />

        <div className="flex flex-col gap-3 mt-4">
          <button className="border border-gray-400 text-gray-600 px-6 py-2 font-bold rounded-lg text-lg hover:bg-gray-100 transition">
            Home
          </button>
          <button className="border border-gray-400 text-gray-600 px-6 py-2 font-bold rounded-lg text-lg hover:bg-gray-100 transition">
            Impressum
          </button>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-24 text-center">
          {/* Email */}
          <div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 29 29" style={{ width: "30px" }}>
                <path
                  fill="currentColor"
                  d="M5.135 5.37c-1.531 0-2.772 1.209-2.772 2.7v12.958c0 1.491 1.241 2.7 2.772 2.7h18.848c1.53 0 2.771-1.209 2.771-2.7V8.07c0-1.491-1.24-2.7-2.771-2.7H5.135zm0-1.62h18.848c2.449 0 4.434 1.934 4.434 4.32v12.958c0 2.386-1.985 4.32-4.434 4.32H5.135c-2.45 0-4.435-1.934-4.435-4.32V8.07c0-2.386 1.986-4.32 4.435-4.32z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23.998 7.48c.335.306.35.819.036 1.145l-5.898 6.103 5.88 5.728c.298.29.323.745.075 1.062l-.075.083a.847.847 0 01-1.176 0l-5.844-5.693-1.832 1.896a.847.847 0 01-1.21 0l-1.833-1.896L6.277 21.6a.847.847 0 01-1.176 0 .795.795 0 010-1.145l5.88-5.728-5.897-6.103a.795.795 0 01.035-1.145.847.847 0 011.176.035l8.264 8.552 8.264-8.552a.847.847 0 011.175-.035z"
                ></path>
              </svg>
              <span className="font-bold">E-Mail</span>
              <p className="text-gray-600 text-base">
                info@ectus-verwaltungs-ag.de
              </p>
            </div>
          </div>

          {/* Telefon */}
          <div>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 29 29" style={{ width: "30px" }}>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.7"
                  d="M6.364 3.81c1.496-1.503 5.032-2.139 6.907-2.108 1.88-.218 1.273 8.104.313 8.263 0 0-3.039.384-3.125 1.275-.116 1.217 3.009 8.67 4.22 8.84.65.091 2.606-1.402 2.606-1.402 1.521-1.145 4.678 2.2 6.161 3.596.649.627.617 1.159-.059 1.947-1.181 1.322-4.29 3.439-5.52 3.266-2.988-.42-8.05-4.592-10.483-9.582-2.743-5.629-2.712-12.82-1.02-14.095z"
                ></path>
              </svg>
              <span className="font-bold">Telefon</span>
              <p className="text-gray-600 text-base">+49 32 221807849</p>
            </div>
          </div>
        </div>

        {/* Right Section - Socials */}
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 48 48" style={{ width: "30px", height: "30px" }}>
            <path
              fill="#3c3c3c"
              d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24zm4.314-23.37l.572-3.741h-3.578V18.46c0-1.023.5-2.021 2.102-2.021h1.627v-3.186S27.561 13 26.149 13c-2.947 0-4.873 1.792-4.873 5.037v2.852H18v3.742h3.276v9.046a12.955 12.955 0 004.032 0v-9.046h3.006z"
            ></path>
          </svg>
          <svg viewBox="0 0 48 48" style={{ width: "30px", height: "30px" }}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM34.6407 13.9039H31.1138L25.3023 20.5471L20.2775 13.9039H13L21.6955 25.2744L13.4542 34.6938H16.9831L23.3438 27.4259L28.9027 34.6938H36L26.9356 22.7103L34.6407 13.9039ZM31.8303 32.5828H29.876L17.1185 15.904H19.2156L31.8303 32.5828Z"
              fill="#3C3C3C"
            ></path>
          </svg>
          <svg viewBox="0 0 48 48" style={{ width: "30px", height: "30px" }}>
            <path
              fill="#3c3c3c"
              d="M24 48C10.745 48 0 37.255 0 24S10.745 0 24 0s24 10.745 24 24-10.745 24-24 24zm-2.475-28.489v13.525h4.34v-6.528c0-1.721.345-3.388 2.606-3.388 2.227 0 2.258 1.969 2.258 3.5v6.416h4.342v-7.238c0-3.554-.813-6.287-5.21-6.287-2.113 0-3.532 1.094-4.111 2.132h-.06V19.51h-4.165zm-7.525 0v13.525h4.515V19.511H14zm4.515-3.757a2.256 2.256 0 00-2.257-2.254A2.256 2.256 0 0014 15.754a2.256 2.256 0 002.258 2.254 2.256 2.256 0 002.257-2.254z"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
}

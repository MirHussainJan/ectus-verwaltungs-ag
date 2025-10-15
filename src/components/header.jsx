export default function Header() {
  return (
    <header className="w-full fixed top-0 z-10 bg-white/70 border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo section */}
          <img
            src="/Logo!.png"
            alt="Ectus Verwaltungs AG Logo"
            className="w-35 h-auto"
          />

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-base font-semibold text-gray-800">
          <a href="#" className="hover:text-gray-900 transition">
            Services
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Über
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Warum sollten Sie uns wählen?
          </a>

          {/* Dropdown Menu */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <span className="hover:text-gray-900 transition">Mehr</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mt-[2px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded-md mt-2 shadow-md w-40">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-50">Karriere</li>
                <li className="px-4 py-2 hover:bg-gray-50">Presse</li>
                <li className="px-4 py-2 hover:bg-gray-50">Kontakt</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

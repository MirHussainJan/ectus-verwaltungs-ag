import { Link, useNavigate, useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  const isActive = (to) => {
    // to can be a path like '/ipo' or a hash like '#Karriere'
    if (!to) return false;
    if (to.startsWith('/')) return location.pathname === to;
    if (to.startsWith('#')) return location.pathname === '/' && location.hash === to;
    return false;
  };

  function handleAnchorClick(e, id) {
    e.preventDefault();
    const hash = `#${id}`;

    // If we're not on the landing page, navigate to it with the hash.
    if (location.pathname !== "/") {
      navigate(`/${hash}`);
      return;
    }

    // If we're already on the landing page, try to scroll to the element.
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: update location hash which RootLayout will handle.
      navigate(`${location.pathname}${hash}`);
    }
  }

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/70 backdrop-blur-sm'}`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4">
        {/* Logo section */}
        <Link to="/" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}>
          <img
            src="/Logo!.png"
            alt="Ectus Verwaltungs AG Logo"
            className="w-35 h-auto transition-transform hover:scale-105"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 text-base font-semibold text-gray-800">
            <a href="#Services" onClick={(e) => handleAnchorClick(e, "Services")} className="transition hover:text-[#5F1718]">
              Services
            </a>
            <a href="#UNSERE_GESCHICHTE" onClick={(e) => handleAnchorClick(e, "UNSERE_GESCHICHTE")} className="hover:text-[#5F1718] transition">
              Über
            </a>
            <a href="#WARUM" onClick={(e) => handleAnchorClick(e, "WARUM")} className="hover:text-[#5F1718] transition" >
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
              <div className="absolute hidden group-hover:block bg-white border border-gray-200  mt-0.5 shadow-md w-50">
                <ul className="text-sm">
                  <li className="hover:bg-[#5F1718] hover:text-white transition">
                    <Link
                      to="/#Karriere"
                      onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "Karriere"); }}
                      className="block px-4 py-2"
                    >
                      Karriere
                    </Link>
                  </li>
                  <li className="hover:bg-[#5F1718] hover:text-white transition">
                    <Link
                      to="/verm-gensverwaltung"
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2"
                    >
                      Vermögensverwaltung
                    </Link>
                  </li>
                  <li className="hover:bg-[#5F1718] hover:text-white transition">
                    <Link
                      to={'/ipo'}
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2"
                    >
                      IPO
                    </Link>
                  </li>
                  <li className="hover:bg-[#5F1718] hover:text-white transition">
                    <Link
                      to={'/arbitrage'}
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2"
                    >
                      Arbitrage
                    </Link>
                  </li>
                  <li className="hover:bg-[#5F1718] hover:text-white transition">
                    <Link
                      to={'/impressum'}
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2"
                    >
                      Impressum
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2.5 rounded-lg focus:outline-none hover:bg-gray-100 transition-all relative z-50"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile panel with overlay */}
        {mobileOpen && (
          <div 
            className="fixed inset-0 bg-black/50 md:hidden z-40 animate-fadeIn"
            onClick={() => setMobileOpen(false)}
          />
        )}
        
        <div className={`fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-gradient-to-br from-white to-gray-50 md:hidden z-40 transform transition-transform duration-300 ease-out shadow-2xl ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col px-6 py-20 overflow-y-auto">
            {/* Main Menu Items */}
            <ul className="space-y-1">
              <li>
                <a 
                  href="#Services" 
                  onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "Services"); }} 
                  className={`${isActive('#Services') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-800'} block py-3.5 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-semibold text-lg`}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#UNSERE_GESCHICHTE" 
                  onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "UNSERE_GESCHICHTE"); }} 
                  className={`${isActive('#UNSERE_GESCHICHTE') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-800'} block py-3.5 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-semibold text-lg`}
                >
                  Über
                </a>
              </li>
              <li>
                <a 
                  href="#WARUM" 
                  onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "WARUM"); }} 
                  className={`${isActive('#WARUM') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-800'} block py-3.5 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-semibold text-lg`}
                >
                  Warum sollten Sie uns wählen?
                </a>
              </li>
            </ul>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Submenu */}
            <div>
              <div className="text-gray-400 text-xs uppercase tracking-wider font-bold mb-4 px-4">Mehr</div>
              <ul className="space-y-1">
                <li>
                  <a 
                    href="#Karriere" 
                    onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "Karriere"); }} 
                    className={`${isActive('#Karriere') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-700'} block py-3 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-medium`}
                  >
                    Karriere
                  </a>
                </li>
                <li>
                  <Link 
                    to="/verm-gensverwaltung" 
                    onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} 
                    className={`${isActive('/verm-gensverwaltung') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-700'} block py-3 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-medium`}
                  >
                    Vermögensverwaltung
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ipo" 
                    onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} 
                    className={`${isActive('/ipo') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-700'} block py-3 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-medium`}
                  >
                    IPO
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/arbitrage" 
                    onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} 
                    className={`${isActive('/arbitrage') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-700'} block py-3 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-medium`}
                  >
                    Arbitrage
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/impressum" 
                    onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} 
                    className={`${isActive('/impressum') ? 'text-[#5F1718] bg-[#5F1718]/10' : 'text-gray-700'} block py-3 px-4 rounded-lg hover:bg-[#5F1718]/10 hover:text-[#5F1718] transition-all font-medium`}
                  >
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact CTA at bottom */}
            <div className="mt-auto pt-6">
              <div className="bg-[#5F1718] text-white rounded-xl p-6 text-center">
                <h4 className="font-bold text-lg mb-2">Bereit anzufangen?</h4>
                <p className="text-sm text-white/90 mb-4">Vereinbaren Sie noch heute eine Beratung</p>
                <a href="/#Karriere" className="inline-block bg-white text-[#5F1718] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                  Karriere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

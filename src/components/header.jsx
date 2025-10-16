import { Link, useNavigate, useLocation } from "react-router";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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
    <header className="w-full fixed top-0 z-10 bg-white/70 border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo section */}
          <img
            src="/Logo!.png"
            alt="Ectus Verwaltungs AG Logo"
            className="w-35 h-auto"
          />

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
                  <li className="px-4 py-2 hover:bg-[#5F1718] ">
                    <a
                      href="#Karriere"
                      onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "Karriere"); }}
                      className={`${isActive('#Karriere') ? 'text-[#5F1718]' : 'text-gray-800'}`}
                    >
                      Karriere
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#5F1718]">
                    <Link
                      to="/verm-gensverwaltung"
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className={`${isActive('/verm-gensverwaltung') ? 'text-[#5F1718]' : 'text-gray-700'}`}
                    >
                      Vermögensverwaltung
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#5F1718]">
                    <Link
                      to={'/ipo'}
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className={`${isActive('/ipo') ? 'text-[#5F1718]' : 'text-gray-700'}`}
                    >
                      IPO
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#5F1718] text-black group">
                    <Link
                      to={'/arbitrage'}
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className={`${isActive('/arbitrage') ? 'text-[#5F1718]' : 'group-hover:text-white'}`}
                    >
                      Arbitrage
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#5F1718]">
                    <Link
                      to={'/impressum'}
                      onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                      className={`${isActive('/impressum') ? 'text-[#5F1718]' : 'text-gray-700'}`}
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
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-md md:hidden z-20">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <ul className="space-y-3 text-base font-semibold">
                <li><a href="#Services" onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "Services"); }} className={`${isActive('#Services') ? 'text-[#5F1718]' : 'text-gray-800'} block`}>Services</a></li>
                <li><a href="#UNSERE_GESCHICHTE" onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "UNSERE_GESCHICHTE"); }} className={`${isActive('#UNSERE_GESCHICHTE') ? 'text-[#5F1718]' : 'text-gray-800'} block`}>Über</a></li>
                <li><a href="#WARUM" onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "WARUM"); }} className={`${isActive('#WARUM') ? 'text-[#5F1718]' : 'text-gray-800'} block`}>Warum sollten Sie uns wählen?</a></li>
                <li className="pt-2 border-t">
                  <button className="w-full text-left font-semibold" onClick={() => setMobileOpen(false)}>Mehr</button>
                    <ul className="mt-2 pl-4 space-y-2 ">
                    <li ><a href="#Karriere" onClick={(e) => { setMobileOpen(false); handleAnchorClick(e, "Karriere"); }} className={`${isActive('#Karriere') ? 'text-[#5F1718]' : 'text-gray-800'} block `}>Karriere</a></li>
                    <li><Link to="/verm-gensverwaltung" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} className={`${isActive('/verm-gensverwaltung') ? 'text-[#5F1718]' : 'text-gray-800'} block`}>Vermögensverwaltung</Link></li>
                    <li><Link to="/ipo" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} className={`${isActive('/ipo') ? 'text-[#5F1718]' : 'text-gray-800 hover:text-white'} block`}>IPO</Link></li>
                    <li><Link to="/arbitrage" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} className={`${isActive('/arbitrage') ? 'text-[#5F1718]' : 'text-gray-800'} block`}>Arbitrage</Link></li>
                    <li><Link to="/impressum" onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }} className={`${isActive('/impressum') ? 'text-[#5F1718]' : 'text-gray-800'} block`}>Impressum</Link></li>
                  </ul>
                </li>
              </ul>      
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import Header from "../components/header.jsx"
import Hero from "../components/hero.jsx"
import FeatureCards from "../components/feature-cards.jsx"
import SplitSection from "../components/split-section.jsx"
import Strengths from "../components/strengths.jsx"
import Team from "../components/team.jsx"
import Awards from "../components/awards.jsx"
import Testimonials from "../components/testimonials.jsx"
import Contact from "../components/contact.jsx"
import Footer from "../components/footer.jsx"

export default function Landing() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-ectus-verwaltungs-ag-de-2025-10-13-17_11_55.png-gfxhMB5JttJK5SL9RqxDWTuaI6vORs.jpeg" />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Services</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Individuelle Finanzlösungen für Sie
            </h2>
          </div>
          <FeatureCards />
          <div className="text-center mt-10">
            <a className="inline-block px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
              Kostenlose Beratung
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SplitSection
            kicker="Warum wir"
            title="Vertrauen Sie uns mit Ihrer Finanzplanung"
            copy="Wir kombinieren Erfahrung mit datengestützten Einblicken, um Ihre finanziellen Ziele klar und effizient zu erreichen. Von Budgetoptimierung bis Vermögensaufbau – wir begleiten Sie mit einer klaren Strategie."
            image="/business-meeting-consultation-table.jpg"
            imageAlt="Beratungsszene in einem Meetingraum"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Unsere Stärken</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">Unsere Stärken für Sie</h2>
          </div>
          <Strengths />
          <div className="text-center mt-10">
            <a className="inline-block px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
              Individuelle Analyse starten
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SplitSection
            kicker="So arbeiten wir"
            title="Unsere innovative Herangehensweise"
            copy="Mit klaren Prozessen, verständlicher Kommunikation und einem Fokus auf messbare Ergebnisse entwickeln wir realistische Pläne, die zu Ihrem Leben passen – nicht umgekehrt."
            image="/analytics-dashboard-on-laptop.jpg"
            imageAlt="Analytik-Dashboard auf einem Laptop"
            imageLeft
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Experten</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Unser Expertenteam für Finanzberatung
            </h2>
          </div>
          <Team />
        </div>
      </section>

      <section className="bg-[var(--color-section)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Auszeichnungen &amp; Qualität</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Hervorragend: Auszeichnungen und Akkreditierungen
            </h2>
          </div>
          <Awards />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Stimmen</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Kundenbewertungen unserer Finanzberater
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="bg-[var(--color-section)] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="uppercase tracking-widest text-sm text-muted-foreground">Kontaktieren Sie uns</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Kontaktieren Sie uns für Finanzberatung
            </h2>
          </div>
          <Contact />
        </div>
      </section>

      <Footer />
    </main>
  )
}

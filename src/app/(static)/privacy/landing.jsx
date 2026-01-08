import Header from "../components/header.jsx";
import Hero from "../components/hero.jsx";
import FeatureCards from "../components/feature-cards.jsx";
import SplitSection from "../components/split-section.jsx";
import Team from "../components/team.jsx";
import Awards from "../components/awards.jsx";
import Testimonials from "../components/testimonials.jsx";
import Contact from "../components/contact.jsx";
import Footer from "../components/footer.jsx";
import Strengths from "../components/strengths.jsx";

export default function Landing() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero imageUrl="/heroBg.jpg" />
      <section className="py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-35" id="Services">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              Services
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Individuelle Finanzlösungen für Sie
            </h2>
          </div>
          <FeatureCards />
          <div className="text-center mt-18">
            <a className="px-6 py-4 text-white rounded-lg bg-[#5639A5] font-bold">
              Konsultation buchen
            </a>
          </div>
        </div>
      </section>

      <SplitSection
        
        kicker="UNSERE GESCHICHTE"
        title="Vertrauen Sie uns mit Ihrer Finanzplanung"
        copy={
          <>
            <p>
              Mit Gründung im Jahr 2015 in Kemberg haben wir uns als
              Finanzberater einen Namen gemacht. Unser Firmensitz in Kemberg,
              Germany, dient als zentraler Standort für unsere
              Vermögensverwaltungsdienste. Unsere Geschichte begann mit dem
              klaren Ziel, individuelle Finanzlösungen für unsere Kunden zu
              schaffen.
            </p>
            <p>
              Seit unserer Gründung sind wir kontinuierlich gewachsen und sind
              heute stolz darauf, eine Vielzahl von Kunden in und um Kemberg zu
              betreuen. Unsere Expertise und unser Engagement für die
              finanziellen Ziele unserer Kunden haben uns zu einem
              vertrauenswürdigen Partner in allen Fragen der Finanzplanung
              gemacht.
            </p>
          </>
        }
        image="/20d48b4b5f.jpg"
        imageAlt="Beratungsszene in einem Meetingraum"
      />

      <section id="WARUM" className="py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              WARUM MIT UNS ARBEITEN
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Unsere Stärken für Sie
            </h2>
          </div>
          <Strengths />
          <div className="text-center mt-18">
            <a className="px-6 py-4 text-white rounded-lg bg-[#5639A5] font-bold">
              Konsultation buchen
            </a>
          </div>
        </div>
      </section>

      <SplitSection
        kicker="EINZIGARTIGER ANSATZ"
        title="Unsere innovative Herangehensweise"
        copy={
          <>
            <p>
              Als erfahrene Finanzberater gehen wir neue Wege, um
              maßgeschneiderte Lösungen für unsere Kunden zu entwickeln. Unser
              innovativer Ansatz ermöglicht es uns, individuelle
              Finanzstrategien zu erstellen, die auf die spezifischen
              Bedürfnisse und Ziele jedes Einzelnen zugeschnitten sind.
            </p>
            <p>
              Durch ständige Weiterentwicklung und Anpassung an die sich
              wandelnden Finanzmärkte bleiben wir an vorderster Front, um
              unseren Kunden stets die bestmöglichen Beratungsdienste zu bieten.
              Mit unserer innovativen Herangehensweise schaffen wir langfristige
              Werte und helfen unseren Kunden, finanzielle Ziele zu erreichen.
            </p>
          </>
        }
        image="/b666bd421d.jpg"
        imageAlt="Beratungsszene in einem Meetingraum"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              UNSER TEAM
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Unser Expertenteam für Finanzberatung
            </h2>
          </div>
          <Team />
        </div>
      </section>

      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14 max-w-xl">
            <p className="uppercase font-bold text-base text-muted-foreground">
              ANERKANNTE SPITZENLEISTUNGEN
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Hervorragende Auszeichnungen und Akkreditierungen
            </h2>
            <p className="text-muted-foreground mt-8 text-center leading-relaxed font-light text-lg">
              Unser Team hat renommierte Auszeichnungen und Akkreditierungen in der Finanzbranche erhalten, die unsere Fachkenntnisse und Professionalität unterstreichen. Wir haben uns kontinuierlich weitergebildet, um diese Anerkennungen zu verdienen.
            </p>
          </div>
          <Awards />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              TESTIMONIALS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Kundenbewertungen unserer Finanzberater
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="bg-gray-100 py-16 md:py-24 scroll-smooth scroll-mt-20 md:scroll-mt-28" id="Karriere">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mx-auto mb-10 md:mb-14">
            <p className="uppercase font-bold text-base text-muted-foreground">
              KONTAKTIEREN SIE UNS
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mx-auto text-balance">
              Kontaktieren Sie uns für Finanzberatung
            </h2>
          </div>
          <Contact />
        </div>
      </section>

      <iframe 
        width="100%" 
        height="570" 
        frameBorder="0" 
        allowFullScreen={true}
        data-categories="unclassified" 
        data-termly-iframe-id="termly-iframe-0" 
        style={{ display: 'block' }} 
        data-autoblock-ignore="1" 
        src="https://www.google.com/maps?q=51.767013,12.629125&hl=en&z=14&output=embed"
        title="Google Maps Location"
      ></iframe>

      <Footer />
    </main>
  );
}

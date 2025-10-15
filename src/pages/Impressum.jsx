import React from "react";
import HeroSection from "../components/herosection";
import Header from "../components/header";
import Footer from "../components/footer";

const Impressum = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="max-w-5xl mx-auto text-3xl font-light text-center mt-24">
        <div className="text-4xl">Ectus Verwaltungs AG</div>
        <p>Adresse:</p>
        <p>Neue Str. 12 a</p>
        <p>06901 Kemberg</p>
        <p className="mt-10">Telefon:</p>
        <p>+49 32221807849</p>
        <p className="text-2xl">+49 32221807849</p>
        <p className="mt-10">E-Mail:</p>
        <p>info@ectus-verwaltungs-ag.de</p>
        <p className="mt-10">Registergericht:</p>
        <p>Amtsgericht Frankfurt am Main</p>
        <p>Amtsgericht Frankfurt am Main HRB 103709</p>
        <p className="mt-10">Vertreten durch den Geschäftsführer:</p>
        <p>Ralf-Uwe Stolarski</p>
        <p className="my-24">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
          <br />
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Knut Ropte
          (Anschrift wie oben) Streitschlichtung: Die Europäische Kommission
          stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: [Link
          hinzufügen]. Wir sind nicht verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p className="mb-24">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind
          als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für
          den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Impressum;

import React from 'react'
import Image from "next/image";
import image from "../../../assets/images/sec3.png";

export const Section3 = () => {
  return (
    <div
      id="about-us"
      className="flex flex-col-reverse lg:flex-row lg:gap-[90px] gap-8"
    >
      <div className="lg:w-[45.972vw] relative py-12">
        <div className="absolute bg-[#F3F4F7] top-0 left-0 w-full h-[85%] -z-10"></div>
        <div className="absolute bg-[#F3F4F7] bottom-0 left-0 w-[85%] h-full -z-10"></div>
        <Image
          className="w-[92.07vw] lg:w-[41.944vw] h-full object-cover rounded-r-[36px]"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-1 flex-col justify-center px-6  lg:pr-[8.333vw] py-10">
        <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] lg:pr-[6.042vw] mb-4 uppercase">
          Über BlackRock und SK Black Rock Financial
        </h2>
        <div className="flex flex-col gap-4">
          <p className="text-[16px]/[140%] lg:text-[18px]/[28px] text-[#626262]">
            BlackRock ist einer der bekanntesten Namen in der Finanzwelt und
            bekannt für seine globale Führungsrolle im Asset Management.
            Gegründet im Jahr 1988 in New York von Larry Fink und sieben
            Partnern, konzentrierte sich das Unternehmen zunächst auf das
            Management von festverzinslichen Wertpapieren – das Fundament für
            seinen langfristigen Erfolg. Im Laufe der Jahrzehnte erweiterte
            BlackRock sein Dienstleistungsangebot um Investmentmanagement,
            Risikolösungen und Beratungsdienste für institutionelle und private
            Kunden weltweit.
          </p>
          <p className="text-[18px]/[28px] text-[#626262]">
            Ein bedeutender Meilenstein in der Entwicklung von BlackRock war die
            Übernahme von Barclays Global Investors im Jahr 2009, wodurch das
            Unternehmen zum größten Vermögensverwalter der Welt wurde. Heute
            verwaltet BlackRock ein breit gefächertes Portfolio über
            verschiedene Anlageklassen hinweg und ist mit seiner iShares-Marke
            führend im Bereich börsengehandelter Fonds (ETFs), und bedient
            weltweit Millionen von Kunden.
          </p>
          <p className="text-[18px]/[28px] text-[#626262]">
            Im Einklang mit dieser globalen Expansion wurde 2023 die SK Black
            Rock Financial GmbH in Monheim am Rhein, Deutschland, unter der
            Leitung von Mustafa Sizan gegründet. Obwohl SK Black Rock Financial
            unabhängig operiert, orientiert es sich an den Prinzipien und der
            Expertise, die BlackRock zu einem vertrauenswürdigen Namen in der
            Branche gemacht haben. Unsere Mission ist es, deutschen und
            europäischen Unternehmen Zugang zu erstklassigen Finanzstrategien zu
            bieten – mit Spezialisierung auf Börsengangsvorbereitung und
            Markteintrittslösungen.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import CheckIcon from "../../../assets/images/sec4-check.png"
import Image from 'next/image';
export const Section6 = () => {
  return (
    <div
      id="solutions"
      className="py-12 px-4 md:px-6 lg:px-[8.333vw] lg:py-[85px] flex flex-col lg:gap-[64px] gap-8 items-center"
    >
      <div className="lg:px-[20.833vw]">
        <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] mb-5 md:mb-4 lg:text-center uppercase">
          Strategische Lösungen für Wachstum
        </h2>
        <p className="text-[16px]/[140%] lg:text-[18px]/[28px] text-[#626262] lg:text-center">
          Wir bieten maßgeschneiderte Strategien und bewährte Rahmenwerke, um
          Unternehmen beim Skalieren, der Investorengewinnung und dem Erfolg auf
          öffentlichen Märkten zu unterstützen.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <div className="lg:p-[40px] p-6 rounded-[24px] lg:rounded-[48px] bg-[#F5F5F5] flex-1">
          <h3 className="mb-3 font-bold lg:text-[24px]/[32px] text-[20px]/[32px]">
            Klarna
          </h3>
          <p className="lg:text-[18px]/[28px] text-[16px]/[140%] lg:mb-8 mb-5">
            Unsere Expertise im Skalieren führender Fintech-Plattformen zeigt
            sich am Beispiel Klarna – eine Erfolgsgeschichte, die verdeutlicht,
            wie wir Unternehmen von der frühen Wachstumsphase bis zur globalen
            Marktführerschaft begleiten.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Beratung in der Frühphase
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Kapitalzugang
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Regulatorische Navigation
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Unterstützung nach dem Börsengang
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:p-[40px] p-6 rounded-[48px] bg-[#F5F5F5] flex-1">
          <h3 className="mb-3 font-bold lg:text-[24px]/[32px] text-[20px]/[32px]">
            Fscale
          </h3>
          <p className="lg:text-[18px]/[28px] text-[16px]/[140%] lg:mb-8 mb-5">
            Fscale ist unser bewährtes Rahmenwerk für Börsengangsvorbereitung.
            Wir bieten umfassende Unterstützung, um sicherzustellen, dass Ihr
            Unternehmen optimal für eine erfolgreiche Notierung an den weltweit
            wettbewerbsfähigsten Börsen aufgestellt ist.
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Umfassende Bewertung
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Strukturierung & Unternehmensführung
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Positionierung für Investoren
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <Image className="size-[18px]" src={CheckIcon} alt="" />
              <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%]">
                Umsetzung & Börsengang
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

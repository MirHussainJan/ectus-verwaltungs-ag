import React from 'react'

export const Section7
 = () => {
  return (
    <div
      id="our-team"
      className="bg-[#F5F5F5] py-12 px-4 md:px-6 lg:px-[8.333vw] lg:py-[85px]"
    >
      <h2 className="font-bold text-[24px]/[130%] lg:text-[40px]/[130%] text-center mb-6 lg:mb-[64px] w-full">
        Unser Team
      </h2>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
        <div className="bg-white rounded-[16px] p-5 flex-1">
          <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%] text-[#1D1E20] mb-1">
            Mustafa Sizan
          </h3>
          <p className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%] text-[#0171FF]">
            Geschäftsführer
          </p>
        </div>
        <div className="bg-white rounded-[16px] p-5 flex-1">
          <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%] text-[#1D1E20] mb-1">
            Sven Flieshardt
          </h3>
          <p className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%] text-[#0171FF]">
            Abteilungsleiter
          </p>
        </div>
        <div className="bg-white rounded-[16px] p-5 flex-1">
          <h3 className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%] text-[#1D1E20] mb-1">
            Laura Lehmann
          </h3>
          <p className="font-bold lg:text-[18px]/[28px] text-[16px]/[140%] text-[#0171FF]">
            Sekretärin
          </p>
        </div>
      </div>
    </div>
  );
}

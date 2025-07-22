"use client";
import Slider from "react-infinite-logo-slider";
import logo1 from "../../../assets/images/hmlogo.png";
import logo2 from "../../../assets/images/mediamark.png";
import logo3 from "../../../assets/images/spotify.png";
import logo4 from "../../../assets/images/dbbahn.png";
import Image from "next/image";

export const Section2 = () => {
  return (
    <div className="overflow-hidden px-6 md:px-[40px] lg:px-[120px] py-12">
      <div className="flex gap-0 md:gap-8 items-center">
        <h3 className="text-[24px]/[170%] font-bold text-[#141414] min-w-[150px] opacity-60">
          Our Partners
        </h3>

        <div className="flex-1 justify-center">
          <Slider
            width="250px"
            duration={10}
            pauseOnHover
            blurBorders={false}
            blurBorderColor="#fff"
          >
            {[logo1, logo2, logo3, logo4].map((logo, index) => (
              <Slider.Slide key={index}>
                <div className="flex justify-center items-center w-full h-[48px]">
                  <Image src={logo} alt={`logo-${index}`} height={48} />
                </div>
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

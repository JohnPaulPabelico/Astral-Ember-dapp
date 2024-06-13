import Image from "next/image";
import Link from "next/link";

import React, { useContext } from "react";
import Background from "../public/explorebg.png";
import { Reveal } from "./Animations/Reveal";
import Carousel from "./Carousel";

const partnerslides = ["/partner1.png", "/partner2.png"];
function Explore() {
  return (
    <div>
      <section
        id="explore"
        className="flex min-h-screen flex-col items-center justify-between p-12 relative"
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "40%",

          overflow: "hidden",
        }}
      >
        <div className="">
          <div className="p-12"></div>
          <div className="flex justify-center  items-center h-full">
            <div className="text-center text-5xl space p-10 rounded-xl bg-slate-900/60 backdrop-blur-sm font-bold space text-white items-center">
              <div className="mb-10">EXPLORE OUR PARTNERS</div>
              <div className=" min-w-5xl rounded-3xl max-w-4xl">
                <Carousel autoSlide={true}>
                  {partnerslides.map((s, index) => (
                    <Image
                      key={index}
                      alt="slides"
                      src={s}
                      height={800}
                      width={900}
                      className="rounded-3xl"
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;

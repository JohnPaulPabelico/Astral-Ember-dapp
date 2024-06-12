import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoIosContact } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React, { useContext } from "react";
import Background from "../public/bg.png";
import { Reveal } from "./Animations/Reveal";

function Hero() {
  return (
    <div>
      <section
        id="home"
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
        <div className="mt-8 lg:mt-0 lg:flex items-center justify-center lg:justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:px-10 py-5 w-3/4">
          <div className="relative mr-8 flex justify-center"></div>

          <div>
            <div className="text-center text-7xl font-semibold space flex justify-center text-white items-center max-w-2xl">
              Explore the Cosmos of Astral{" "}
            </div>
            <div className="flex justify-center">
              <div
                className={`text-center mt-1 flex justify-center text-white text-2xl font-bold space `}
              >
                Embark on an Interstellar Adventure with Astral Ember Guild
              </div>
            </div>
            <div className="lg:max-w-lg "></div>
            <span className="flex justify-center text-4xl mt-8">
              <Link
                href="https://discord.gg/astralember"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-purple-700 p-5 rounded-full bg-purple-600 text-white transition duration-300 space "
              >
                Join the Guild
              </Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

import { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const NavBar: React.FC = () => {
  const [barState, setBarState] = useState(false);

  return (
    <div
      className={`flex items-center lg:fixed fixed top-0 w-full shadow px-5 min-h-30 justify-between z-10 transition  py-3 ${
        barState ? "bg-slate-950" : "bg-slate-950/70"
      }`}
    >
      <div>
        <Image
          src="/logos.png"
          alt="logo"
          width={60}
          height={60}
          className="ml-10 rounded-full"
        />
      </div>
      <div>
        <span className="ml-5 text-3xl text-white font-bold space  lg:visible invisible">
          Astral Ember Guild
        </span>
      </div>
      <div
        className={`transition ease-out lg:ml-auto lg:static absolute  lg:min-h-fit min-h-screen lg:w-auto w-full top-[100%] left-0 py-10 lg:py-0  ${
          barState ? "bg-slate-950" : "bg-transparent"
        }`}
      >
        <ul
          className={`flex-col lg:flex-row flex items-center gap-16 lg:gap-0`}
        >
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <Link
              className={`lg:ml-8 lg:text-xl text-3xl  space font-bold rounded-full m-2 hover:text-slate-300 text-white transition duration-200 `}
              href="#home"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Home
            </Link>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <Link
              className={` lg:text-xl text-3xl  space font-bold rounded-full m-2 hover:text-blue-500 text-white transition duration-200 `}
              href="#about"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              About
            </Link>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <Link
              className={` lg:text-xl text-3xl  space font-bold rounded-full m-2 hover:text-blue-500 text-white transition duration-200`}
              href="#explore"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Explore
            </Link>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <Link
              className={` lg:text-xl text-3xl  space font-bold rounded-full m-2 hover:text-blue-500 text-white transition duration-200`}
              href="#contact"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Contact
            </Link>
          </li>
          <li className={`${barState ? "block" : "invisible lg:visible"}`}>
            <Link
              className={`ml-5 lg:text-xl text-3xl  space font-bold rounded-full m-2 hover:scale-50 text-white transition duration-200 px-5 py-1 hover:bg-purple-700 bg-purple-500 lg:mr-10`}
              href="https://discord.gg/astralember"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setBarState(false);
                console.log(barState);
              }}
            >
              Join
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="flex items-center">
          <li
            className={`ml-5 m-3 text-2xl cursor-pointer hover:text-slate-200 text-white transition duration-200 lg:hidden
              `}
          >
            {barState ? (
              <GrClose
                onClick={() => {
                  setBarState(!barState);
                  console.log(barState);
                }}
              />
            ) : (
              <FaBars
                onClick={() => {
                  setBarState(!barState);
                  console.log(barState);
                }}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

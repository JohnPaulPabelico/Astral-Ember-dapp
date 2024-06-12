import React, { useContext } from "react";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-slate-950 text-primary-content">
        <aside className="text-white">
          <Image
            src="/logos.png"
            alt="logo"
            width={60}
            height={60}
            className=""
          />
          <p className="font-bold space">
            Astral Ember Guild <br />
            {/* A web3 gaming guild */}
          </p>
          <p className=" space">Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-slate-300 transition"
              >
                <BsTwitterX />
              </Link>
            </a>
            <a>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-slate-300 transition"
              >
                <BsFacebook />
              </Link>
            </a>
            <Link
              href="https://discord.gg/astralember"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:text-slate-300 transition"
            >
              <BsDiscord />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;

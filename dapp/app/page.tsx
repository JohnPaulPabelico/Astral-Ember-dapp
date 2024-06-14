"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const [rendered, setrendered] = useState(false);

  useEffect(() => {
    setrendered(true);
  }, [setrendered]);

  return (
    <main>
      {rendered && (
        <div>
          <NavBar />
          <Hero />
          <About />
          <Explore />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}

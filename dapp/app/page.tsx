"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}

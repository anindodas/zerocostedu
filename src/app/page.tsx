import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZeroCostEdu - Mission To Make Education Free Of Cost",
  description:
    "ZeroCostEdu is a nonprofit committed to accessible education, offering a full suite of resources, courses, and tools for quality learning without cost.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      {/* <Features /> */}

      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* Commenting out the  section */}

      {/* <Blog /> */}
      <Contact />
    </>
  );
}

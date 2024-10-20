import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ZeroCostEdu - Mission to make Education Free Of Cost",
  description:
    "ZeroCostEdu is a nonprofit organization for free educational resources, offering all the essential tools, courses, and materials needed to provide quality for free.",
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

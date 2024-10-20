import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "ZeroCostEdu is a nonprofit organization for free educational resources, offering all the essential tools, courses, and materials needed to provide quality for free of cost for everyone.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About"
        description="ZeroCostEdu is a nonprofit organization for free educational resources, offering all the essential tools, courses, and materials needed to provide quality for free of cost for everyone."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;

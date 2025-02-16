import React from "react";
import Hero from "@/components/Hero";

import {
  AboutSection,
  PesertaSection,
  StepsSection,
  LawsSection,
  GallerySection,
} from "@/components/Home";

const Homepage = () => {
  const refContent = React.createRef<HTMLDivElement>();

  return (
    <React.Fragment>
      <Hero mRef={refContent} />
      <div ref={refContent}>
        <AboutSection />
        <StepsSection />
        <LawsSection />
        <PesertaSection />
        <GallerySection />
      </div>
    </React.Fragment>
  );
};

export default Homepage;

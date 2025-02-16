import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section } from "@/components/UI";
import { motion } from "motion/react";

import {
  pelatihanImg,
  Ujikom1Img,
  Pelatihan2Img,
  Ujikom2Img,
} from "@/constant/picture";

const GallerySection = () => {
  return (
    <Section isCenteredContent className="galery-section">
      <Container>
        <motion.h1
          className="h1-custom mb-5 tits"
          style={{ fontSize: "5rem" }}
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, y: 20 }}
        >
          - Gallery -
        </motion.h1>
        <Row className="mb-5">
          <Col lg={5} className="mb-5" style={{ overflow: "hidden" }}>
            <img
              className="fluid img-hover__zoom-colorize"
              src={pelatihanImg}
              alt="pelatihan"
              loading="lazy"
            />
          </Col>
          <Col lg={7}>
            <Row>
              <Col lg={12} className="mb-5" style={{ overflow: "hidden" }}>
                <img
                  className="fluid img-hover__zoom-colorize"
                  src={Ujikom1Img}
                  alt="ujikom1"
                  loading="lazy"
                />
              </Col>
              <Col lg={12} className="mb-5" style={{ overflow: "hidden" }}>
                <img
                  className="fluid img-hover__zoom-colorize"
                  src={Pelatihan2Img}
                  alt="pelatihan2"
                  loading="lazy"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={12} style={{ overflow: "hidden" }}>
            <img
              className="fluid img-hover__zoom-colorize"
              src={Ujikom2Img}
              alt="ujikom2"
              loading="lazy"
            />
          </Col>
        </Row>
        <Row>
          <p>
            <a href="/gallery" className="galery-p">
              Lebih Banyak
            </a>
          </p>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(GallerySection);

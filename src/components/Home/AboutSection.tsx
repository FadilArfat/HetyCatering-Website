import React from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/UI";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "motion/react";

import Logo from "@/assets/img/vector/logo.svg";
import data from "@/data";

const AboutSection = () => {
  return (
    <Section className="about-section">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6} className="align-self-center about-text">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1
                style={{ fontSize: "5rem" }}
                className="h1-custom tits"
                tabIndex={0}
              >
                Tentang Hety Catering
              </h1>
              <p className="mt-5" tabIndex={0}>
                {data.about.desc}
              </p>
              <Link to="/about" className="button button-secondary mt-5">
                Selengkapnya
              </Link>
            </motion.div>
          </Col>
          <Col lg={6} className="about-img text-center">
            <motion.img
              className="fluid"
              src={Logo}
              alt="logo LSP HCMI"
              loading="lazy"
              width="100%"
              height="100%"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
              exit={{ opacity: 0, x: 20 }}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(AboutSection);

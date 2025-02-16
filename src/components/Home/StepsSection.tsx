import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Section } from "@/components/UI";
import { motion } from "motion/react";

import s1 from "@/assets/img/os/s1.jpg";
import s2 from "@/assets/img/os/s2.jpg";
import s3 from "@/assets/img/os/s3.jpg";
import s4 from "@/assets/img/os/s4.jpg";
import s5 from "@/assets/img/os/s5.png";
import s6 from "@/assets/img/os/s6.jpg";
import s7 from "@/assets/img/os/s7.png";
import s8 from "@/assets/img/os/s8.jpg";
import s9 from "@/assets/img/os/s9.jpg";
import { easeInOut } from "motion";

const StepsSection = () => {
  const steps = [
    {
      img: s1,
      title: "Wedding Event",
      desc: "Layanan catering lengkap untuk pernikahan dengan menu eksklusif dan dekorasi elegan.",
    },
    {
      img: s2,
      title: "Corporate Event",
      desc: "Paket catering untuk acara perusahaan, seminar, dan meeting dengan pilihan menu yang variatif.",
    },
    {
      img: s3,
      title: "Open House / Ultah",
      desc: "Catering spesial untuk acara ulang tahun dan open house dengan hidangan lezat dan presentasi menarik.",
    },
    {
      img: s5,
      title: "Snack Box",
      desc: "Pilihan snack box dengan beragam camilan lezat untuk berbagai acara.",
    },
    {
      img: s6,
      title: "Nasi Box",
      desc: "Paket nasi box dengan pilihan lauk yang dapat disesuaikan untuk acara spesial Anda.",
    },
    {
      img: s4,
      title: "Catering Service",
      desc: "Layanan catering lengkap untuk berbagai acara, mulai dari prasmanan hingga hidangan eksklusif.",
    },
    {
      img: s7,
      title: "Sewa Peralatan Pesta",
      desc: "Menyediakan penyewaan alat pesta seperti meja, kursi, dan peralatan makan.",
    },
    {
      img: s8,
      title: "Sewa Blower",
      desc: "Sewa blower untuk menjaga ruangan tetap sejuk dan nyaman selama acara berlangsung.",
    },
    {
      img: s9,
      title: "Sewa Bunga Papan",
      desc: "Menyediakan bunga papan untuk berbagai acara, seperti pernikahan, peresmian, atau belasungkawa.",
    },
  ];

  return (
    <Section isCenteredContent className="schedule-section">
      <Container>
        <Row>
          <Col lg={12} sm={12} className="mb-5 text-center">
            <motion.h1
              style={{ fontSize: "5rem" }}
              className="h1-custom tits"
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.1 },
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              - Our Service -
            </motion.h1>
          </Col>
          <Col lg={12} sm={12}>
            <Row>
              {steps.map((step, index) => (
                <Col lg={4} md={6} sm={12} className="step-box" key={index}>
                  <motion.div
                    className="step-icon-wrapper zoom"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <img
                      src={step.img}
                      alt={step.title}
                      className="step-icon "
                      style={{ borderRadius: "5px" }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h1 style={{ fontSize: "2.5rem" }} tabIndex={0}>
                      {step.title}
                    </h1>
                    <p style={{ color: "white" }} tabIndex={0}>
                      {step.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(StepsSection);

const styles = `
  .step-icon-wrapper {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
  }

  .step-icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .step-box {
    text-align: center;
    padding: 15px;
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Section } from "@/components/UI";
import { motion } from "motion/react";

import Check from "@/assets/img/vector/check-mark-circle-icon.svg";

const packages = [
  {
    name: "SILVER",
    items: [
      "Nasi",
      "Ayam",
      "Daging",
      "Ikan",
      "Sambalan/Keripik",
      "Salad Buah/Selada Bangkok",
      "Soto/Sop",
      "Kerupuk",
      "Buah",
      "Air Mineral",
    ],
    pondokan: [
      "Pesanan > 500 porsi Free pondokan Tekwan dan Pudding",
      "Pesanan > 1000 Free Tekwan, Pudding dan Pempek",
    ],
    color: "#ececec",
    titleColor: "#889cf1",
  },
  {
    name: "GOLD",
    items: [
      "Nasi",
      "Ayam",
      "Daging",
      "Ikan",
      "Sambalan/Keripik",
      "Soto/Sop",
      "Salad Buah, Asinan Buah/Sayur",
      "Buah",
      "Kerupuk",
      "Air Mineral",
    ],
    pondokan: [
      "Pesanan > 200: 2 Pondokan",
      "Pesanan > 500: 4 Pondokan",
      "Pesanan > 1000: 5 Pondokan Free Softdrink",
    ],
    color: "#C9D1F5",
    titleColor: "#ececec",
  },
  {
    name: "DIAMOND",
    items: [
      "Nasi",
      "Ayam",
      "Daging",
      "Ikan",
      "Sambalan/Keripik",
      "Salad Buah/Selada Bangkok",
      "Soto/Sop",
      "Kerupuk",
      "Buah",
      "Air Mineral",
    ],
    pondokan: ["Pesanan > 1000: 10 Macam Pondokan bebas pilih"],
    color: "#B4D6FF",
    titleColor: "#0066F8",
  },
];

const LawsSection = () => {
  return (
    <Section className="laws-section">
      <Container style={{ marginBottom: "5rem" }}>
        <Row className="text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                ease: "easeInOut",
              }}
              exit={{ opacity: 0, y: 20 }}
            >
              <h1
                className="tits"
                style={{ paddingTop: "5rem", fontSize: "5rem", color: "black" }}
              >
                - Paket Catering -
              </h1>
              <h2 style={{ marginBottom: "5rem", color: "black" }}>
                Pilih paket yang sesuai dengan kebutuhan acara Anda
              </h2>
            </motion.div>
          </Col>
        </Row>
        <Row>
          {packages.map((pkg, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="mb-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0, scale: 0.1 }}
              >
                <Card
                  className="h-100 shadow-lg border-0"
                  style={{
                    backgroundColor: pkg.color,
                    color: "black",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="text-center  mb-5">
                      <h1
                        style={{
                          fontWeight: "bolder",
                          fontSize: "3.5rem",
                          color: pkg.titleColor,
                        }}
                      >
                        {pkg.name}
                      </h1>
                    </Card.Title>
                    <ul className=" text-start">
                      {pkg.items.map((item, i) => (
                        <li key={i}>
                          <h3>{item}</h3>
                        </li>
                      ))}
                    </ul>
                    <hr />
                    <h3 className="fw-bold text-dark text-secondary text-start">
                      Pondokan:
                    </h3>
                    <ul className=" text-start">
                      {pkg.pondokan.map((pondok, i) => (
                        <li key={i}>
                          <h3>-{pondok}</h3>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default React.memo(LawsSection);

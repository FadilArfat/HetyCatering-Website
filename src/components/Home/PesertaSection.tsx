import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Section } from "@/components/UI";
import { motion } from "motion/react";

import {
  faBoxes,
  faDollarSign,
  faList,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

const features = [
  {
    icon: faUtensils,
    title: "Kualitas Terjamin",
    text: "Hidangan lezat dengan bahan segar dan halal.",
  },
  {
    icon: faUsers,
    title: "Pelayanan Profesional",
    text: "Tim berpengalaman, ramah, dan tepat waktu.",
  },
  {
    icon: faList,
    title: "Menu Variatif",
    text: "Pilihan menu fleksibel sesuai kebutuhan.",
  },
  {
    icon: faBoxes,
    title: "Layanan Fleksibel",
    text: "Catering harian, pesta, aqiqah, dan lainnya.",
  },
  {
    icon: faDollarSign,
    title: "Harga Kompetitif",
    text: "Kualitas terbaik dengan harga terjangkau.",
  },
  {
    icon: faSmile,
    title: "Kepuasan Terjamin",
    text: "Prioritas kami adalah kepuasan Anda.",
  },
];

const PesertaSection = () => {
  return (
    <Section className="peserta-section">
      <Container className="py-5">
        <motion.h1
          className="text-center mb-4 tits"
          style={{ fontSize: "5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            ease: "easeInOut",
          }}
          exit={{ opacity: 0, y: 20 }}
        >
          Mengapa Memilih Kami?
        </motion.h1>
        <Row>
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index} className="my-4 pt-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  ease: "easeInOut",
                }}
                exit={{ opacity: 0, x: 20 }}
              >
                <Card className="text-center shadow p-3 border-0 p-5">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    size="3x"
                    className="text-primary mb-3 text-success"
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "2.5rem" }}>
                      {feature.title}
                    </Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
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

export default PesertaSection;

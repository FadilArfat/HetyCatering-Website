import React, { useState } from "react";
import Hero from "@/components/Hero";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion } from "motion/react";

import {
  imgDokumentasi1,
  imgDokumentasi2,
  imgDokumentasi3,
  imgDokumentasi4,
  imgDokumentasi5,
  imgDokumentasi6,
  imgDokumentasi7,
  imgDokumentasi8,
  imgDokumentasi9,
  imgDokumentasi10,
  imgDokumentasi11,
  imgDokumentasi12,
  imgDokumentasi13,
  imgDokumentasi14,
  imgDokumentasi15,
  imgDokumentasi16,
  imgDokumentasi17,
  imgDokumentasi18,
} from "@/constant/picture";

const images = [
  imgDokumentasi1,
  imgDokumentasi2,
  imgDokumentasi3,
  imgDokumentasi4,
  imgDokumentasi5,
  imgDokumentasi6,
  imgDokumentasi7,
  imgDokumentasi8,
  imgDokumentasi9,
  imgDokumentasi10,
  imgDokumentasi11,
  imgDokumentasi12,
  imgDokumentasi13,
  imgDokumentasi14,
  imgDokumentasi15,
  imgDokumentasi16,
  imgDokumentasi17,
  imgDokumentasi18,
];

const GalleryPage = () => {
  const refContent = React.createRef<HTMLDivElement>();
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShow = (image: string) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <React.Fragment>
      <Hero mRef={refContent} />
      <Container ref={refContent} className="py-5 my-5">
        <motion.h1
          className="text-center mb-5 tits"
          style={{ fontSize: "5rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, y: 20 }}
        >
          - Galeri Foto -
        </motion.h1>
        <Row className="g-3 justify-content-center">
          {images.map((image, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={3}
              xl={2}
              className="d-flex justify-content-center"
            >
              <div className="gallery-item" onClick={() => handleShow(image)}>
                <motion.img
                  src={image}
                  alt={`Dokumentasi ${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0, y: 20 }}
                />
              </div>
            </Col>
          ))}
        </Row>

        {/* Modal untuk menampilkan gambar yang diperbesar */}
        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Body className="text-center">
            <img
              src={selectedImage}
              alt="Selected"
              className="img-fluid rounded"
              loading="lazy"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </React.Fragment>
  );
};

export default GalleryPage;

const styles = `
  .gallery-item {
          width: 100%;
          max-width: 250px; /* Ukuran maksimal gambar */
          aspect-ratio: 1 / 1; /* Bentuk gambar tetap kotak */
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .gallery-item:hover {
          transform: scale(1.05);
        }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${styles}</style>`);

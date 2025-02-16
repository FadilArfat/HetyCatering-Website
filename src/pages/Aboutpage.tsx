import React from "react";
import Hero from "@/components/Hero";
import { Container, Row, Col } from "react-bootstrap";
import aboutUsImage from "@/assets/img/erasebg-transformed.png"; // Ganti dengan gambar yang sesuai
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLeaf,
  faUsers,
  faListAlt,
  faBullseye,
  faStar,
  faShieldAlt,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
const Aboutpage = () => {
  const refContent = React.createRef<HTMLDivElement>();

  return (
    <React.Fragment>
      <Hero mRef={refContent} />
      <Container ref={refContent} className="py-5">
        <Row className="align-items-center">
          {/* Kolom Kiri - Teks */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h1 className="mb-4 fw-bolder">Tentang HETY CATERING</h1>
              <p className="text-muted">
                CV. HETY adalah perusahaan katering profesional yang berkomitmen
                untuk menghadirkan layanan kuliner terbaik bagi setiap momen
                istimewa Anda. Kami menyediakan berbagai layanan, termasuk
                Catering Service, Catering Pesta, Aqiqah, Nasi Kotak, Snack Box,
                dan masih banyak lagi.
              </p>
              <p className="text-muted">
                Dengan pengalaman dan keahlian dalam dunia kuliner, kami selalu
                mengutamakan kualitas bahan baku, rasa yang autentik, dan
                penyajian yang memukau. CV. HETY hadir sebagai mitra terpercaya
                untuk memenuhi kebutuhan katering Anda, baik untuk acara
                keluarga, pernikahan, acara perusahaan, maupun kegiatan lainnya.
              </p>
            </motion.div>
          </Col>

          {/* Kolom Kanan - Gambar / Icon */}
          <Col md={6} className="text-center">
            {/* Jika ingin menggunakan gambar, bisa ganti dengan: */}
            <motion.img
              src={aboutUsImage}
              loading="lazy"
              alt="Tentang Kami"
              className="img-fluid rounded"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{ opacity: 0, x: 20 }}
            />
          </Col>
        </Row>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          exit={{ opacity: 0, y: -20 }}
        >
          <p className="text-center my-5 fs-1 h1 fw-bold">Keunggulan Kami</p>
          <Row className="text-center mt-4">
            {[
              {
                icon: faCheckCircle,
                title: "Kualitas & Kebersihan",
                text: "Mengutamakan kualitas rasa dan kebersihan.",
              },
              {
                icon: faLeaf,
                title: "Bahan Baku Halal",
                text: "Menggunakan bahan baku segar dan halal.",
              },
              {
                icon: faUsers,
                title: "Tim Profesional",
                text: "Pelayanan ramah dan tepat waktu.",
              },
              {
                icon: faListAlt,
                title: "Menu Fleksibel",
                text: "Dapat disesuaikan dengan kebutuhan dan anggaran.",
              },
            ].map((item, index) => (
              <Col md={6} lg={3} key={index} className="my-4">
                <div className="p-3 shadow-sm rounded bg-light">
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="2x"
                    className="text-primary mb-1 text-success"
                  />
                  <p className="fs-1">{item.title}</p>
                  <p className="text-muted fs-3">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Visi & Misi */}
        <Row className="my-5">
          {/* Visi */}
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{ opacity: 0, x: -20 }}
            >
              <p className="fs-1 h1 fw-bold">Visi</p>
              <div className="p-4 shadow-sm rounded bg-light">
                <p className="text-muted fs-2">
                  Menjadi pilihan utama dalam penyediaan layanan katering yang
                  profesional dan terpercaya di Indonesia.
                </p>
              </div>
            </motion.div>
          </Col>

          {/* Misi */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              exit={{ opacity: 0, x: 20 }}
            >
              <p className="text-center fs-1 h1 fw-bold">Misi</p>
              <ul className=" fs-2">
                <li>
                  Memberikan pengalaman kuliner yang berkesan melalui menu
                  berkualitas.
                </li>
                <li>
                  Menyediakan layanan katering yang praktis, ekonomis, dan
                  sesuai kebutuhan pelanggan.
                </li>
                <li>
                  Menjaga standar kebersihan dan keamanan pangan di setiap
                  proses produksi.
                </li>
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Aboutpage;

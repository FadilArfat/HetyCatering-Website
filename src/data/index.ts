import pdfdefault from "@/404.pdf";

import LogoLSP from "@/assets/img/vector/logo.svg";
import PictScheme from "@/assets/img/vector/card-skema.svg";

const data = {
  title: "Hety Catering",
  logo: LogoLSP,
  longTitle: "for your everything event",
  background: [
    {
      id: 1,
      text: "Rencana Strategis Kementerian BUMN dalam persiapan Super Holding dan BUMN University yg membutuhkan kompetensi khusus.",
    },
    {
      id: 2,
      text: "Belum memiliki kompetensi dengan standar global dengan pendekatan digitalisasi.",
    },
    {
      id: 3,
      text: "Adanya gap kompetensi dan kemampuan para pengelola dibidang HC BUMN.",
    },
    {
      id: 4,
      text: "Adanya tuntutan wajib sertifikasi bagi pejabat yang akan menduduki jabatan bidang SDM sesuai SE Menaker Nomor : 5 tahun 2019 yang menyatakan wajib memiliki sertifikasi bidang SDM bagi karyawan yang menduduki jabatan bidang SDM dan berlaku efektif bulan Juli 2021.",
    },
  ],
  telp: "+62 819-9473-3321",
  email: "cvhetylampung@yahoo.com",
  address: {
    text: "Jl. Wolter Monginsidi Gg. Sawo 4, Pengajaran, Kec. Tlk. Betung Utara, Kota Bandar Lampung, Lampung",
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.903253937791!2d105.25223160000002!3d-5.4316643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40da3998653e43%3A0xb06e784eb7f3460f!2sHetty%20Catering!5e0!3m2!1sid!2sid!4v1739017681585!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"',
  },
  visi: "Mewujudkan pengelolaan bidang Human Capital Management yang memenuhi standar kelas dunia dan terpeliharanya kompetensi Pengelola Sumber Daya Manusia yang unggul serta berdaya saing global.",
  misi: [
    {
      id: 1,
      text: "Menyelenggarakan sertifikasi profesi bidang human capital management dalam rangka mendukung efektifitas proses bisnis HCM Indonesia.",
    },
    {
      id: 2,
      text: "Memelihara kompetensi kerja di sector pengelola human capital yang unggul dan berdaya saing global.",
    },
    {
      id: 3,
      text: "Mengembangkan system sertifikasi profesi human capital management berbasis digital.",
    },
    {
      id: 4,
      text: "Mengembangkan dan memelihara skema-skema sertifikasi bidang Human Capital dlingkungan BUMN dengan profil kompetensi jabatan yang dipersyaratkan.",
    },
    {
      id: 5,
      text: "Menyediakan tenaga assessor kompetensi yang professional, berkualifikasi dan bersertifikasi sesuai dengan ruang lingkup sertifikasi LSP HCMI.",
    },
    {
      id: 6,
      text: "Menyiapkan Tempat Uji Kompetensi (TUK) yang terverifikasi sesuai dengan kebutuhan masing-masing skema Human Capital.",
    },
    {
      id: 7,
      text: "Menyiapkan dukungan teknologi informasi dan sumber daya manusia.",
    },
  ],
  about: {
    desc: "CV. HETY adalah perusahaan katering profesional yang berkomitmen untuk menghadirkan layanan kuliner terbaik bagi setiap momen istimewa Anda. Kami menyediakan berbagai layanan, termasuk Catering Service, Catering Pesta, Aqiqah, Nasi Kotak, Snack Box, dan masih banyak lagi.",
    letters: [
      {
        id: 1,
        text: "Akte Pendirian oleh Notaris Ratih Budiarti SH, sesuai Akta Nomor 4 tahun 2020.",
      },
      {
        id: 2,
        text: "Pengesahan dari Kementerian Hukum dan Ham nomor : AHU-0006573.AH.01.04 Tahun 2020 tanggal 8 April 2020.",
      },
      {
        id: 3,
        text: "Nomor Induk Berusaha nomor ; 0220106601103.",
      },
      {
        id: 4,
        text: "NPWP : 94.810.105.0-036.000.",
      },
      {
        id: 5,
        text: "Rekening Perusahaan : BRI 116701000254305 a.n LSP HCMI.",
      },
    ],
  },
  scheme: {
    description:
      "LSP HCMI mengacu pada skema sertifikasi berdasarkan paket kompetensi atau klaster. LSP HCMI memiliki 3 skema kompetensi yg mengacu pada SKKNI (SKKNI No.149 Tahun 2020, SKKNI No. 72 Tahun 2019) yaitu skema perencanaan human capital, skema pengembangan human capital, dan skema pengelolaan hubungan industrial.",
    list: [
      {
        id: 1,
        name: "Skema Perencanaan Human Capital",
        desc: "Skema Perencanaan Human Capital dengan menggunakan klaster kompetensi terdapat 5 unit kompetensi, sebagai berikut",
        units: [
          {
            id: 1,
            kode: "M.70SDM01.001.2",
            title:
              "Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)",
          },
          {
            id: 2,
            kode: "M.70SDM01.002.2",
            title: "Mengevaluasi Efektivitas Strategi dan Kebijakan MSDM",
          },
          {
            id: 3,
            kode: "M.70SDM01.004.2",
            title: "Merancang Desain Organisasi",
          },
          {
            id: 4,
            kode: "M.70SDM01.010.2",
            title: "Menyusun Uraian Jabatan",
          },
          {
            id: 5,
            kode: "M.70SDM01.012.2",
            title: "Menyusun Kebutuhan SDM",
          },
        ],
        pdf: pdfdefault,
      },
      {
        id: 2,
        name: "Skema Pengembangan Human Capital",
        desc: "Skema Pengembangan Human Capital dengan menggunakan klaster kompetensi terdapat 10 unit kompetensi, sebagai berikut",
        units: [
          {
            id: 1,
            kode: "M.70SDM01.001.2",
            title:
              "Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)",
          },
          {
            id: 2,
            kode: "M.70SDM01.013.2",
            title: "Menyusun Standar Operasional Prosedur (SOP) MSDM",
          },
          {
            id: 3,
            kode: "M.70SDM01.003.2",
            title: "Menetapkan Rencana Kegiatan dan Anggaran MSDM",
          },
          {
            id: 4,
            kode: "M.70SDM01.031.2",
            title: "Menyusun Kebutuhan Pembelajaran dan Pengembangan",
          },
          {
            id: 5,
            kode: "M.70SDM01.032.2",
            title: "Merancang Program Pembelajaran dan Pengembangan",
          },
          {
            id: 6,
            kode: "M.70SDM01.034.2",
            title:
              "Mengevaluasi Pelaksanaan Program Pembelajaran dan Pengembangan",
          },
          {
            id: 7,
            kode: "M.70SDM01.032.2",
            title: "Menyusun Kelompok Pekerja Bertalenta (Talent Pool)",
          },
          {
            id: 8,
            kode: "M.70SDM01.038.2",
            title:
              "Mengelola Program Pengembangan Kelompok Pekerja Bertalenta (Talent Pool)",
          },
          {
            id: 9,
            kode: "M.701001.040.01",
            title: "Mengelola Program Suksesi",
          },
          {
            id: 10,
            kode: "M.70SDM01.002.2",
            title: "Mengevaluasi Efektivitas Strategi dan Kebijakan MSDM",
          },
        ],
        pdf: pdfdefault,
      },
      {
        id: 3,
        name: "Skema Pengelolaan Hubungan Industrial",
        desc: "Skema Pengelolaan Hubungan Industrial dengan menggunakan klaster kompetensi terdapat 8 unit kompetensi, sebagai berikut",
        units: [
          {
            id: 1,
            kode: "M.70SDM01.001.2",
            title:
              "Merumuskan Strategi dan Kebijakan Manajemen Sumber Daya Manusia (MSDM)",
          },
          {
            id: 2,
            kode: "M.70SDM01.013.2",
            title: "Menyusun Standar Operasional Prosedur (SOP) MSDM",
          },
          {
            id: 3,
            kode: "M.70SDM01.003.2",
            title: "Menetapkan Rencana Kegiatan dan Anggaran MSDM",
          },
          {
            id: 4,
            kode: "M.70SDM01.031.2",
            title: "Menyusun Kebutuhan Pembelajaran dan Pengembangan",
          },
          {
            id: 5,
            kode: "M.70SDM01.032.2",
            title: "Merancang Program Pembelajaran dan Pengembangan",
          },
          {
            id: 6,
            kode: "M.70SDM01.034.2",
            title:
              "Mengevaluasi Pelaksanaan Program Pembelajaran dan Pengembangan",
          },
          {
            id: 7,
            kode: "M.70SDM01.037.2",
            title: "Menyusun Kelompok Pekerja Bertalenta (Talent Pool)",
          },
          {
            id: 8,
            kode: "M.70SDM01.038.2",
            title:
              "Mengelola Program Pengembangan Kelompok Pekerja Bertalenta (Talent Pool)",
          },
        ],
        pdf: pdfdefault,
      },
    ],
    picture: PictScheme,
  },
  requirements: [
    {
      id: 1,
      text: "Sertifikat yang Relevan / Surat atau Program Penghargaan / SK.Jabatan / Rekomendasi Pimpinan",
    },
    {
      id: 2,
      text: "Curriculum vitae",
    },
    {
      id: 3,
      text: "Ijazah",
    },
    {
      id: 4,
      text: "Bukti hasil kerja : produk / dokumen yang pernah dibuat",
    },
    {
      id: 5,
      text: "Pas foto 3x4 (4 lembar background merah)",
    },
    {
      id: 6,
      text: "KTP",
    },
    {
      id: 7,
      text: "Bahan presentasi sesuai dengan skema masing-masing",
    },
  ],
  legalBase: [
    {
      id: 1,
      text: "UU No.3 th.2003 tentang ketenagakerjaan.",
    },
    {
      id: 2,
      text: "PP RI no.23 th.2004 tentang BNSP.",
    },
    {
      id: 3,
      text: "PP RI no.31 th.2006 tentang sistem pelatihan kerja nasional.",
    },
    {
      id: 4,
      text: "Peraturan Presiden Republik Indonesia no.8 th.2012 tentang kerangka kualifikasi Nasional Indonesia.",
    },
    {
      id: 5,
      text: "Peraturan Menteri Tenaga Kerja dan Transmigrasi Republik Indonesia no.5 th.2012 tentang Sistem Standarisasi Kompetensi Kerja Nasional.",
    },
  ],
};

export default data;

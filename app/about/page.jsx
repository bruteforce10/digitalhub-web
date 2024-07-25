import { AnimatedBeamDemo } from "@/components/AnimatedBeamSection";
import Heading from "@/components/Heading";
import SectionHeading from "@/components/organism/SectionHeading";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fontInter } from "@/lib/fontInter";

const About = () => {
  const tabs = [
    {
      title: "Visi",
      value: "visi",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10   bg-white drop-shadow-md">
          <p>
            kami mempromosikan usaha anda memanfaatkan platform digital dan
            media sosial sebagai alat pemasaran yang inovatif. Teknologi sebagai
            alat untuk meningkatkan interaksi yang dipersonalisasi dengan
            pembeli bertujuan untuk menghasilkan koneksi otentik dan pertumbuhan
            ekonomi yang substansial.
          </p>
        </div>
      ),
    },
    {
      title: "Misi",
      value: "misi",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10   bg-white drop-shadow-md">
          <p>
            kami membantu pelaku usaha menjangkau luas pasar lokal di Indonesia
            dengan platform digital dan mencapai kesuksesan yang belum pernah
            terjadi sebelumnya melalui kolaborasi.
          </p>
        </div>
      ),
    },
  ];

  const aboutData = {
    aboutContent:
      "Program kami di design untuk memberdayakan perusahaan, UMKM, dan talenta muda dengan menyediakan pendampingan 101, inkubasi, streaming langsung, jaringan, & koneksi, serta alat, sumber daya, juga dukungan yang dibutuhkan untuk berkembang dalam ekonomi digital saat ini sesuai dengan visi misi kami.",
    pelayananKamiContent: (
      <div className="w-full mx-auto leading-relaxed">
        Kami melakukan penelitian demografi, psikografi, dan pola perilaku
        pembeli untuk memahami kebutuhan dan kebiasaan mereka, serta
        mengidentifikasi target audiens. Kami mengembangkan strategi pemasaran
        dan konten yang disempurnakan menggunakan
        <span className="inline-flex mx-2">
          <div className="bg-clip-text bg-gradient-to-r flex gap-1 items-center  from-[#E96E4D] to-pink-500 text-transparent font-bold">
            <Image src={"/spark-icon.svg"} alt="logo" width={12} height={12} />
            AI di media sosial
            <Image src={"/spark-icon.svg"} alt="logo" width={12} height={12} />
          </div>
        </span>
        untuk tindakan pelanggan yang dipersonalisasi dan dioptimalkan.
        Perdagangan daring dan streaming langsung memungkinkan pembelian
        real-time, menawarkan peluang penjualan baru bagi bisnis.
      </div>
    ),
    accordionContent: [
      {
        title: "Bagaimana cara berlangganan layanan Digital LIVEhub UMKM?",
        description:
          "Anda dapat memilih paket layanan yang kami sediakan, seperti : Program Live Streaming, Program Social Media Management, Program Marketplace Manajemen dan Program Full Paket Cuan. Anda bisa ikuti setiap instruksi hingga berhasil membeli pilihan paket layanan yang usaha anda butuhkan.",
      },
      {
        title:
          "Apakah saya perlu memiliki peralatan sendiri untuk menggunakan layanan studio live?",
        description:
          "Tidak, Studio kami dilengkapi dengan peralatan yang lengkap, termasuk kamera, lighting, dan mikrofon. Tim kami juga siap membantu usaha anda selama sesi live streaming atau produksi konten.",
      },
      {
        title: "Apakah Digital LIVEhub UMKM hanya untuk UMKM tertentu?",
        description:
          "Kami terbuka untuk semua jenis UMKM, mulai dari usaha kecil hingga yang lebih besar. Layanan kami dirancang untuk membantu bisnis di berbagai sektor dan ukuran.",
      },
      {
        title: "Berapa biaya untuk menggunakan layanan Digital Live Hub?",
        description:
          "Biaya layanan bervariasi tergantung pada paket yang dipilih dan kebutuhan spesifik bisnis Anda. Untuk informasi lebih lanjut mengenai harga Anda bisa temukan informasinya pada halaman web digital LIVEhub UMKM www.digitallivehubumkm.co.id/#paket",
      },
      {
        title:
          "Bagaimana jika saya memiliki pertanyaan atau masalah setelah mendaftar?",
        description:
          "Tim kami siap membantu Anda dengan pertanyaan atau masalah apa pun. Anda dapat menghubungi kami melalui email: info@digitallivehubumkm.co.id & Whatsapp: +62 898-0961-999",
      },
    ],
  };

  const { pelayananKamiContent, aboutContent, accordionContent } = aboutData;

  return (
    <div className="mt-12  md:mt-16  ">
      <div className="flex flex-col-reverse lg:flex-row sm:gap-12 gap-4 max-w-screen-xl container px-9">
        <div className="flex flex-col sm:gap-8 gap-8">
          <div className="space-y-4 ">
            <Heading
              tag="h2"
              className="text-4xl max-sm:text-3xl max-sm:text-center h-11 capitalize bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500 text-transparent"
            >
              Tujuan Kami
            </Heading>
            <p>{aboutContent}</p>
          </div>
          <Tabs tabs={tabs} />
        </div>
        <Image
          src={"/tujuan-kami.webp"}
          alt="logo"
          width={500}
          height={500}
          className="rounded-xl w-full object-cover"
        />
      </div>
      <section
        id="service"
        className="py-20 mt-20 max-lg:mt-[250px] max-sm:mt-[420px] bg-[url('/cover-pelayanan-kami.webp')] bg-no-repeat bg-cover"
      >
        <div className="max-w-screen-xl container px-8">
          <Heading
            tag="h1"
            className="text-5xl max-sm:text-3xl max-sm:text-center capitalize text-white"
          >
            Pelayanan Kami
          </Heading>
        </div>
      </section>
      <div className="flex items-center gap-12 max-sm:mt-8 sm:mt-12 lg:gap-4 justify-center max-sm:text-center max-w-screen-xl  max-lg:flex-col-reverse container px-9">
        {pelayananKamiContent}
        <AnimatedBeamDemo />
      </div>
      <div className="max-w-screen-xl container px-8 space-y-12 mt-20">
        <SectionHeading
          headTwo={"FAQs"}
          description={
            "Temukan jawaban untuk pertanyaan umum tentang layanan kami di sini."
          }
          classNameDescription="sm:max-w-2xl max-sm:text-sm"
        />
        <Accordion
          type="single"
          collapsible
          className="max-w-2xl space-y-12 mx-auto"
        >
          {accordionContent.map((data, index) => (
            <AccordionItem key={data.title} value={`item-${index}`}>
              <AccordionTrigger className="sm:text-start">
                {data.title}
              </AccordionTrigger>
              <AccordionContent>{data.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default About;

import Heading from "@/components/Heading";
import React from "react";
import Card from "./Card";

const dataProgramKami = [
  {
    title: "Mentoring 101",
    heading: "Fondasi kesuksesan",
    images: "/program-kami/pondasi.jpg",
    desc: `Program Mentoring 101 kami memasangkan Anda dengan para profesional berpengalaman untuk bimbingan dan dukungan.
    <br />
    <br />
    Program ini menawarkan sesi tatap muka, lokakarya kelompok, dan akses ke berbagai sumber daya. Ideal bagi para pengusaha, calon pemimpin, atau mereka yang ingin meningkatkan keterampilan, para mentor memberikan wawasan berharga untuk pertumbuhan pribadi dan profesional.
`,
  },
  {
    title: "Incubation",
    heading: "Membina ide-ide inovatif",
    images: "/program-kami/idea.jpg",
    desc: `Program Mentoring 101 kami memasangkan Anda dengan para profesional berpengalaman untuk bimbingan dan dukungan.
    <br />
    <br />
    Program ini menawarkan sesi tatap muka, lokakarya kelompok, dan akses ke berbagai sumber daya. Ideal bagi para pengusaha, calon pemimpin, atau mereka yang ingin meningkatkan keterampilan, para mentor memberikan wawasan berharga untuk pertumbuhan pribadi dan profesional.
`,
  },
  {
    title: "Live streaming",
    heading: "Terhubung secara real-time",
    images: "/program-kami/social-media.jpg",
    desc: `Streaming langsung sangat penting untuk berbagi pengetahuan dan melibatkan pemirsa secara global.
    <br />
    <br />
    Layanan kami menawarkan teknologi untuk siaran langsung berkualitas tinggi, fitur-fitur interaktif seperti obrolan langsung dan jajak pendapat, dan platform yang mudah digunakan untuk berbagai acara.
`,
  },
  {
    title: "Networking & Connections",
    heading: "Membangun  hubungan yang berharga",
    images: "/program-kami/networking.jpg",
    desc: `Jaringan sangat penting untuk kesuksesan karir dan bisnis. Program kami memungkinkan para pemimpin industri dan individu yang memiliki pemikiran yang sama untuk bertemu melalui acara mixers, breakfast networking, dan meetups, yang mendorong terjalinnya kemitraan dan peluang-peluang baru.
`,
  },
];

const ProgramKami = () => {
  return (
    <div className="mt-12  md:mt-16">
      <section className="py-20 bg-[url('/bg-pelayanan-kami.webp')] bg-no-repeat bg-cover">
        <div className="max-w-screen-xl container px-8">
          <Heading
            tag="h1"
            className="text-5xl max-sm:text-3xl max-sm:text-center capitalize text-white"
          >
            Program Kami
          </Heading>
        </div>
      </section>
      <section className="mt-20 max-w-screen-xl space-y-24 container px-8">
        {dataProgramKami.map((data) => (
          <Card key={data.title} {...data} />
        ))}
      </section>
    </div>
  );
};

export default ProgramKami;

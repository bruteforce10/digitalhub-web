import { AnimatedBeamDemo } from "@/components/AnimatedBeamSection";
import Heading from "@/components/Heading";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import React from "react";

const About = () => {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10   bg-white drop-shadow-sm">
          <p>
            Kami mempromosikan usaha Anda menggunakan platform digital dan media
            sosial sebagai alat pemasaran inovatif. Teknologi kami meningkatkan
            interaksi yang dipersonalisasi dengan pembeli untuk menciptakan
            koneksi otentik dan pertumbuhan ekonomi yang substansial.
          </p>
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10   bg-white drop-shadow-sm">
          <p>
            Kami dummy ssss usaha Anda menggunakan platform digital dan media
            sosial sebagai alat pemasaran inovatif. Teknologi kami meningkatkan
            interaksi yang dipersonalisasi dengan pembeli untuk menciptakan
            koneksi otentik dan pertumbuhan ekonomi yang substansial.
          </p>
        </div>
      ),
    },
  ];

  const aboutData = {
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
  };

  const { pelayananKamiContent } = aboutData;

  return (
    <div className="mt-12  md:mt-16  ">
      <div className="flex flex-col-reverse lg:flex-row sm:gap-12 gap-4 max-w-screen-xl container px-9">
        <div className="flex flex-col sm:gap-8 gap-4">
          <div className="space-y-4 ">
            <Heading
              tag="h2"
              className="text-4xl max-sm:text-3xl max-sm:text-center h-11 capitalize bg-clip-text bg-gradient-to-r from-[#E96E4D] to-pink-500 text-transparent"
            >
              Tujuan Kami
            </Heading>
            <p>
              Program kami di design untuk memberdayakan perusahaan, UMKM, dan
              talenta muda dengan menyediakan pendampingan 101, inkubasi,
              streaming langsung, jaringan, & koneksi, serta alat, sumber daya,
              juga dukungan yang dibutuhkan untuk berkembang dalam ekonomi
              digital saat ini sesuai dengan visi misi kami.
            </p>
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
      <section className="py-20 mt-20 max-lg:mt-[250px] max-sm:mt-[370px] bg-[url('/cover-pelayanan-kami.webp')] bg-no-repeat bg-cover">
        <div className="max-w-screen-xl container px-8">
          <Heading
            tag="h1"
            className="text-5xl max-sm:text-3xl max-sm:text-center capitalize text-white"
          >
            Pelayanan Kami
          </Heading>
        </div>
      </section>
      <section className="flex items-center gap-12 lg:gap-4 justify-center max-sm:text-center max-w-screen-xl  max-lg:flex-col-reverse container px-9">
        {pelayananKamiContent}
        <AnimatedBeamDemo />
      </section>
    </div>
  );
};

export default About;

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Hero } from "@/components/home-sections/Hero";
import { Menu } from "@/components/home-sections/Menu";
import { HowWeDo } from "@/components/home-sections/HowWeDo";
import { Testimonial } from "@/components/home-sections/Testimonial";
import { Contact } from "@/components/home-sections/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramen</title>
        <meta name="description" content="Ramen!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Menu />
      <HowWeDo />
      <Testimonial />
      <Contact />
      {/* <h1 className='bg-orange-500 text-slate-300'>Resto</h1> */}
    </>
  );
}

import Image from "next/image";
import Navbar from "./Sections/Navbar";
import Homecomoponet from "./Sections/Home";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Fotter";

export default function Home() {
  return (
  <>
    <Navbar/>

    <Homecomoponet />

    <Project/>

    <Contact/>

    <Footer/>

  </>
  );
}

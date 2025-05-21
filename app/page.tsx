import Image from "next/image";
import Navbar from "./Sections/Navbar";
import Homecomoponet from "./Sections/Home";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Fotter";
import About from "./Sections/About";

export default function Home() {
  return (
  <>
    <Navbar/>

    <Homecomoponet />

    
    <About />
    <Project/>

    <Contact/>

    <Footer/>

  </>
  );
}

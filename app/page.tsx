
import Navbar from "./Sections/Navbar";
import Homecomoponet from "./Sections/Home";
import Project from "./Sections/Project";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Fotter";
import About from "./Sections/About";
import Volunteer from "./Sections/Volunteer";

export default function Home() {
  return (
  <>
    <Navbar/>

    <Homecomoponet />

    
    <About />
    <Project/>
    <Volunteer />

    <Contact/>

    <Footer/>

  </>
  );
}

import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import Choose from "./components/Choose";
import Chef from "./components/Chef";
import Menu from "./components/Menu";
import Meet from "./components/Meet";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <div>
    <Header />
    <Hero />
    <About />
    <Category />
    <Choose />
    <Chef />
    <Menu />
    <Meet />
    <Testimonials/>
    <Blog />
    {/* <Footer /> */}
  </div>
  );
}

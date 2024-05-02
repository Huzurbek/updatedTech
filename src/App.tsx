// import './App.css'

import FooterSection from "./sections/Footer";
import FrequentlySection from "./sections/Frequently";
import Galary from "./sections/Galery";
import WhyYouSection from "./sections/WhyYouSection";
import Tools from "./sections/Tools";
import Testimonial from "./sections/Testimonial";
import Partners from "./sections/Partners";
import Features from "./sections/Features";
import Course from "./sections/Course";

import "./style.sass";
import About from "./sections/About";
import Students from "./sections/Students";
import Header from "./sections/Header";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Header />

      <div style={{ maxWidth: 1240, padding: "0 20px", margin: "0 auto" }}>
        <Students />
        <About />
        <Course />
        <Features />
        <Partners />
        <Testimonial />
        <Galary />
      </div>

      <Tools />
      <div style={{ maxWidth: 1093, margin: "0 auto", padding: "0 20px" }}>
        <FrequentlySection />
      </div>
      <WhyYouSection />
      <div
        style={{
          background: "#0A0C26",
        }}
      >
        <FooterSection />
      </div>
    </div>
  );
}

export default App;

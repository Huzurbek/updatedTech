import { LabelText } from "../../components/labelText";
import { Subtitle } from "../../components/subtitle";
import {
  TTestimonial,
  TestimonialCard,
} from "../../components/testimonialCard";
import { Title } from "../../components/title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.sass";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data: TTestimonial[] = [
    {
      id: 1,
      profile: "Max.png",
      img: "rakuten.png",
      comment: `"My instructors were truly top tier educators, and really cared about my success. I can't say enough positive things about my experience at Techcenture.I feel it gave me the boost I needed to change my life and launch into a new career with confidence and momentum."`,
      name: "MAX",
      position: "Automation Engineer",
    },
    {
      id: 2,
      profile: "Sabi.png",
      img: "wellsFargo.png",
      comment: `The instructors are incredibly helpful, they are always there to help when you need them. Their primary goal is to help you succeed and land your dream job.`,
      name: "SABI",
      position: "Senior SDET",
    },
    {
      id: 3,
      profile: "Sammy.png",
      img: "sony.png",
      comment: `I was enrolled  online and upon completion of the program,instructors worked so hard to prepare us for the job market, most of my classmates including me landed our dream jobs.`,
      name: "SAM",
      position: "QA Engineer",
    },
    {
      id: 4,
      profile: "Linda.png",
      img: "nike.png",
      comment: `The projects were my favorite part of the curriculum and we graduated by completing some great projects at the end of the course which were very helpful in our learning. I recommend TechCenture Academy if you are serious about making a career change, they are very helpful on job search and interview support too.`,
      name: "LINDA",
      position: "Senior SDET",
    },
    {
      id: 5,
      profile: "Denise.png",
      img: "blueShieldLogo.png",
      comment: `They give you all the tools you need to be successful in your future career.`,
      name: "DENISE",
      position: "QA Analyst",
    },
  ];
  return (
    <div className="testimonial-container">
      <LabelText title="Testimonial" />

      <Title>
        Many Satisfied <span style={{ color: "#B776F8" }}>Graduates</span>
      </Title>
      <Subtitle>
        Lorem Ipsumis simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Subtitle>

      <div className="slider-container">
        <Slider {...settings}>
          {data.map((el) => (
            <TestimonialCard info={el} key={el.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;

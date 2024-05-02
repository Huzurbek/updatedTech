import { LabelText } from "../../components/labelText";
import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";
import "./style.sass";

const About = () => {
  return (
    <div className="about">
      <LabelText title="About Us" className="about__label" />
      <div className="about__header">
        <Title className={"medium"} style={{ textAlign: "left" }}>
          What Is TechCenture <br></br>Academy{" "}
          <span style={{ color: "#B776F8" }}>?</span>
        </Title>
        <Subtitle
          style={{
            textAlign: "left",
            maxWidth: 550,
            margin: 0,
            textTransform: "none",
            fontSize: "18px",
          }}
        >
          TechCenture Academy provides training and support to anyone who is
          ready for the challenge of starting a new tech and healthcare careers.
          We offer guidance and instruction that lead our students to tech and
          healthcare jobs in the best companies.
        </Subtitle>
      </div>
      <div className="about__content"></div>
    </div>
  );
};

export default About;

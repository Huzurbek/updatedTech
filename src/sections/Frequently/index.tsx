import Accordion from "../../components/accordion";
import { LabelText } from "../../components/labelText";
import { Title } from "../../components/title";
import "./style.sass";
const accordionData = [
  {
    question:
      "1. DO I need Tech or Nursing background to apply with Techcenture ?",
    answer:
      "You do not need to have an IT experience to start this course. We will navigate you through the process and help you to learn all the materials in timely manner.",
  },
  {
    question: "2. Is my laptop good enough for coding?",
    answer:
      "You do not need to have an IT experience to start this course. We will navigate you through the process and help you to learn all the materials in timely manner.",
  },
  {
    question: "3. Will I work on projects?",
    answer:
      "You do not need to have an IT experience to start this course. We will navigate you through the process and help you to learn all the materials in timely manner.",
  },
  {
    question: "4. Where will I get training materials?",
    answer:
      "You do not need to have an IT experience to start this course. We will navigate you through the process and help you to learn all the materials in timely manner.",
  },
  {
    question: "5. Would TechCenture Academy provide career support?",
    answer:
      "You do not need to have an IT experience to start this course. We will navigate you through the process and help you to learn all the materials in timely manner.",
  },
];
const FrequentlySection = () => {
  return (
    <div className="frequently-contaner">
      <div className="frequently-contaner__header">
        <div>
          <LabelText title="F&Q" className="withBg" />
          <Title className="frequently-contaner__custom-title">
            Frequently Asked <br></br>
            <span style={{ color: "#B776F8" }}>Questions.</span>
          </Title>
        </div>
        <div style={{}} className="frequently-contaner__right-header">
          <img src={"../assets/frequently-bg.png"} alt="Company Logo" />
        </div>
      </div>

      <div style={{ maxWidth: 953 }}>
        <Accordion accordianData={accordionData} />
      </div>
    </div>
  );
};

export default FrequentlySection;

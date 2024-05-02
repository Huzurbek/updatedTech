import { CourseCard } from "../../components/courseCard";
import { LabelText } from "../../components/labelText";
import { Title } from "../../components/title";
import "./style.sass";

const COURSE_LIST = [
  {
    id: 1,
    img: "java.png",
    title: "Full Stack Java Automation",
    body: "SDET program is an intensive training program designed to equip participants with an all-round skill set required for a software test professional in the Agile continuous integration projects.",
  },
  {
    id: 2,
    img: "python.png",
    title: "Full Stack Python Automation",
    body: "SDET program is an intensive training program designed to equip participants with an all-round skill set required for a software test professional in the Agile continuous integration projects.",
  },
  {
    id: 3,
    img: "automation.png",
    title: "Full Stack Cypress Automation",
    body: "SDET program is an intensive training program designed to equip participants with an all-round skill set required for a software test professional in the Agile continuous integration projects.",
  },
  {
    id: 4,
    img: "analytics.png",
    title: "Data Analytics",
    body: "SDET program is an intensive training program designed to equip participants with an all-round skill set required for a software test professional in the Agile continuous integration projects.",
  },
  {
    id: 5,
    img: "nursing.png",
    title: "Nursing Informatics",
    body: "SDET program is an intensive training program designed to equip participants with an all-round skill set required for a software test professional in the Agile continuous integration projects.",
  },
  {
    id: 6,
    img: "salesforce.png",
    title: "Salesforce and BA/BI",
    body: "SDET program is an intensive training program designed to equip participants with an all-round skill set required for a software test professional in the Agile continuous integration projects.",
  },
];
const Course = () => {
  return (
    <div className="course">
      <LabelText title="Course" />
      <Title>Our Courses</Title>
      <div className="course__wrapper">
        {COURSE_LIST.map((item) => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
};

export default Course;

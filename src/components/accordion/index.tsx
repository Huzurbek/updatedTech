import React, { useRef, useState } from "react";
import "./style.sass";

export type TAccordian = {
  question: string;
  answer: string;
};

//  accordionitem component
interface IAccordianProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}
const AccordionItem: React.FC<IAccordianProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <div className="accordion_wrapper">
      <div
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="question-content">{question}</div>
        {isOpen ? (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.4569 21.5986C29.0976 20.9579 29.0976 19.9191 28.4569 19.2784L19.1601 9.98157C18.5194 9.34085 17.4806 9.34085 16.8399 9.98157L7.54302 19.2784C6.90233 19.9191 6.90233 20.9579 7.54302 21.5986C8.18372 22.2393 9.22252 22.2393 9.86322 21.5986L18 13.4618L26.1368 21.5986C26.7776 22.2393 27.8162 22.2393 28.4569 21.5986Z"
              fill="#5F45F2"
            />
          </svg>
        ) : (
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M28.4569 13.8096C29.0976 14.4503 29.0976 15.4891 28.4569 16.1298L19.1601 25.4266C18.5194 26.0673 17.4806 26.0673 16.8399 25.4266L7.54302 16.1298C6.90233 15.4891 6.90233 14.4503 7.54302 13.8096C8.18372 13.1689 9.22252 13.1689 9.86322 13.8096L18 21.9464L26.1368 13.8096C26.7776 13.1689 27.8162 13.1689 28.4569 13.8096Z"
              fill="#727272"
            />
          </svg>
        )}
      </div>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer-content">{answer}</div>
      </div>
    </div>
  );
};
interface IAccordian {
  accordianData: TAccordian[];
  style?: React.CSSProperties;
}
const Accordion: React.FC<IAccordian> = ({ accordianData, style }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={{ ...style }}>
      {accordianData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;

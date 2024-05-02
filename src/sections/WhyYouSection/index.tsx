import "./style.sass";
const WhyYouSection = () => {
  return (
    <div
      className="whyYou-container"
      style={{
        backgroundImage: `url('../assets/why-you-bg.png')`,
      }}
    >
      <div className="whyYou-container__content">
        <div className="whyYou-container-title">
          So, why you're waiting for?
        </div>
        <button style={{ color: "white" }}>Register</button>
      </div>
    </div>
  );
};

export default WhyYouSection;

import { LabelText } from "../../components/labelText";
import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";
import "./style.sass";

const Features = () => {
  return (
    <div className="feature">
      <LabelText title="Features" className="withBg" />
      <Title>Why Choose Us?</Title>
      <Subtitle>
        Lorem Ipsumis simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Subtitle>

      <div className="feature__card-wrapper margin-b">
        <div className="feature-card block1">
          <h5 className="feature-card__title">hands on projects</h5>
          <p className="feature-card__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature-card block2">
          <h5 className="feature-card__title neon">interview support</h5>
          <p className="feature-card__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="feature__card-wrapper">
        <div className="feature-card block3">
          <h5 className="feature-card__title neon">Resume support</h5>
          <p className="feature-card__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="feature-card block4">
          <h5 className="feature-card__title">market support</h5>
          <p className="feature-card__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

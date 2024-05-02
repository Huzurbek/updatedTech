import { LabelText } from "../../components/labelText";
import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";
import "./style.sass";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners__header">
        <LabelText title="Partners" />

        <Title className="partners__custom-title">Affiliated Partners</Title>

        <Subtitle className="partners__custom-subtitle">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Subtitle>
      </div>
      <div className="partners__content">
        <div>
          <img className="partner-img" src={"../assets/partner1.png"} />
        </div>
        <div>
          <img className="partner-img" src={"../assets/partner2.png"} />
        </div>
        <div>
          <img className="partner-img" src={"../assets/partner3.png"} />
        </div>
      </div>
    </div>
  );
};

export default Partners;

import { LabelText } from "../../components/labelText";
import { Title } from "../../components/title";
import "./style.sass";

const Galary = () => {
  return (
    <div className="galary">
      <LabelText title="Gallery" className="withBg" />

      <div className="galary__header">
        <div>
          <Title style={{ textAlign: "left" }}>
            Moments with our <br></br>Students{" "}
          </Title>
        </div>
        <div className="galary__sign">
          <img src={"../assets/galary-header-bg.png"} />
        </div>
      </div>

      <div className="galary__content">
        <div className="first-column">
          <div className="rowStyle">
            <div className="galary__img-wrapper">
              <img src={"../assets/galary1.png"} />
            </div>
            <div className="galary__img-wrapper">
              {" "}
              <img src={"../assets/galary2.png"} />
            </div>
          </div>
          <div className="rowStyle">
            <div className="galary__img-wrapper">
              <img src={"../assets/galary4.png"} />
            </div>
            <div className="galary__img-wrapper">
              <img src={"../assets/galary5.png"} />
            </div>
          </div>
        </div>
        <div className="first-column galary-add-column">
          <div className="galary__img-wrapper">
            <img src={"../assets/galary3.png"} />
          </div>
          <div className="galary__img-wrapper">
            <img src={"../assets/galary6.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;

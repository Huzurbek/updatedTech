import { Subtitle } from "../../components/subtitle";
import { Title } from "../../components/title";
import "./style.sass";

const Tools = () => {
  return (
    <div className="integration-container">
      <div
        className="integration-container__bg-tool"
        style={{
          backgroundImage: `url('../assets/tools-bg.png')`,
        }}
      >
        <Title className="large">
          Educational Tools & <br></br>Platform Integrations
        </Title>
        <Subtitle>
          TechCenture Academy will train you on the latest cutting edge tools
          and technologies that are in demand in the market.
        </Subtitle>
      </div>
    </div>
  );
};

export default Tools;

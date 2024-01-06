import { FC } from "react";
import styled from "styled-components";
import SwiperBlock from "./SwiperBlock";

const WhyWe: FC = () => {
  return (
    <WhyWeStyle>
      <div className="container">
        <h2>Почему именно мы</h2>
        <SwiperBlock />
      </div>
    </WhyWeStyle>
  );
};

const WhyWeStyle = styled.section`
  margin-bottom: 107px;

  .container {
    padding-bottom: 578px;
    background: url(./images/why_we_back.png) no-repeat bottom/contain;
    background-size: 98%;
  }

  @media (max-width: 1320px) {
    .container {
      padding-bottom: calc(100vw * 575 / 1307);
    }
  }
`;

export default WhyWe;

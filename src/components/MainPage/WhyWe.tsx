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

  @media (max-width: 810px) {
    margin-bottom: 80px;
		
    h2 {
      font-size: 5.6rem;
      width: 54.8rem;
    }
  }

  @media (max-width: 530px) {
    .container {
      background: url(./images/why_we_back_mobile.svg) no-repeat bottom right;
      padding-bottom: calc(100vw * 392 / 360);
      background-size: 98%;
    }
  }
`;

export default WhyWe;

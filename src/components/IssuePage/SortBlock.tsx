import { FC } from "react";
import styled from "styled-components";
import SwiperBlock from "./SwiperBlock";

const SortBlock: FC = () => {
  return (
    <SortBlockStyle>
      <div className="container">
        <h2>Общая сводка</h2>
        <p className="subtitle">Найдено 4 221 вариантов</p>
        <SwiperBlock />
      </div>
    </SortBlockStyle>
  );
};

const SortBlockStyle = styled.section`
  h2 {
    margin-bottom: 17px;
  }

  .subtitle {
    color: #949494;
    font-size: 18px;
    letter-spacing: 0.36px;
    margin-bottom: 27px;
  }
`;

export default SortBlock;

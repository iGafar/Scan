import { FC } from "react";
import styled from "styled-components";
import SwiperBlock from "./SwiperBlock";

const SortBlock: FC = () => {
  return (
    <SortBlockStyle>
      <div className="container">
        <div className="top">
          <h1>Ищем. Скоро будут результаты</h1>
          <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
        </div>
        <h2>Общая сводка</h2>
        <p className="subtitle">Найдено 4 221 вариантов</p>
        <SwiperBlock />
      </div>
    </SortBlockStyle>
  );
};

const SortBlockStyle = styled.section`
  .top {
    background: url(./issue_back.png) no-repeat right/contain;
    /* background-position: right; */
    padding: 69px 0 127px;
    h1 {
      width: 509px;
      margin-bottom: 20px;
    }

    p {
      width: 390px;
      font-size: 20px;
      letter-spacing: 0.2px;
    }
  }

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

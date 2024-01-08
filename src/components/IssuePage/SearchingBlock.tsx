import { FC } from "react";
import styled from "styled-components";

const SearchingBlock: FC = () => {
  return (
    <SearchingBlockStyle>
      <div className="container">
        <h1>Ищем. Скоро будут результаты</h1>
        <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
      </div>
    </SearchingBlockStyle>
  );
};

const SearchingBlockStyle = styled.section`
  .container {
    background: url(./images/issue_back.svg) no-repeat right/contain;
    padding-top: 69px;
    padding-bottom: 127px;
    h1 {
      max-width: 509px;
      margin-bottom: 36px;
      font-size: max(4rem, 28px);
      letter-spacing: 1.6px;
    }

    p {
      max-width: 390px;
      font-size: max(2rem, 18px);
      letter-spacing: 0.2px;
      margin-bottom: 26px;
    }
  }

  @media (max-width: 900px) {
    .container {
      background-size: 60%;
    }
  }

  @media (max-width: 810px) {
    margin-bottom: 59px;
    .container {
      padding-top: 11px;
      padding-bottom: calc(100vw * 369 / 552);
      background-size: 94%;
      background-position: bottom;

      h1 {
        letter-spacing: 0.28px;
        margin-bottom: 21px;
      }
    }
  }
`;

export default SearchingBlock;

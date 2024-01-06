import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DataBlock: FC = () => {
  return (
    <DataBlockStyle>
      <div className="container">
        <div>
          <h1>
            сервис по поиску публикаций<br></br>о компании<br></br>по его ИНН
          </h1>
          <p>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>
          <Link to={"/search"}>
            <button>Запросить данные</button>
          </Link>
        </div>
      </div>
    </DataBlockStyle>
  );
};

const DataBlockStyle = styled.section`
  margin-bottom: 10.9rem;

  .container {
    display: flex;
    align-items: center;
    padding-top: 6.9rem;
    padding-bottom: 9rem;
    background: url(./images/main_back.png) no-repeat bottom/contain;
    background-position: right;
  }

  .back {
    width: 50vw;
    img {
      width: 100%;
    }
  }

  h1 {
    max-width: 72rem;
    margin-bottom: 2rem;
    font-size: 6rem;
    letter-spacing: 0.06rem;
  }

  p {
    max-width: 53.5rem;
    font-size: 2rem;
    letter-spacing: 0.02rem;
    margin-bottom: 7rem;
  }

  button {
    width: min(33.5rem, 100%);
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.extra3};
    color: ${(props) => props.theme.colors.main3};
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.022rem;
    padding: 1.6rem 0;
    transition: all 300ms linear;

    &:hover {
      background: ${(props) => props.theme.colors.main1};
    }
    &:active {
      opacity: 0.7;
    }
  }

  @media (max-width: 800px) {
    .container {
      background-position: bottom;
      padding-bottom: calc(100vw * 620 / 629);
    }
  }
`;

export default DataBlock;

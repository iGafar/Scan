import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DataBlock: FC = () => {
  return (
    <DataBlockStyle>
      <div className="container">
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
    </DataBlockStyle>
  );
};

const DataBlockStyle = styled.section`
  margin-bottom: 10.9rem;

  .container {
    padding-top: 6.9rem;
    padding-bottom: 9rem;
    background: url(./images/main_back.png) no-repeat bottom/contain;
    background-position: right;
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
    width: 335px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    color: ${(props) => props.theme.colors.main3};
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.022rem;
    padding: 16px 0;
    transition: all 300ms linear;

    &:hover {
      background: ${(props) => props.theme.colors.main1};
    }
    &:active {
      opacity: 0.7;
    }
  }

  @media (max-width: 810px) {
    padding-top: 4rem;
    margin-bottom: 11.8rem;

    .container {
      background-position: bottom;
      padding-top: 0;
      padding-bottom: calc(100vw * 620 / 629);
    }

    h1 {
      font-size: 5.6rem;
      margin-bottom: 3.8rem;
    }

    p {
      font-size: 3.6rem;
      margin-bottom: 6.4rem;
      width: 65.4rem;
    }
  }

	@media (max-width: 450px) {
		button {
			width: 100%;
		}
	}
`;

export default DataBlock;

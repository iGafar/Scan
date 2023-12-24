import { FC } from "react";
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
          <button>Запросить данные</button>
        </div>
      </div>
    </DataBlockStyle>
  );
};

const DataBlockStyle = styled.section`
  margin-bottom: 109px;

  .container {
    display: flex;
    align-items: center;
    padding-top: 69px;
    padding-bottom: 90px;
    background: url("/public/main_back.png") no-repeat bottom/contain;
    background-position: right;
  }

  .back {
    width: 50vw;
    img {
      width: 100%;
    }
  }

  h1 {
    max-width: 743px;
    margin-bottom: 20px;
    font-size: 60px;
    letter-spacing: 0.6px;
  }

  p {
    max-width: 534px;
    font-size: 20px;
    letter-spacing: 0.2px;
    margin-bottom: 70px;
  }

  button {
    width: min(335px, 100%);
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    color: ${(props) => props.theme.colors.main3};
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.22px;
    padding: 16px 0;
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

	@media (max-width: 375px) {
		h1 {
			font-size: 28px;
		}
	}
`;

export default DataBlock;

import { rates, IRate } from "constants/index";
import { FC } from "react";
import styled from "styled-components";

const Rates: FC = () => {
  return (
    <RatesStyle>
      <div className="container">
        <h2>наши тарифы</h2>

        <div className="rates">
          {rates.map((rate: IRate, index) => {
            return (
              <RateStyle key={index}>
                <div className="head">
                  <h3>{rate.name}</h3>
                  <p>{rate.description}</p>
                  <img src={rate.img} alt={rate.name} />
                </div>
                <div className="body">
                  <p className="price">
                    <span>{rate.price}</span>
                    <span className="crossed-out">{rate.full_price}</span>
                  </p>
                  <p className="installment">{rate.installment}</p>
                  <h4>В тариф входит:</h4>
                  <ul>
                    {rate.includes.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                  <button>Подробнее</button>
                </div>
              </RateStyle>
            );
          })}
        </div>
      </div>
    </RatesStyle>
  );
};

const RatesStyle = styled.section`
  margin-bottom: 118px;

  h2 {
    margin-bottom: 70px;
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;
    margin-top: auto;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    letter-spacing: 0.18px;
  }

  ul {
    margin-bottom: 55px;
  }

  li {
    margin-left: 28px;
    margin-bottom: 5px;
    position: relative;

    &::before {
      content: url(./images/icons/check.svg);
      position: absolute;
      left: -28px;
    }
  }

  button {
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    width: 100%;
    color: ${(props) => props.theme.colors.main3};
    padding: 18px 0;
    transition: all 300ms linear;

    &:hover {
      background: ${(props) => props.theme.colors.main1};
    }
    &:active {
      opacity: 0.7;
    }
  }

  .installment {
    margin-bottom: 59px;
  }

  .rates {
    display: flex;
    justify-content: space-between;
  }
`;

const RateStyle = styled.div`
  width: 415px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  .head {
    position: relative;
    padding: 30px 0 34px 30px;
    border-radius: 10px 10px 0px 0px;

    img {
      position: absolute;
      right: 10px;
      top: 0;
    }
  }

  .body {
    padding: 33px 15px 34px 30px;
    flex: 1;
    display: flex;
    flex-direction: column;

    .price {
      font-size: 25px;
      font-weight: 500;
      letter-spacing: 0.25px;
      margin-bottom: 10px;

      .crossed-out {
        margin-left: 19px;
        opacity: 0.5;
        text-decoration: line-through;
      }
    }
  }

  &:nth-child(1) .head {
    background-color: ${(props) => props.theme.colors.extra1};

    img {
      top: 11px;
    }
  }

  &:nth-child(2) .head {
    background-color: ${(props) => props.theme.colors.extra2};
  }

  &:nth-child(3) .head {
    background-color: ${(props) => props.theme.colors.main2};
    color: ${(props) => props.theme.colors.main3};

    img {
      top: 23px;
    }
  }
`;

export default Rates;

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
                  <div>
                    <h3>{rate.name}</h3>
                    <p>{rate.description}</p>
                  </div>
                  <picture>
                    <img src={rate.img} alt={rate.name} />
                  </picture>
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
  margin-bottom: 11.8rem;

  h2 {
    margin-bottom: 7rem;
  }

  .rates {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3.6rem 10px;
  }

  @media (max-width: 850px) {
    .rates {
      justify-content: center;
      gap: 4.3rem;
    }
  }
`;

const RateStyle = styled.div`
  width: calc(33% - 10px);
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;
    margin-top: auto;
    margin-bottom: 10px;
  }

  p {
    font-size: max(1.8rem, 14px);
    letter-spacing: 0.18px;
  }

  button {
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    width: 100%;
    color: ${(props) => props.theme.colors.main3};
    padding: 18px 0;
    transition: all 300ms linear;
    font-size: 20px;

    &:hover {
      background: ${(props) => props.theme.colors.main1};
    }
    &:active {
      opacity: 0.7;
    }
  }

  .head {
    position: relative;
    padding: 3rem 0 3.4rem 3rem;
    border-radius: 10px 10px 0px 0px;
    display: flex;

    picture {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 1rem;
      display: flex;
      align-items: center;
      height: 100%;
    }
  }

  .body {
    padding: 3.3rem 1.5rem 3.4rem 3rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    .price {
      font-size: 30px;
      font-weight: 500;
      letter-spacing: 0.25px;
      margin-bottom: 10px;

      .crossed-out {
        font-size: 25px;
        margin-left: 1.9rem;
        opacity: 0.5;
        text-decoration: line-through;
      }
    }

    .installment {
      font-size: 18px;
      margin-bottom: 5.9rem;
    }

    ul {
      margin-bottom: max(5.5rem, 39px);

      li {
        font-size: max(1.6rem, 16px);
        margin-left: 28px;
        margin-bottom: 5px;
        position: relative;

        &:not(:last-child) {
          margin-bottom: 6px;
        }

        &::before {
          content: "";
          background: url(./icons/check.svg) no-repeat center center;
          background-size: contain;
          height: 20px;
          width: 20px;
          position: absolute;
          left: -28px;
        }
      }
    }
  }

  &:nth-child(1) .head {
    background-color: ${(props) => props.theme.colors.extra1};
  }

  &:nth-child(2) .head {
    background-color: ${(props) => props.theme.colors.extra2};
  }

  &:nth-child(3) .head {
    background-color: ${(props) => props.theme.colors.main2};
    color: ${(props) => props.theme.colors.main3};
  }

  @media (max-width: 1310px) {
    .head {
      picture {
        top: -1.5rem;
        right: -0.5rem;

        img {
          transform: scale(0.8);
        }
      }
    }
  }

  @media (max-width: 1140px) {
    .head {
      picture {
        top: -2.5rem;
        right: -1rem;
        img {
          transform: scale(0.6);
        }
      }
    }
  }

  @media (max-width: 1080px) {
    .head {
      picture {
        top: -1.5rem;
        right: -1rem;
      }
    }
  }

  @media (max-width: 930px) {
    .head {
      p {
        position: relative;
        z-index: 2;
      }
    }
  }

  @media (max-width: 850px) {
    min-width: 335px;
    .head {
      padding: 30px 25px 34px;

      picture {
        top: -3rem;
        right: -1.5rem;
      }
    }

    .body {
      button {
        font-size: 18px;
      }
    }
  }
`;

export default Rates;

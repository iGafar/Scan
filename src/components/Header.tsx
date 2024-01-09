import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyles>
      <div className="container">
        <span className="logo">
          <img src="./images/icons/logo-header.svg" alt="logo" />
        </span>
        <nav data-open={isOpen}>
          <ul data-open={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <a href="#">Тарифы</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        <div className="sign" data-open={isOpen}>
          <button className="sign-up">Зарегистрироваться</button>
          <span>|</span>
          <button
            className="sign-in"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Link to={"/login"}>Войти</Link>
          </button>
        </div>
        <div
          data-open={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="burger"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 4.9rem;
    font-size: 14px;

    li {
      transition: all 300ms linear;
    }

    li:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.main1};
    }
  }

  .sign {
    display: flex;
    align-items: center;
    gap: 1.9rem;
    font-size: 14px;
    letter-spacing: 0.14px;

    &-up {
      opacity: 0.4;
    }

    &-in {
      border-radius: 5px;
      background: #7ce3e1;
      a {
        display: inline-block;
        text-align: center;
        padding: 5px 10px;
        font-weight: 500;
      }
    }

    span {
      opacity: 0.6;
      color: #029491;
      font-size: 20px;
    }
  }

  .burger {
    display: none;
  }

  @media (max-width: 650px) {
    header {
      margin-bottom: 2rem;
    }

    nav {
      transform: translateY(-1000px);
      background: ${(props) => props.theme.colors.main1};
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 2;
      transition: all 800ms ease-in-out;

			&::before {
				content: url(./images/icons/logo-footer.svg);
				position: absolute;
				top: -22px;
				left: 15px;
			}

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90%;
        font-size: 16px;
        letter-spacing: 0.16px;
        color: ${(props) => props.theme.colors.main3};
        gap: 26px;
        transform: scale(1, 0.2);
        transition: all 1000ms ease-in-out;
        transition-delay: 100ms;

        li:hover {
          cursor: auto;
          color: inherit;
        }

        &[data-open="true"] {
          transform: scale(1);
        }
      }
      &[data-open="true"] {
        transform: translateX(0);
      }
    }

    .sign {
      position: absolute;
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: 20px;
      bottom: 20%;
      left: 0;
      right: 0;
      transform: translateY(-1000px);
      transition: all 900ms ease-in-out;

      span {
        display: none;
      }

      &-up {
        font-size: 16px;
        letter-spacing: 0.16px;
        color: ${(props) => props.theme.colors.main3};
      }

      &-in {
        a {
          padding: 14px 0;
          width: 295px;
          font-size: 20px;
          letter-spacing: 0.2px;
        }
      }

      &[data-open="true"] {
        transform: translateY(0);
      }
    }

    .burger {
      display: flex;
      z-index: 10;
      flex-direction: column;
      gap: 5px;

      &:hover {
        cursor: pointer;
      }

      span {
        display: block;
        width: 30px;
        height: 5px;
        background-color: ${(props) => props.theme.colors.main1};
        transition: all 300ms linear;
      }

      &[data-open="true"] {
        span {
          background-color: ${(props) => props.theme.colors.main3};

          &:first-child {
            transform: rotate(45deg) translate(7px, 7px);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg) translate(7px, -7px);
          }
        }
      }
    }
  }
`;

export default Header;

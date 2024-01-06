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
          <ul>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>
            <li>
              <a href="#">Тарифы</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <Link to={"/login"}>login</Link>
            </li>
          </ul>
        </nav>
        <div className="sign" data-open={isOpen}>
          <button className="sign-up">Зарегистрироваться</button>
          <span>|</span>
          <button className="sign-in">Войти</button>
        </div>
        <div onClick={() => setIsOpen((prev) => !prev)} className="burger">
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

    &-up {
      opacity: 0.4;
    }

    &-in {
      width: 6.5rem;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      background: #7ce3e1;
    }

    span {
      opacity: 0.6;
      color: #029491;
      font-size: 2rem;
    }
  }

  .burger {
    display: none;
  }

  @media (max-width: 800px) {
    header {
      margin-bottom: 2rem;
    }

    nav {
      display: none;

      &[data-open="true"] {
        display: block;
      }
    }

    .sign {
      display: none;

      &[data-open="true"] {
        display: block;
      }
    }

    .burger {
      display: flex;
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
      }
    }
  }
`;

export default Header;

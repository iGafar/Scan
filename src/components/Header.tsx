import { FC } from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  color: ${(props) => props.theme.colors.main2};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 49px;

    li:hover {
      cursor: pointer;
    }
  }

  .sign {
    display: flex;
    align-items: center;
    gap: 19px;

    &-up {
      opacity: 0.4;
    }

    &-in {
      width: 65px;
      text-align: center;
      padding: 5px;
      border-radius: 5px;
      background: #7ce3e1;
    }

    span {
      opacity: 0.6;
      color: #029491;
      font-size: 20px;
    }
  }
`;

export const Header: FC = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <span className="logo">
          <img src="/public/logo-header.svg" alt="logo" />
        </span>
        <nav>
          <ul>
            <li>Главная</li>
            <li>Тарифы</li>
            <li>FAQ</li>
          </ul>
        </nav>
        <div className="sign">
          <button className="sign-up">Зарегистрироваться</button>
          <span>|</span>
          <button className="sign-in">Войти</button>
        </div>
      </div>
    </HeaderStyles>
  );
};

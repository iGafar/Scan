import { FC } from "react";
import styled from "styled-components";

const LoginForm: FC = () => {
  return (
    <FormStyle>
      <div className="head">
        <p className="active">Войти</p>
        <p>Зарегистрироваться</p>
      </div>
      <label>
        <p>Логин или номер телефона:</p>
        <input type="text" />
      </label>
      <label>
        <p>Пароль:</p>
        <input type="password" />
      </label>
      <button className="submit" type="submit">
        Войти
      </button>
      <button className="restore" disabled>
        Восстановить пароль
      </button>
      <p>Войти через:</p>
      <div className="social">
        <button disabled>
          <img src="./images/icons/google.png" alt="google" />
        </button>
        <button disabled>
          <img src="./images/icons/facebook.png" alt="facebook" />
        </button>
        <button disabled>
          <img src="./images/icons/yandex.png" alt="yandex" />
        </button>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  width: min-content;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.main3};
  color: #949494;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 2.5rem 2.5rem 3.9rem;
  font-size: max(10px, 1.6rem);
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    background: url(./images/icons/lock.svg) no-repeat center center;
    background-size: contain;
    position: absolute;
    top: -55px;
    left: -50px;
    width: 7.5219rem;
    height: 9.2065rem;
  }

  .head {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 5rem;

    p {
      padding: 0 3.7rem 8px;
      border-bottom: 2px #c7c7c7 solid;

      &.active {
        color: ${(props) => props.theme.colors.main1};
        border-color: ${(props) => props.theme.colors.main1};
      }
    }
  }

  label {
    display: inline-block;
    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 1.5rem;
      letter-spacing: 0.032rem;
    }

    input {
      width: 100%;
      height: 4.3rem;
      border-radius: 0.5rem;
      border: 1px solid #c7c7c7;
      background: ${(props) => props.theme.colors.main3};
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    }
  }

  .submit {
    width: 100%;
    height: 5.9rem;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    color: ${(props) => props.theme.colors.main3};
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.044rem;
    margin-bottom: 1.5rem;

    &:disabled {
      opacity: 0.7;
    }
  }

  .restore {
    color: ${(props) => props.theme.colors.extra3};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.028rem;
    text-decoration-line: underline;
    margin-bottom: 3rem;
  }

  & > p {
    font-size: 1.6rem;
    letter-spacing: 0.032rem;
    margin-bottom: 1.5rem;
  }

  .social {
    display: flex;
    gap: 1rem;
  }
`;

export default LoginForm;

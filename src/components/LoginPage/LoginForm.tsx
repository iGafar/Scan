import { FC } from "react";
import styled from "styled-components";
import { login } from "store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { IUser } from "@types";
import { useNavigate } from "react-router-dom";

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>();

  const onSubmit = handleSubmit((data) => {
    dispatch(login(data));
    navigate("/");
  });

  return (
    <FormStyle onSubmit={onSubmit}>
      <div className="head">
        <p className="active">Войти</p>
        <p>Зарегистрироваться</p>
      </div>
      <label>
        <p>Логин или номер телефона:</p>
        <input
          type="text"
          {...register("login", {
            required: true,
          })}
        />
        {errors?.login ? <p className="error">Введите логин</p> : null}
      </label>
      <label>
        <p>Пароль:</p>
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        {errors?.login ? <p className="error">Введите пароль</p> : null}
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
          <img src="./icons/google.png" alt="google" />
        </button>
        <button disabled>
          <img src="./icons/facebook.png" alt="facebook" />
        </button>
        <button disabled>
          <img src="./icons/yandex.png" alt="yandex" />
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
  padding: 25px 2.5rem 3.9rem;
  font-size: max(14px, 1.6rem);
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: "";
    background: url(./icons/lock.svg) no-repeat center center;
    background-size: contain;
    position: absolute;
    top: -5.5rem;
    left: -5rem;
    width: 7.5219rem;
    height: 9.2065rem;
  }

  .head {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;

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
    position: relative;
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 15px;
      letter-spacing: 0.032rem;
    }

    input {
      width: 100%;
      height: 43px;
      border-radius: 0.5rem;
      border: 1px solid #c7c7c7;
      padding-left: 10px;
      background: ${(props) => props.theme.colors.main3};
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
    }

    .error {
      padding: 5px 10px;
      position: absolute;
      color: red;
      right: 0;
      top: 50%;
    }
  }

  .submit {
    width: 100%;
    height: 59px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra3};
    color: ${(props) => props.theme.colors.main3};
    font-size: max(2.2rem, 20px);
    font-weight: 500;
    letter-spacing: 0.044rem;
    margin-bottom: 15px;

    &:disabled {
      opacity: 0.7;
    }
  }

  .restore {
    color: ${(props) => props.theme.colors.extra3};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.028rem;
    text-decoration-line: underline;
    margin-bottom: 30px;
  }

  & > p {
    font-size: 16px;
    letter-spacing: 0.032rem;
    margin-bottom: 15px;
  }

  .social {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 700px) {
    margin: 0 auto 49px;

    &:before {
      width: 75.219px;
      height: 92.065px;
      top: -73px;
      left: 63px;
    }
  }
`;

export default LoginForm;

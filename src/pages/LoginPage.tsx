import LoginForm from "components/LoginPage/LoginForm";
import { FC } from "react";
import styled from "styled-components";

const LoginPage: FC = () => {
  return (
    <LoginPageStyle>
      <section>
        <div className="container">
          <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
          <LoginForm />
        </div>
      </section>
    </LoginPageStyle>
  );
};

const LoginPageStyle = styled.main`
  padding: 6.9rem 0 4rem;

  .container {
    display: flex;
    justify-content: space-between;
    background: url("/public/images/login_page_back.svg") no-repeat 11.2rem
      bottom;
  }

  h1 {
    width: 81.1rem;
    color: ${(props) => props.theme.colors.main2};
    letter-spacing: 0.08rem;
    margin-right: 4rem;
    font-size: max(4rem, 22px);
    letter-spacing: max(0.08rem, 0.44px);
  }

  @media (max-width: 810px) {
    .container {
      padding-bottom: calc(100vw * 342 / 321);
      background-position: bottom;
      background-size: 98%;

      h1 {
        margin-right: 0;
      }
    }
  }

  @media (max-width: 700px) {
    .container {
      flex-direction: column;

      h1 {
        margin-bottom: 126px;
        font-size: 4.4rem;
        width: auto;
      }
    }
  }
`;

export default LoginPage;

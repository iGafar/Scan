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
    background: url("/public/images/login_page_back.png") no-repeat 11.2rem
      bottom;
  }

  h1 {
    width: 81.1rem;
    color: ${(props) => props.theme.colors.main2};
    letter-spacing: 0.08rem;
  }
`;

export default LoginPage;

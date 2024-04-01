import { FC } from "react";
import styled from "styled-components";

const Footer: FC = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div>
          <img src="./icons/logo-footer.svg" alt="logo" />
        </div>

        <div>
          <div className="info">
            <p>г. Москва, Цветной б-р, 40</p>
            <p>+7 495 771 21 11</p>
            <p>info@skan.ru</p>
          </div>

          <p>Copyright. 2022</p>
        </div>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  background: #029491;
  color: ${(props) => props.theme.colors.main3};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      text-align: right;
      font-size: 12px;
      letter-spacing: 0.12px;
    }
  }

  .info {
    text-align: right;
    font-size: 14px;
    letter-spacing: 0.14px;
    margin-bottom: 21px;
  }
`;

export default Footer;

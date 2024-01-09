import { FC } from "react";
import { Document } from "constants/index";
import styled from "styled-components";

const DocumentCart: FC<{ document: Document }> = ({ document }) => {
  return (
    <DocumentStyle>
      <p className="info">
        <span>{document.date} </span> <span>{document.source}</span>
      </p>
      <h3>{document.title}</h3>
      <p className="tag">{document.tag} </p>
      <div className="img">
        <img src={document.img} alt="1" />
      </div>
      <p className="text">{document.text}</p>

      <div className="end">
        <button>
          <a href="#" target="_blank">
            Читать в источнике
          </a>
        </button>
        <span className="words">{document.words}</span>
      </div>
    </DocumentStyle>
  );
};

const DocumentStyle = styled.div`
  width: calc(50% - 1.9rem);
  padding: 19px max(3rem, 20px) max(3.5rem, 18px);
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  animation: 1s appearance ease;

  .info {
    color: #949494;
    font-size: max(1.6rem, 14px);
    letter-spacing: max(0.032rem, 0.14px);
    margin-bottom: max(2.4rem, 21px);

    span {
      margin-right: max(1.8rem, 9px);
    }
  }

  h3 {
    font-size: max(2.6rem, 19px);
    font-weight: 500;
    letter-spacing: max(0.052rem, 0.19px);
    margin-bottom: 14px;
  }

  .tag {
    width: max-content;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra1};
    padding: 4px 12px;
    margin-bottom: 14px;
    font-size: 12px;
    letter-spacing: 0.24px;
  }

  .img {
    height: 158px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    margin-bottom: max(2rem, 18px);

    img {
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  .text {
    font-size: max(1.6rem, 12px);
    letter-spacing: max(0.032rem, 0.12px);
    opacity: 0.5;
    margin-bottom: max(3.2rem, 25px);
  }

  .end {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    letter-spacing: 0.32px;

    button a {
      display: inline-block;
      border-radius: 5px;
      background: ${(props) => props.theme.colors.extra2};
      padding: max(1.4rem, 12px) max(3.1rem, 29px);
    }

    .words {
      color: #949494;
      font-size: max(1.6rem, 14px);
      letter-spacing: 0.32px;
    }
  }

  @keyframes appearance {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 810px) {
    h3 {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
    .end {
      .words {
        letter-spacing: normal;
      }
    }
  }
`;

export default DocumentCart;

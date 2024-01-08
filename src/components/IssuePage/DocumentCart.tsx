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
  width: min(641px, 48%);
  padding: 19px 30px 35px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  animation: 1s appearance ease;

  .info {
    color: #949494;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.32px;
    margin-bottom: 24px;

    span {
      margin-right: 14px;
    }
  }

  h3 {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.52px;
    margin-bottom: 18px;
  }

  .tag {
    width: max-content;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.extra1};
    padding: 4px 12px;
    margin-bottom: 14px;
  }

  .img {
    height: 158px;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    margin-bottom: 20px;

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
    font-size: 16px;
    letter-spacing: 0.32px;
    opacity: 0.5;
    margin-bottom: 32px;
  }

  .end {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button a {
      display: inline-block;
      border-radius: 5px;
      background: ${(props) => props.theme.colors.extra2};
      padding: 14px 31px;
    }

    .words {
      color: #949494;
      font-size: 16px;
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
`;

export default DocumentCart;

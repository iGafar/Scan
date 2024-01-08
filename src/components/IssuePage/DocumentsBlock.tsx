import { documentsList } from "constants/index";
import { FC, useState } from "react";
import styled from "styled-components";
import DocumentCart from "./DocumentCart";

const DocumentsBlock: FC = () => {
  const [counter, setCounter] = useState(2);
  return (
    <DocumentsBlockStyled>
      <div className="container">
        <h2>Список документов</h2>

        <div className="documents">
          {documentsList.slice(0, counter).map((document, index) => {
            return <DocumentCart key={index} document={document} />;
          })}
        </div>

        <button
          onClick={() => setCounter((prev) => prev + 2)}
          disabled={counter >= documentsList.length && true}
        >
          Показать больше
        </button>
      </div>
    </DocumentsBlockStyled>
  );
};

const DocumentsBlockStyled = styled.section`
  h2 {
    margin-bottom: 58px;
  }

  .documents {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 38px;
    margin-bottom: 38px;
  }

  .container > button {
    display: block;
    width: 305px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.extra3};
    border-radius: 5px;
    padding: 16px 0;
    margin: 0 auto 109px;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.88px;

    &:disabled {
      opacity: 0.8;
      cursor: auto;
    }
  }
`;

export default DocumentsBlock;

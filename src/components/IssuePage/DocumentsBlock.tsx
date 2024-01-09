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
  margin-bottom: max(10.9rem, 57px);

  h2 {
    margin-bottom: max(5.8rem, 34px);
  }

  .documents {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: max(3.8rem, 36px);
    gap: max(3.8rem, 20px) 0;
  }

  .container > button {
    display: block;
    width: 305px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.extra3};
    border-radius: 5px;
    padding: 16px 0;
    margin: 0 auto;
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 0.88px;

    &:disabled {
      opacity: 0.8;
      cursor: auto;
    }
  }

  @media (max-width: 450px) {
    .container > button {
      width: 100%;
      font-size: 20px;
      letter-spacing: 0.6px;
    }
  }
`;

export default DocumentsBlock;

import SearchForm from "components/SearchPage/SearchForm";
import { FC } from "react";
import styled from "styled-components";

const SearchPage: FC = () => {
  return (
    <SearchPageStyle>
      <section>
        <div className="container">
          <h1>Найдите необходимые данные в пару кликов.</h1>
          <p>
            Задайте параметры поиска.
            <br />
            Чем больше заполните, тем точнее поиск
          </p>

          <SearchForm />
        </div>
      </section>
    </SearchPageStyle>
  );
};

const SearchPageStyle = styled.main`
  section {
    background: url(./images/search-page-back.svg) no-repeat bottom right;
    margin-bottom: 64px;
  }

  h1 {
    max-width: 75rem;
    margin-bottom: 2.5rem;
    font-size: max(4rem, 28px);
  }

  .container > p {
    font-size: max(2rem, 18px);
    letter-spacing: 0.4px;
    position: relative;
    margin-bottom: 4.7rem;

    &::before {
      content: "";
      background: url(./images/icons/Folders.svg) no-repeat center/contain;
      width: 140.608px;
      height: 68.394px;
      position: absolute;
      right: 2%;
      bottom: 10px;
    }

    &::after {
      content: "";
      background: url(./images/icons/Document.svg) no-repeat center/contain;
      width: 91px;
      height: 111.118px;
      position: absolute;
      right: 23%;
      bottom: -10px;
      z-index: -1;
    }
  }

  @media (max-width: 900px) {
    section {
      padding-bottom: calc(100vw * 470 / 442);
      background-size: 98%;
    }
  }

  @media (max-width: 810px) {
    .container {
      p {
        &::after {
          width: 58.242px;
          height: 71.118px;
          right: 0;
          bottom: unset;
          top: -85%;
        }
        &::before {
          display: none;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .container > p {
      width: 297px;

      &::after {
        right: -50px;
      }
    }
  }
`;

export default SearchPage;

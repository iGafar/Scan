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
  h1 {
    max-width: 750px;
    margin-bottom: 25px;
  }

	.container {
		background: url('/public/search-page-back.png') no-repeat bottom right;
	}

  .container > p {
    font-size: 20px;
    letter-spacing: 0.4px;
    margin-bottom: 47px;
    position: relative;

    &::before {
      content: url("/public/Folders.svg");
      position: absolute;
      right: 2%;
      bottom: 10px;
    }

    &::after {
      content: url("/public/Document.svg");
			position: absolute;
			right: 23%;
			bottom: -10px;
			z-index: -1;
    }
  }
`;

export default SearchPage;

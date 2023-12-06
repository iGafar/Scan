import { Header } from "components/Header";
import { Main } from "components/Main";
import Footer from "components/Footer";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { MainPage } from "pages/MainPage";

const theme = {
  colors: {
    main1: "#029491",
    main2: "#000",
    main3: "#fff",
    extra1: "#FFB64F",
    extra2: "#7CE3E1",
    extra3: "#5970FF",
  },
};

const Global = createGlobalStyle`
	  body {
    font-family: 'Inter', sans-serif;
		line-height: normal;
    background-color: ${(props) => props.theme.main3};
    color: ${(props) => props.theme.colors.main1};
  }

	.container {
		max-width: 1320px;
		margin: 0 auto;
		padding: 0 10px;
	}

	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

`;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div className="wrapper">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

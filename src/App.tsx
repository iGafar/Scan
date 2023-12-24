import Header from "components/Header";
import Footer from "components/Footer";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./constants";
import MainPage from "pages/MainPage";
// import IssuePage from "pages/IssuePage";
// import SearchPage from "pages/SearchPage";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <div className="wrapper">
        <Header />
        <MainPage />
        {/* <SearchPage /> */}
        {/* <IssuePage /> */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

const Global = createGlobalStyle`
	body {
    font-family: 'Inter', sans-serif;
		line-height: normal;
    /* background-color: ${(props) => props.theme.main3}; */
    color: ${(props) => props.theme.colors.main2};
  }
	main {
		flex-grow: 1;
	}
	.container {
		max-width: 1340px;
		margin: 0 auto;
		padding: 0 10px;
	}
	.wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	
	h1, h2 {
		font-family: Ferry, sans-serif;
		font-weight: 900;
		text-transform: uppercase;
	}

	h1 {
		font-size: 40px;
		letter-spacing: 1.2px;
	}

	h2 {
    font-size: 45px;
    letter-spacing: 0.45px;
	}

	`;

export default App;

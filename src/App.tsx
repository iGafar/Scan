import Header from "components/Header";
import Footer from "components/Footer";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./constants";
import Router from "routes/Router";
import { FC } from "react";

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <Router />
      <Footer />
    </ThemeProvider>
  );
};

const Global = createGlobalStyle`
html {
	font-size: 10px;
}
body {
	font-family: 'Inter', sans-serif;
	line-height: normal;
	color: ${(props) => props.theme.colors.main2};
}
main {
	flex-grow: 1;
}
.container {
	max-width: 1340px;
	margin: 0 auto;
	padding: 0 30px;
}
#root {
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
	letter-spacing: 1.2px;
}

h2 {
	font-size: 4.5rem;
	letter-spacing: 0.045rem;
}

@media (max-width: 1200px) {
  html {
    font-size: 9px;
  }
}

@media (max-width: 1080px) {
  html {
    font-size: 8px;
  }
}

@media (max-width: 975px) {
  html {
    font-size: 7px;
  }
}

@media (max-width: 850px) {
  html,
  body {
    font-size: 6px;
  }
	.container {
		padding: 0 15px;
	}
}

@media (max-width: 550px) {
  html,
  body {
    font-size: 5px;
  }
}
`;

export default App;

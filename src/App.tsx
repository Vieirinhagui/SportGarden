import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export { App };

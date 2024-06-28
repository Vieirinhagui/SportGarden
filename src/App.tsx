import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";
import { Home } from "./pages/Home";
import { Portifolio } from "./pages/Portifolio";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export { App };

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Home } from "./Pages/Home";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/portifolio" element={<Portifolio />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

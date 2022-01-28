import { ThemeProvider } from "styled-components";
import { About, Hero, NavBar } from "./Components";
import GlobalStyles from "./global";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Hero />
      <About />
    </ThemeProvider>
  );
}

export default App;

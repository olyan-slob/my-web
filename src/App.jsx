import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/lora";
import "@fontsource/pt-serif";

import { Header } from "./components/header";
import { AboutMePage } from "./pages/about-me";
import { ProjectsPage } from "./pages/projects";
import { TechStackPage } from "./pages/tech-stack";
import { HobbyPage } from "./pages/hobby";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Switch zIndex="2">
          <Route exact path="/">
            <AboutMePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/tech-stack">
            <TechStackPage />
          </Route>
          <Route path="/hobby">
            <HobbyPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;

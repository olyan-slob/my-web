import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header";
// @import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          {/* <AboutMe /> */}
        </Route>
        <Route path="/experience">{/* <Experience /> */}</Route>
        <Route path="/tech-stack">{/* <TechStack /> */}</Route>
        <Route exact path="/education">
          {/* <Education /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

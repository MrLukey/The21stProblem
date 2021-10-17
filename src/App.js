import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/SiteNav";
import CoverPage from "./Components/CoverPage/CoverPage";
import ProblemPage from "./Components/ProblemPage/ProblemPage";
import SolutionPage from "./Components/SolutionPage/SolutionPage";
import NewWorldPage from "./Components/NewWorldPage/NewWorldPage";

function App() {
  return (
      <Router>
          <SiteNav />
          <Switch>
              <Route exact path="/" component={CoverPage} />
              <Route path="/problem" component={ProblemPage} />
              <Route path="/solution" component={SolutionPage} />
              <Route path="/new-world" component={NewWorldPage} />
          </Switch>
      </Router>
  )
}

export default App;

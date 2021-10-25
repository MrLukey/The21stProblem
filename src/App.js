import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/SiteNav/SiteNav";
import CoverPage from "./Components/CoverPage/CoverPage";
import ProblemPage from "./Components/ProblemPage/ProblemPage";
import SolutionPage from "./Components/SolutionPage/SolutionPage";
import NewWorldPage from "./Components/NewWorldPage/NewWorldPage";
import ProblemDataPage from "./Components/ProblemDataPage/ProblemDataPage";
import SolutionDataPage from "./Components/SolutionDataPage/SolutionDataPage";
import WhatToDoPage from "./Components/WhatToDoPage/WhatToDoPage";
import ReferencesPage from "./Components/ReferencesPage/ReferencesPage";

function App() {
  return (
      <Router>
          <SiteNav />
          <Switch>
              <Route exact path="/" component={CoverPage} />
              <Route path="/problem" component={ProblemPage} />
              <Route path="/problem-data" component={ProblemDataPage} />
              <Route path="/solution" component={SolutionPage} />
              <Route path="/solution-data" component={SolutionDataPage} />
              <Route path="/new-world" component={NewWorldPage} />
              <Route path="/what-to-do" component={WhatToDoPage} />
              <Route path="/references" component={ReferencesPage} />
          </Switch>
      </Router>
  )
}

export default App;

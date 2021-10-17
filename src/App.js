import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/SiteNav";
import CoverPage from "./Components/CoverPage/CoverPage";
import ProblemPage from "./Components/ProblemPage/ProblemPage";

function App() {
  return (
      <Router>
          <SiteNav />
          <Switch>
              <Route exact path="/" component={CoverPage} />
              <Route path="/problem" component={ProblemPage} />
          </Switch>
      </Router>
  )
}

export default App;

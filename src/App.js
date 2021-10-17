import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/SiteNav";
import CoverPage from "./Components/CoverPage/CoverPage";

function App() {
  return (
      <Router>
          <SiteNav />
          <Switch>
              <Route exact path="/" component={CoverPage} />
          </Switch>
      </Router>
  )
}

export default App;

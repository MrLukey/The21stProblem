import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/SiteNav/SiteNav";
import CoverPage from "./Components/Pages/CoverPage/CoverPage";
import ProblemPage from "./Components/Pages/ProblemPage/ProblemPage";
import SolutionPage from "./Components/Pages/SolutionPage/SolutionPage";
import NewWorldPage from "./Components/Pages/NewWorldPage/NewWorldPage";
import ProblemDataPage from "./Components/Pages/ProblemDataPage/ProblemDataPage";
import SolutionDataPage from "./Components/Pages/SolutionDataPage/SolutionDataPage";
import WhatToDoPage from "./Components/Pages/WhatToDoPage/WhatToDoPage";
import ReferencesPage from "./Components/Pages/ReferencesPage/ReferencesPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";

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
                <Route path="/sign-up" component={SignUpPage} />
            </Switch>
        </Router>
    )
}

export default App;

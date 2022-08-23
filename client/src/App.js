import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import SiteNav from "./Components/Navs/SiteNav/SiteNav";
import CoverPage from "./Components/Pages/CoverPage/CoverPage";
import ProblemPage from "./Components/Pages/ProblemPage/ProblemPage";
import SolutionPage from "./Components/Pages/SolutionPage/SolutionPage";
import NewWorldPage from "./Components/Pages/NewWorldPage/NewWorldPage";
import ProblemDataPage from "./Components/Pages/ProblemDataPage/ProblemDataPage";
import SolutionDataPage from "./Components/Pages/SolutionDataPage/SolutionDataPage";
import WhatToDoPage from "./Components/Pages/WhatToDoPage/WhatToDoPage";
import ReferencesPage from "./Components/Pages/ReferencesPage/ReferencesPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";
import AdminLoginPage from "./Components/Pages/AdminLoginPage/AdminLoginPage";
import AdminDashboardPage from "./Components/Pages/AdminDashboardPage/AdminDashboardPage";
import AboutPage from "./Components/Pages/AboutPage/AboutPage";
import {useState} from "react";

function App() {

    const [activePage, setActivePage] = useState('')
    const [navDisplay, setNavDisplay] = useState('')
    const adminDashProps = {navDisplay: navDisplay, setNavDisplay: setNavDisplay}

    return (
        <Router>
            <SiteNav activePage={activePage} navDisplay={navDisplay}/>
            <Switch>
                <Route exact path="/" component={CoverPage} />
                <Route exact path="/admin-login" render={() => <AdminLoginPage setNavDisplay={setNavDisplay} />} />
                <Route exact path="/admin-dashboard" render={() => <AdminDashboardPage {...adminDashProps} />} />
                <Route path="/about" component={AboutPage} />
                <Route path="/problem" render={() => <ProblemPage setActivePage={setActivePage} />} />
                <Route path="/problem-data" component={ProblemDataPage} />
                <Route path="/solution" render={() => <SolutionPage setActivePage={setActivePage} />} />
                <Route path="/solution-data" component={SolutionDataPage} />
                <Route path="/new-world" render={() => <NewWorldPage setActivePage={setActivePage} />} />
                <Route path="/what-to-do" render={() => <WhatToDoPage setActivePage={setActivePage} />} />
                <Route path="/references" component={ReferencesPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/sign-up" component={SignUpPage} />
            </Switch>
        </Router>
    )
}

export default App;

import './App.css';
import TitleSection from "./Components/TitleSection/TitleSection";
import ProblemSection from "./Components/ProblemSection/ProblemSection";
import SiteNav from "./Components/SiteNav/SiteNav";

function App() {
  return (
      <main>
          <header>
              <SiteNav />
          </header>
          <div>
            <TitleSection />
            <ProblemSection />
          </div>
      </main>
  )
}

export default App;

import './app.scss';
import {useContext} from "react";
import {ThemeContext} from "./contexts/theme-context";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/homepage";
import {Articles} from "./pages/articles";
import {Comments} from "./pages/comments";
import {Navigation} from "./components/navigation";

function App() {

  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme

  return (
    <div className={`app theme-${theme}`} data-theme={theme} >
      <Router>
        <Navigation />
        <Routes>
          <Route path={'/'} element={<Homepage theme={theme} />} />
          <Route path={'/articles'} element={<Articles theme={theme} />} />
          <Route path={'/comments'} element={<Comments theme={theme} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

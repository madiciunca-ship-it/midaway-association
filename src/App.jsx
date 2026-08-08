import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import SiteLayout from "./components/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import GaudeamusPage from "./pages/GaudeamusPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/ro"
              replace
            />
          }
        />

        <Route
          path="/:lang"
          element={<SiteLayout />}
        >
          <Route
            index
            element={<HomePage />}
          />

          <Route
            path="proiecte"
            element={<ProjectsPage />}
          />

          <Route
            path="proiecte/gaudeamus"
            element={<GaudeamusPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
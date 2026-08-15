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
import PartnershipsPage from "./pages/PartnershipsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";

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
  path="parteneriate"
  element={<PartnershipsPage />}
/>

          <Route
            path="proiecte/gaudeamus"
            element={<GaudeamusPage />}
          />

<Route
  path="contact"
  element={<ContactPage />}
/>

<Route
  path="sustine"
  element={<SupportPage />}
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import NewTransaction from "./pages/NewTransaction";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // If a route opened with state.background, keep that as the UI background
  const background = location.state && location.state.background;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Render routes in the context of the background location when present */}
        <Routes location={background || location}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions/new" element={<NewTransaction />} />
          {/* add other routes here when pages are ready */}
        </Routes>
      </main>

      {/* When background is set, show the modal route on top */}
      {background && (
        <Routes>
          <Route
            path="/transactions/new"
            element={
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => navigate(-1)}
                />
                <div className="relative z-10 w-full max-w-md p-4">
                  <NewTransaction />
                </div>
              </div>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;

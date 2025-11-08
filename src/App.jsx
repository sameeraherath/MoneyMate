import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Routes will go here */}
          <h1 className="text-3xl font-bold">Welcome to MoneyMate</h1>
        </main>
      </div>
    </Router>
  );
};

export default App;

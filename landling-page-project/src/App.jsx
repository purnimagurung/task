import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FreeTrialForm from "./pages/FreeTrialForm";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* Wrap Routes and global components inside a React fragment */}
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kostenlos-testen" element={<FreeTrialForm />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

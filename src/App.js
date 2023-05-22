import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { SubmissionForm } from "./Pages/SubmissionForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<SubmissionForm />} />
      </Routes>
    </div>
  );
}

export default App;

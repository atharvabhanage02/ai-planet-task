import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import { Navbar } from "./Components/Navbar";
import { SubmissionCard } from "./Components/SubmissionCard";
import { Tabs } from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <Tabs />
        <div style={{ marginBottom: "5rem" }}>
          <SubmissionCard />
        </div>
      </div>
    </div>
  );
}

export default App;

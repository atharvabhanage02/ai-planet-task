import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import { Navbar } from "./Components/Navbar";
import { Tabs } from "./Components/Tabs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Tabs />
    </div>
  );
}

export default App;

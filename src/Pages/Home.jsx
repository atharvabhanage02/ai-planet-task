import { HeroSection } from "../Components/HeroSection";
import { SubmissionCard } from "../Components/SubmissionCard";
import { Tabs } from "../Components/Tabs";

function Home() {
  return (
    <div>
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

export { Home };

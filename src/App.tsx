import { Axe, Sword, Map, Users, PlayCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Characters from "./components/Characters";
import Weapons from "./components/Weapons";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navbar />
      <Hero />
      <Features />
      <Characters />
      <Weapons />
    </div>
  );
}

export default App;

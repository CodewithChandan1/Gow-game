import { Sword, Shield, Map, Target } from "lucide-react";

const features = [
  {
    icon: <Sword size={32} />,
    title: "Epic Combat",
    description:
      "Master brutal combat mechanics and unleash devastating combos against mythological foes.",
  },
  {
    icon: <Shield size={32} />,
    title: "Norse Mythology",
    description:
      "Explore a world steeped in Norse mythology, filled with gods, monsters, and ancient mysteries.",
  },
  {
    icon: <Map size={32} />,
    title: "Nine Realms",
    description:
      "Journey through the nine realms of Norse mythology, each with unique challenges and secrets.",
  },
  {
    icon: <Target size={32} />,
    title: "Legendary Weapons",
    description:
      "Wield powerful weapons like the Leviathan Axe and the iconic Blades of Chaos.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg transform 
                transition-all duration-300 hover:scale-105 hover:bg-gray-800/70"
            >
              <div className="text-red-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

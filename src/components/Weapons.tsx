import { Axe } from "lucide-react";
import RotatingWeapon from "./animations/RotatingWeapon";

const weapons = [
  {
    name: "Leviathan Axe",
    description: "A powerful frost weapon forged by the Huldra Brothers.",
    stats: {
      damage: 90,
      frost: 100,
      control: 85,
    },
  },
  {
    name: "Blades of Chaos",
    description: "Iconic chained blades imbued with the power of fire.",
    stats: {
      damage: 95,
      fire: 100,
      speed: 90,
    },
  },
];

const Weapons = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Legendary Weapons
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {weapons.map((weapon, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-8 
                transform transition-all duration-300 hover:scale-105"
            >
              <RotatingWeapon>
                <div className="flex items-center mb-6">
                  <Axe size={32} className="text-red-500 mr-4" />
                  <h3 className="text-2xl font-bold text-white">
                    {weapon.name}
                  </h3>
                </div>
              </RotatingWeapon>

              <p className="text-gray-400 mb-6">{weapon.description}</p>

              <div className="space-y-4">
                {Object.entries(weapon.stats).map(([stat, value]) => (
                  <div key={stat} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 capitalize">{stat}</span>
                      <span className="text-white">{value}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full transition-all duration-300"
                        style={{
                          width: "0%",
                          animation: "growWidth 1.5s ease-out forwards",
                          animationDelay: "0.3s",
                        }}
                        data-width={`${value}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weapons;

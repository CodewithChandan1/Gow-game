import FloatingCard from "./animations/FloatingCard";

const characters = [
  {
    name: "Kratos",
    role: "The God of War",
    image:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&q=80",
    description:
      "Once a Spartan warrior, now a father seeking redemption in the Norse realm.",
  },
  {
    name: "Atreus",
    role: "Son of Kratos",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80",
    description:
      "Young, skilled with a bow, and carrying a heritage yet to be fully understood.",
  },
];

const Characters = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Characters</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {characters.map((character, index) => (
            <FloatingCard key={index}>
              <div className="relative group overflow-hidden rounded-lg">
                <div
                  className="aspect-[16/9] bg-cover bg-center"
                  style={{ backgroundImage: `url(${character.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 
                  transition-transform duration-300 group-hover:translate-y-0"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {character.name}
                  </h3>
                  <p className="text-red-500 font-semibold mb-2">
                    {character.role}
                  </p>
                  <p className="text-gray-300">{character.description}</p>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;

import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wider">
          GOD OF WAR
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Embark on an epic journey through the nine realms. Face legendary
          battles, conquer mythical beasts, and forge your destiny.
        </p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full 
          text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Begin Your Journey
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/80" />
      </div>
    </div>
  );
};

export default Hero;

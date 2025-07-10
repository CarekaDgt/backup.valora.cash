import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUpRight, Star, Zap, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  const handleSignupClick = () => {
    window.location.href = '/register';
  };

  return (
    <section
      className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-300">
          <Star className="w-4 h-4 text-blue-400 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-bounce delay-700">
          <Zap className="w-5 h-5 text-purple-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-1000">
          <Sparkles className="w-4 h-4 text-pink-400 opacity-60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-12">
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #d1d5db 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255,255,255,0.1)',
              }}
            >
              Tudo que você precisa para{' '}
              <span
                className="relative inline-block"
                style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                viver do digital.
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse" />
              </span>
            </h1>
            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Deixe de lado aquela lista enorme de ferramentas e passe a vender produtos físicos e digitais em{' '}
              <span className="text-white font-semibold">um só lugar</span>.
            </p>
          </div>
          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Login Button */}
            <Button
              onClick={handleLoginClick}
              variant="outline"
              size="lg"
              className="group relative w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative z-10">Fazer Login</span>
            </Button>

            {/* Signup Button */}
            <Button
              onClick={handleSignupClick}
              size="lg"
              className="group relative w-full sm:w-auto px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 rounded-full overflow-hidden transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Começar a vender
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Button>
          </div>
          {/* Trust Indicators */}
          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-white/60 text-sm transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>API integrada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>Suporte 24/7</span>
            </div>
          </div>
          {/* TESTE DO TEMA */}
          <div className="bg-background text-foreground p-8 rounded-lg shadow-lg mt-8">
            Tailwind e tema ValoraPay rodando bonito!
          </div>
        </div>
      </div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};

export default Hero;

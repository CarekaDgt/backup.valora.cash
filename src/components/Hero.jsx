import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';              
import { Button } from './ui/button';
import { ArrowUpRight, Star, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

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

  const handleLoginClick = () => navigate('/login');
  const handleSignupClick = () => navigate('/register');

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #d1d5db 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  return (
    <section
      className={`
        relative 
        min-h-screen w-full
        bg-gradient-to-br from-gray-900 via-black to-gray-900
        flex flex-col items-center justify-center
        overflow-hidden
        px-4 sm:px-6 lg:px-8
      `}
      onMouseMove={handleMouseMove}
    >
      {/* Animated BG Pulsing Layers */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 50%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Star    className="absolute top-1/4 left-1/4 w-4 h-4 text-blue-400 opacity-60 animate-bounce delay-300" />
        <Zap     className="absolute top-1/3 right-1/4 w-5 h-5 text-purple-400 opacity-60 animate-bounce delay-700" />
        <Sparkles className="absolute bottom-1/3 left-1/3 w-4 h-4 text-pink-400 opacity-60 animate-bounce delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto max-w-4xl lg:max-w-6xl">
        <div className="text-center space-y-8 sm:space-y-12">
          
          {/* Heading & Underline */}
          <h1
            className={`
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-bold leading-tight tracking-tight text-center
              transition-all duration-1000
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{
              ...gradientTextStyle,
              textShadow: '0 0 30px rgba(255,255,255,0.1)',
            }}
          >
            Tudo que você precisa para{' '}
            <span className="relative inline-block" style={gradientTextStyle}>
              viver do digital.
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse" />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`
              text-base sm:text-lg md:text-xl lg:text-2xl 
              text-gray-300 leading-relaxed font-medium text-center mx-auto max-w-3xl
              transition-all duration-1000 delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Deixe de lado aquela lista enorme de ferramentas e passe a vender produtos físicos e digitais em{' '}
            <span className="text-white font-semibold">um só lugar</span>.
          </p>

          {/* Action Buttons */}
          <div
            className={`
              flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center mt-6
              transition-all duration-1000 delay-500
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <Button
              onClick={handleLoginClick}
              variant="outline"
              size="lg"
              className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 font-semibold border-2 border-white/20 bg-white/10 text-white hover:bg-white hover:text-black transition duration-300 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative z-10">Fazer Login</span>
            </Button>

            <Button
              onClick={handleSignupClick}
              size="lg"
              className="group relative w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition duration-300 rounded-full overflow-hidden transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative z-10 flex items-center gap-2">
                Começar a vender
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`
              flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center mt-6
              text-white/60 text-sm
              transition-all duration-1000 delay-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
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

          {/* Teste de tema */}
          <div className="bg-background text-foreground p-6 rounded-lg shadow-lg mt-8 inline-block">
            Tailwind e tema ValoraPay rodando bonito!
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
}

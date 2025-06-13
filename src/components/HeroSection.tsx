
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Heart, Coins } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="relative">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 px-8 py-4 rounded-full border border-violet-500/30 mb-12 animate-fade-in backdrop-blur-xl">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-violet-300 text-sm font-bold tracking-wider uppercase">Revolutionary Creator Economy</span>
            </div>

            {/* Main Heading with Unique Typography */}
            <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block relative">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
                  Tip. Support.
                </span>
                <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-bounce"></div>
              </span>
              <span className="block text-white animate-fade-in transform -skew-x-6" style={{ animationDelay: '0.2s' }}>
                Create Magic.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg mb-12 leading-relaxed animate-fade-in font-medium" style={{ animationDelay: '0.4s' }}>
              Where creators meet supporters in a 
              <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-bold"> decentralized universe</span> of direct crypto tipping.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-lg font-bold rounded-2xl shadow-2xl shadow-violet-500/30 border-0 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="mr-3 h-6 w-6 relative z-10" />
                <span className="relative z-10">Start Exploring</span>
                <ArrowRight className="ml-3 h-6 w-6 relative z-10" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-violet-400/50 text-violet-300 hover:text-white hover:border-violet-400 hover:bg-violet-500/10 px-12 py-6 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 backdrop-blur-xl"
              >
                <Heart className="mr-3 h-5 w-5" />
                How It Works
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {/* Central Orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 rounded-full animate-pulse shadow-2xl shadow-violet-500/50"></div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Coins className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
              
              {/* Inner glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-violet-400/30 to-cyan-400/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

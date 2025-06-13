
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center relative">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-6 py-3 rounded-full border border-emerald-500/30 mb-12 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Flowtip</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
              Support Creators
            </span>
            <span className="block text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Directly with Crypto.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            FlowTip lets you discover and support your favorite content creators 
            with direct cryptocurrency tips on the Flow blockchain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-emerald-500/25 border-0 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Discover Creators
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-2 border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-12 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
            >
              How It Works
            </Button>
          </div>

          {/* Floating Visual Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

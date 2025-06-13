
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Heart, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Refined Content */}
          <div className="relative">
            {/* Professional Status Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-600/30 px-6 py-3 rounded-full mb-8 animate-fade-in backdrop-blur-xl">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              <span className="text-emerald-300 text-sm font-medium tracking-wide">Next-Generation Creator Economy</span>
            </div>

            {/* Sophisticated Headlines */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block text-white animate-fade-in">
                Professional
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Creator Platform
              </span>
            </h1>

            {/* Refined Description */}
            <p className="text-xl text-gray-300 max-w-lg mb-10 leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
              Connect with your audience through a sophisticated, 
              <span className="text-emerald-400 font-medium"> decentralized ecosystem</span> designed for professional creators.
            </p>

            {/* Professional CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white px-8 py-4 text-base font-medium rounded-xl shadow-lg transition-all duration-300 hover:shadow-emerald-500/25"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border border-emerald-600/40 text-emerald-300 hover:text-white hover:border-emerald-500 hover:bg-emerald-950/30 px-8 py-4 text-base font-medium rounded-xl transition-all duration-300 backdrop-blur-xl"
              >
                <Heart className="mr-2 h-4 w-4" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Elegant Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              {/* Central Professional Element */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-xl rounded-3xl border border-emerald-500/20 shadow-2xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-emerald-700 to-green-700 rounded-2xl flex items-center justify-center">
                <div className="text-4xl font-bold text-white">FT</div>
              </div>
              
              {/* Sophisticated Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '50s' }}>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-11 h-11 bg-gradient-to-br from-emerald-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

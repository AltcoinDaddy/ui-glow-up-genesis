
import { Wallet, Users, Zap, ArrowRight, Heart, TrendingUp, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const features = [
    {
      icon: Coins,
      title: "Zero Platform Fees",
      description: "Direct creator compensation with complete transparency. Every contribution reaches creators without intermediary costs on our blockchain infrastructure.",
      color: "from-emerald-600 to-green-700"
    },
    {
      icon: Heart,
      title: "Professional Profiles",
      description: "Establish your professional presence with comprehensive creator profiles designed for meaningful audience engagement and growth.",
      color: "from-green-600 to-emerald-700"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Real-time transaction processing with immediate access to earnings through our optimized blockchain settlement system.",
      color: "from-emerald-700 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Professional Features Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-emerald-950/40 border border-emerald-600/30 px-6 py-3 rounded-full mb-8 backdrop-blur-xl">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium tracking-wide">Platform Features</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="block text-white">
                  Professional-Grade
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Creator Tools
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Advanced features designed for professional creators who demand 
                <span className="text-emerald-400 font-medium"> excellence and reliability</span>
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Professional CTA Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative backdrop-blur-xl bg-white/[0.02] p-12 rounded-3xl border border-emerald-500/20 overflow-hidden shadow-2xl">
              {/* Subtle Background Enhancement */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 to-green-950/20"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-600/40 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-300 text-sm font-medium tracking-wide">Join Today</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  <span className="text-white">
                    Ready to elevate your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                    creator journey?
                  </span>
                </h3>
                
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                  Join thousands of professional creators building sustainable income streams 
                  through our advanced decentralized platform.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg border-0 transition-all duration-300 hover:shadow-emerald-500/25"
                >
                  <Wallet className="mr-3 h-5 w-5" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;

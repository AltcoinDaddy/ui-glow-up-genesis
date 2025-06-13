
import { Wallet, Users, Zap, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const features = [
    {
      icon: Wallet,
      title: "Keep 100% of your tips",
      description: "Create your profile, share your work, and receive cryptocurrency tips directly from your supporters. No middlemen, no platform fees.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: Users,
      title: "Create Your Profile",
      description: "Discover creators you love and support them directly with Flow tokens. Simple, transparent, and meaningful.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Instant Withdrawals",
      description: "Connect with fans who value your work and get guaranteed instant withdrawals to your Flow wallet.",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-6 py-2 rounded-full border border-emerald-500/30 mb-8">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">KEY FEATURES</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Revolutionary
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Creator Economy
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Our enterprise platform provides the tools you need to build and scale your 
                audience with direct cryptocurrency support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 p-12 rounded-3xl border border-emerald-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 animate-pulse"></div>
              
              <div className="relative z-10">
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Ready to get started?
                  </span>
                </h3>
                
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                  Connect your wallet and start exploring the future of decentralized applications.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-2xl shadow-emerald-500/25 border-0 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40"
                >
                  <Wallet className="mr-2 h-5 w-5" />
                  Connect Wallet
                  <ArrowRight className="ml-2 h-5 w-5" />
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

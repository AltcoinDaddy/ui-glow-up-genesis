
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/10 p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Unique Logo Design */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-12">
                  <div className="w-8 h-8 bg-white rounded-lg transform -rotate-12 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Flow
                </span>
                <span className="text-white">Tip</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-12">
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-semibold relative group">
                Explore
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-semibold relative group">
                Creators
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 font-semibold relative group">
                Dashboard
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            {/* Wallet Connection */}
            <div className="flex items-center gap-4">
              {isConnected ? (
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border-violet-400/30 text-violet-300 hover:from-violet-500/30 hover:to-cyan-500/30 rounded-2xl px-8 py-3 font-bold"
                >
                  <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                  0x6c1b...8863
                </Button>
              ) : (
                <Button 
                  onClick={() => setIsConnected(true)}
                  className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-700 hover:via-purple-700 hover:to-cyan-700 text-white border-0 rounded-2xl px-8 py-3 font-bold transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/25"
                >
                  <Wallet className="mr-3 h-5 w-5" />
                  Connect Wallet
                </Button>
              )}
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

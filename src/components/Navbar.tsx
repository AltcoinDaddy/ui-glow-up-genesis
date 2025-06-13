
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl border border-white/[0.08] p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Refined Logo Design */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Flow
                </span>
                <span className="text-white font-light">Tip</span>
              </div>
            </div>

            {/* Professional Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                Explore
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                Creators
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium relative group">
                Dashboard
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            {/* Sophisticated Wallet Connection */}
            <div className="flex items-center gap-4">
              {isConnected ? (
                <Button 
                  variant="outline" 
                  className="bg-emerald-950/30 border-emerald-600/40 text-emerald-300 hover:bg-emerald-950/50 rounded-xl px-6 py-2 font-medium"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  0x6c1b...8863
                </Button>
              ) : (
                <Button 
                  onClick={() => setIsConnected(true)}
                  className="bg-gradient-to-r from-emerald-700 to-green-700 hover:from-emerald-800 hover:to-green-800 text-white border-0 rounded-xl px-6 py-2 font-medium transition-all duration-300 shadow-lg"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
              
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

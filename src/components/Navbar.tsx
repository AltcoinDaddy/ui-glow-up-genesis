
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                FlowTip
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                Discover Creators
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
                Dashboard
              </a>
            </div>

            {/* Wallet Connection */}
            <div className="flex items-center gap-4">
              {isConnected ? (
                <Button 
                  variant="outline" 
                  className="bg-emerald-500/20 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/30 rounded-xl px-6"
                >
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                  0x6c1b...8863
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={() => setIsConnected(true)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 rounded-xl px-6 font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

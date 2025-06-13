
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, color, index }: FeatureCardProps) => {
  return (
    <div 
      className="group relative p-8 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/30 transition-all duration-500 hover:bg-white/[0.04] animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Subtle Background Enhancement */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-600/10 to-green-600/10 rounded-full blur-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Professional Icon Design */}
        <div className="relative mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Refined Typography */}
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
          {title}
        </h3>

        {/* Professional Description */}
        <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 text-base">
          {description}
        </p>

        {/* Sophisticated Action Button */}
        <Button 
          variant="ghost" 
          className="text-emerald-400 hover:text-white p-0 h-auto font-medium group/btn text-base relative"
        >
          <span className="relative z-10">Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard;


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
      className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Feature Label */}
        <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300 mb-4 uppercase tracking-wider">
          FEATURE
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Learn More Button */}
        <Button 
          variant="ghost" 
          className="text-gray-400 hover:text-white p-0 h-auto font-semibold group/btn"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>

      {/* Floating Orb */}
      <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br ${color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
    </div>
  );
};

export default FeatureCard;

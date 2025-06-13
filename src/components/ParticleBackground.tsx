
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sophisticated Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-stone-950 to-slate-950"></div>
      
      {/* Elegant Geometric Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#10b981" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="sophisticatedFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#047857" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.8"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Refined Energy Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-15" viewBox="0 0 1200 800">
          <path 
            d="M0,400 Q200,300 400,400 Q600,500 800,400 Q1000,300 1200,400" 
            stroke="url(#sophisticatedFlow)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M0,350 Q300,450 600,350 Q900,250 1200,350" 
            stroke="url(#sophisticatedFlow)" 
            strokeWidth="1.5" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '4s' }}
          />
        </svg>
      </div>

      {/* Professional Geometric Accents */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <div 
              className="w-8 h-8 border border-emerald-600/30 rotate-45 animate-pulse"
              style={{ 
                animationDuration: `${3 + i * 0.5}s`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Subtle Ambient Lighting */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-emerald-900/10 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-green-800/8 via-transparent to-transparent blur-3xl"></div>
    </div>
  );
};

export default ParticleBackground;


const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950"></div>
      
      {/* Flowing Energy Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          <path 
            d="M0,400 Q300,200 600,400 T1200,400" 
            stroke="url(#flow1)" 
            strokeWidth="3" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M0,300 Q400,500 800,300 T1200,300" 
            stroke="url(#flow1)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            <div 
              className={`w-16 h-16 ${i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rounded-full' : ''} 
                border-2 border-cyan-400 animate-pulse`}
              style={{ 
                animationDuration: `${2 + Math.random() * 3}s`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Organic Blob Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse transform -translate-x-24 -translate-y-24"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse transform translate-x-24 translate-y-24" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse transform -translate-x-32 -translate-y-32" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default ParticleBackground;

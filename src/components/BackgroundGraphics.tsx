export const BackgroundGraphics = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-float" 
           style={{ animationDuration: '8s' }} />
      <div className="absolute top-2/3 right-1/4 w-24 h-24 border border-accent/20 rotate-12 animate-float" 
           style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border-2 border-cyan/30 rounded-full animate-float" 
           style={{ animationDuration: '7s', animationDelay: '1s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `
               linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px',
             transform: 'perspective(1000px) rotateX(60deg)',
             transformOrigin: 'center center'
           }} />
      
      {/* Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 10 + 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

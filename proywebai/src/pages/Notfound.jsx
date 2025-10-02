import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Notfound() {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    useEffect(() => {
      document.body.classList.add("notfound");
      return () => document.body.classList.remove("notfound");
    }, []);

  return (
    <div className=" relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        {/* 404 glowing text */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow-pulse">
            404
          </h1>
          <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 -z-10" />
        </div>

        {/* AI-styled message */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              AI System Alert
            </span>
            <div className="w-5 h-5 text-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Página No Encontrada
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto font-mono">
            <span className="text-primary">&gt;_</span> El sistema de navegación no pudo localizar esta ruta
          </p>
        </div>

        {/* Glowing card with info */}
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 mb-8 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground font-mono mb-2">
            <span className="text-accent">Error Code:</span> HTTP 404
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-secondary">Path:</span> {location.pathname}
          </p>
        </div>

        {/* CTA Button */}
        <Link to="/">
          <div 
            size="lg"
            className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)] transition-all duration-300"
          >
            <div className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Volver al Inicio
          </div>
        </Link>

        {/* Tech decoration */}
        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Sistema AI en línea</span>
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-secondary/30 rounded-br-3xl" />
    </div>
  )
}

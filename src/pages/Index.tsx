import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { IndustryCard } from "@/components/IndustryCard";
import { FeatureCard } from "@/components/FeatureCard";
import { BackgroundGraphics } from "@/components/BackgroundGraphics";
import { 
  MapPin, 
  Activity, 
  Monitor, 
  Cloud, 
  Zap, 
  Lock, 
  Gauge, 
  Radio,
  Truck,
  HeartPulse,
  Factory,
  Megaphone,
  HardHat,
  Shield,
  GraduationCap,
  ArrowRight,
  Cpu,
  CircuitBoard
} from "lucide-react";
import logo from "../assets/smartosphere-logo.png";
import heroBg from "../assets/hero-tech-bg.jpg";

const Index = () => {
  const products = [
    {
      icon: MapPin,
      title: "GeoTracker",
      description: "GPS + sensor tracking for vehicles, assets, and personnel with real-time monitoring and analytics."
    },
    {
      icon: Activity,
      title: "MHITS",
      description: "Medical & health IoT tracking system for patient monitoring and healthcare data management."
    },
    {
      icon: Monitor,
      title: "Billboard Controls",
      description: "Smart control units for LED/digital billboards with remote management capabilities."
    },
    {
      icon: Cloud,
      title: "Billboard Portal",
      description: "Cloud platform for managing billboard networks, scheduling content, and analytics."
    },
    {
      icon: HeartPulse,
      title: "BioMed System",
      description: "Biomedical electronics & monitoring solutions for healthcare and laboratory applications."
    },
    {
      icon: Zap,
      title: "mFlash",
      description: "High-speed industrial data/automation controller for manufacturing and process control."
    },
    {
      icon: Lock,
      title: "Laplok",
      description: "Smart locking & industrial safety system with access control and monitoring."
    },
    {
      icon: Gauge,
      title: "GoKart Servomotor",
      description: "Precision servomotor control system for racing and industrial applications."
    },
    {
      icon: Radio,
      title: "Radiation Electronics",
      description: "Radiation measurement & safety electronics for industrial and research facilities."
    }
  ];

  const industries = [
    { icon: Truck, title: "Logistics & Fleet" },
    { icon: HeartPulse, title: "Healthcare & Biomedical" },
    { icon: Factory, title: "Industrial Automation" },
    { icon: Megaphone, title: "Outdoor Media & Advertising" },
    { icon: HardHat, title: "Mining & Safety" },
    { icon: Shield, title: "Government & Compliance" },
    { icon: GraduationCap, title: "Education & R&D Labs" }
  ];

  const features = [
    {
      title: "Hardware + Software Under One Roof",
      description: "Complete end-to-end solutions combining custom electronics with cloud platforms and mobile apps."
    },
    {
      title: "Custom R&D for Any Industry",
      description: "Tailored engineering solutions designed specifically for your unique challenges and requirements."
    },
    {
      title: "In-House Manufacturing",
      description: "Full control over production quality and timelines with our dedicated manufacturing facility."
    },
    {
      title: "99% Uptime Cloud Platform",
      description: "Enterprise-grade reliability with robust infrastructure and 24/7 monitoring."
    },
    {
      title: "Fast Prototyping & Deployment",
      description: "Rapid development cycles from concept to production-ready solution."
    },
    {
      title: "Scalable Architecture",
      description: "Solutions built to grow with your business from pilot to enterprise scale."
    },
    {
      title: "API Integration",
      description: "Seamless connectivity with existing systems through comprehensive API support."
    },
    {
      title: "Low-Network Zone Optimization",
      description: "Robust performance even in challenging connectivity environments."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundGraphics />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Technology background" 
            className="object-cover opacity-30"

          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
            <div className="relative mb-4">
              <div className="absolute inset-0 blur-2xl bg-primary/40 rounded-full scale-150" />
              <img 
                src={logo} 
                alt="SmartoSphere Solutions" 
                className="h-16 md:h-40 animate-fade-in relative"
                style={{
                  filter: 'drop-shadow(0 8px 30px hsl(var(--primary) / 0.6)) drop-shadow(0 0 60px hsl(var(--primary) / 0.4))',
                  transform: 'perspective(1000px) translateZ(30px)',
                }}
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
              Hardware. Software. IoT Intelligence —{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Built for Real-World Problems.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl animate-fade-in">
              SmartoSphere Solutions LLP builds industry-ready electronic products and software platforms to solve mission-critical tracking, automation, biomedical, and industrial challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow-primary">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Where Problems Become{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since 2017, SmartoSphere has engineered custom IoT devices, embedded systems, cloud platforms, and automation solutions. We don't build prototypes—we build scalable, deployable products used across industries.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Backed by Vignan Electronics' 30+ years of hardware expertise, we combine legacy knowledge with cutting-edge technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-gradient-accent text-primary-foreground">
                <Cpu className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-1">30+</div>
                <div className="text-sm opacity-90">Years Hardware Legacy</div>
              </div>
              <div className="p-6 rounded-xl bg-secondary border border-border">
                <CircuitBoard className="w-10 h-10 mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">9</div>
                <div className="text-sm text-muted-foreground">Product Lines</div>
              </div>
              <div className="p-6 rounded-xl bg-secondary border border-border">
                <Shield className="w-10 h-10 mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Platform Uptime</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-primary text-accent-foreground">
                <Factory className="w-10 h-10 mb-3" />
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90">In-House Manufacturing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why We Exist</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industries face critical challenges every day
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background/50 border border-destructive/30">
              <div className="text-destructive text-5xl mb-4">×</div>
              <h3 className="text-lg font-semibold mb-2">Lack of Real-Time Visibility</h3>
              <p className="text-muted-foreground text-sm">No insight into operations, assets, or processes as they happen.</p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 border border-destructive/30">
              <div className="text-destructive text-5xl mb-4">×</div>
              <h3 className="text-lg font-semibold mb-2">Manual Monitoring Failures</h3>
              <p className="text-muted-foreground text-sm">Human error and delays in critical data collection.</p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 border border-destructive/30">
              <div className="text-destructive text-5xl mb-4">×</div>
              <h3 className="text-lg font-semibold mb-2">No Custom Solutions</h3>
              <p className="text-muted-foreground text-sm">Generic products don't fit unique industry requirements.</p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 border border-destructive/30">
              <div className="text-destructive text-5xl mb-4">×</div>
              <h3 className="text-lg font-semibold mb-2">Multiple Vendors</h3>
              <p className="text-muted-foreground text-sm">Juggling hardware, software, and support from different sources.</p>
            </div>
            <div className="p-6 rounded-xl bg-background/50 border border-destructive/30">
              <div className="text-destructive text-5xl mb-4">×</div>
              <h3 className="text-lg font-semibold mb-2">Zero Automation</h3>
              <p className="text-muted-foreground text-sm">Repetitive tasks consuming time and resources.</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-primary text-primary-foreground">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-lg font-semibold mb-2">SmartoSphere Solves All</h3>
              <p className="text-sm opacity-90">End-to-end custom IoT, hardware, and software solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Product Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-proven solutions across tracking, automation, healthcare, and industrial control
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground">
              Trusted across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose SmartoSphere */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">SmartoSphere</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete solutions, unmatched expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Unique Challenge?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We build custom solutions from scratch. Hardware, firmware, cloud, mobile—everything you need to solve your problem and scale your product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow-primary">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 SmartoSphere Solutions LLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

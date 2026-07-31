"use client";

import { Wallet, PieChart, Sparkles, LineChart, Target, Tags, Palette, Shield, Coins, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Multi-Account",
    description: "Effortlessly track cash, bank accounts, and savings in one place."
  },
  {
    icon: <PieChart className="w-6 h-6" />,
    title: "Dynamic Dashboard",
    description: "Beautiful, interactive charts and real-time summaries of your money."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Premium Visuals",
    description: "Sophisticated experience with glow and particle effects."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Smart Analysis",
    description: "Deep expense breakdowns and flexible time-frame filtering."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Savings Tracker",
    description: "Set, visualize, and achieve your financial goals seamlessly."
  },
  {
    icon: <Tags className="w-6 h-6" />,
    title: "Categorized",
    description: "Organize expenses with customizable categories and labels."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Personalized Themes",
    description: "Switch between Dark and Light modes with vibrant accents."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Private & Secure",
    description: "Your data stays entirely on your device using local SQLite."
  },
  {
    icon: <Coins className="w-6 h-6" />,
    title: "Smart Budgets",
    description: "Set limits and keep your spending perfectly on track without stress."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Quick Entry",
    description: "Tap income or expense cards for instant, frictionless transaction recording."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Activity-First",
    description: "Start your day with financial awareness. The app opens directly to your analysis."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 md:py-32 px-6 relative bg-background">
      
      {/* Ambient background glows wrapper to prevent breaking sticky layout */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          
          {/* Left Column (Sticky Header) */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-40 h-fit">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                  Beyond <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">ordinary.</span>
                </h2>
                <p className="text-lg text-muted max-w-md">
                  Koin provides all the tools to take control of your financial future without compromising on design. No clutter, just clarity.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Feature Rows) */}
          <div className="lg:w-2/3 flex flex-col pt-8 lg:pt-0">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 sm:py-10 border-b border-border/50 last:border-0 hover:bg-surface-elevated/40 transition-colors duration-500 sm:rounded-3xl sm:-mx-6 sm:px-6"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 sm:rounded-3xl pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative z-10 shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-muted group-hover:text-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(46,217,155,0.2)] group-hover:border-primary/20 transition-all duration-500">
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-base sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

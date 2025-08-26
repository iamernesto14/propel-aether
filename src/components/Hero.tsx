import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Clock, Shield } from "lucide-react";
import heroChart from "@/assets/hero-3d-chart.jpg";

const Hero = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "Up to 95%",
      label: "Performance Reward",
      color: "text-primary"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: "Up to $300k",
      label: "Simulated Accounts",
      color: "text-secondary"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "24 Hours",
      label: "Guaranteed Reward",
      color: "text-accent"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: "No time limit",
      label: "in Challenge Phase",
      color: "text-primary"
    }
  ];

  const achievements = [
    { value: "50,000+", label: "Funded Traders" },
    { value: "25,000+", label: "Active Accounts" },
    { value: "$50M+", label: "Total Payouts" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute top-20 right-10 w-96 h-96 opacity-20 float">
        <img 
          src={heroChart} 
          alt="3D Trading Chart" 
          className="w-full h-full object-cover rounded-full blur-sm"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering{" "}
            <span className="text-gradient-primary">
              Promising
            </span>
            <br />
            <span className="text-gradient-secondary">
              Traders Worldwide
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of successful traders and transform your trading potential 
            with our cutting-edge funding program.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 glass card-3d glow-hover">
                <div className={`${stat.color} mb-3 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6">
              Start Challenge
            </Button>
            <Button variant="outline" size="lg" className="btn-glass text-lg px-8 py-6">
              Free Trial
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{achievement.value}</div>
                  <div className="text-xs">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }}></div>
    </section>
  );
};

export default Hero;
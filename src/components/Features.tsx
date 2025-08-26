import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  Globe, 
  Award,
  Calculator,
  Headphones
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Payouts",
      description: "Get your profits in as little as 24 hours with our automated payout system.",
      badge: "24h Payout",
      color: "text-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management Tools",
      description: "Advanced risk management features to protect your capital and maximize profits.",
      badge: "Protected",
      color: "text-secondary"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scaling Opportunities",
      description: "Scale your account up to $300,000 based on your proven trading performance.",
      badge: "Up to $300k",
      color: "text-accent"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "No Time Limits",
      description: "Trade at your own pace without pressure. No rushed deadlines or time constraints.",
      badge: "Flexible",
      color: "text-primary"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Markets",
      description: "Access to Forex, Indices, Commodities, and Crypto markets worldwide.",
      badge: "All Markets",
      color: "text-secondary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Profit Sharing",
      description: "Keep up to 95% of your profits. The more you earn, the more you keep.",
      badge: "95% Split",
      color: "text-accent"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive trading analytics and performance insights to improve your strategy.",
      badge: "Pro Analytics",
      color: "text-primary"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team whenever you need assistance.",
      badge: "24/7",
      color: "text-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Empower</span> Your Trading
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the features that make us the preferred choice for serious traders worldwide. 
            Built for performance, designed for success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="relative group glass glow-hover card-3d overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="max-w-2xl mx-auto glass p-8">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Trading Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of successful traders who have already transformed their trading with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gradient px-8 py-3 rounded-lg font-semibold">
                Start Free Trial
              </button>
              <button className="btn-glass px-8 py-3 rounded-lg font-semibold">
                View Challenges
              </button>
            </div>
          </Card>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Features;
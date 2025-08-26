import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$89",
      originalPrice: "$129",
      accountSize: "$10,000",
      icon: <Zap className="w-6 h-6" />,
      badge: "Most Popular",
      badgeColor: "bg-primary",
      features: [
        "Profit Target: 8%",
        "Maximum Loss: 5%",
        "Daily Loss Limit: 3%",
        "Minimum Trading Days: 4",
        "Profit Split: 80%",
        "Free Retake",
        "1-Step Challenge"
      ],
      highlighted: true
    },
    {
      name: "Professional",
      price: "$179",
      originalPrice: "$249",
      accountSize: "$25,000",
      icon: <Crown className="w-6 h-6" />,
      badge: "Best Value",
      badgeColor: "bg-secondary",
      features: [
        "Profit Target: 8%",
        "Maximum Loss: 5%",
        "Daily Loss Limit: 3%",
        "Minimum Trading Days: 4",
        "Profit Split: 85%",
        "Free Retake",
        "1-Step Challenge",
        "Scaling Plan Available"
      ],
      highlighted: false
    },
    {
      name: "Elite",
      price: "$359",
      originalPrice: "$499",
      accountSize: "$50,000",
      icon: <Star className="w-6 h-6" />,
      badge: "Premium",
      badgeColor: "bg-accent",
      features: [
        "Profit Target: 8%",
        "Maximum Loss: 5%",
        "Daily Loss Limit: 3%",
        "Minimum Trading Days: 3",
        "Profit Split: 90%",
        "Free Retake",
        "1-Step Challenge",
        "Scaling Plan Available",
        "Priority Support"
      ],
      highlighted: false
    },
    {
      name: "Master",
      price: "$599",
      originalPrice: "$799",
      accountSize: "$100,000",
      icon: <Crown className="w-6 h-6" />,
      badge: "Enterprise",
      badgeColor: "bg-gradient-primary",
      features: [
        "Profit Target: 8%",
        "Maximum Loss: 5%",
        "Daily Loss Limit: 3%",
        "Minimum Trading Days: 3",
        "Profit Split: 95%",
        "Free Retake",
        "1-Step Challenge",
        "Scaling up to $300k",
        "Dedicated Account Manager",
        "Custom Risk Parameters"
      ],
      highlighted: false
    }
  ];

  const comparisons = [
    { feature: "Profit Target", starter: "8%", pro: "8%", elite: "8%", master: "8%" },
    { feature: "Max Daily Loss", starter: "3%", pro: "3%", elite: "3%", master: "3%" },
    { feature: "Max Overall Loss", starter: "5%", pro: "5%", elite: "5%", master: "5%" },
    { feature: "Profit Split", starter: "80%", pro: "85%", elite: "90%", master: "95%" },
    { feature: "Min Trading Days", starter: "4", pro: "4", elite: "3", master: "3" },
    { feature: "Account Size", starter: "$10k", pro: "$25k", elite: "$50k", master: "$100k" },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="text-gradient-primary">Challenge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect funding challenge that matches your trading style and experience level. 
            All plans include our comprehensive risk management and support systems.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group transition-all duration-300 ${
                plan.highlighted 
                  ? 'glass glow-primary scale-105 border-primary/30' 
                  : 'glass glow-hover'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className={`${plan.badgeColor} text-white px-3 py-1`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.highlighted ? 'bg-primary/20 text-primary' : 'bg-card-secondary'
                  }`}>
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-primary">{plan.price}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <div className="text-2xl font-semibold text-secondary">
                    {plan.accountSize}
                  </div>
                  <div className="text-sm text-muted-foreground">Account Size</div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-6 ${
                    plan.highlighted 
                      ? 'btn-gradient' 
                      : 'btn-glass'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-lg" />
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Detailed Comparison
          </h3>
          <Card className="glass overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left p-4 font-semibold">Features</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">Professional</th>
                    <th className="text-center p-4 font-semibold">Elite</th>
                    <th className="text-center p-4 font-semibold">Master</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-b border-card-border/50 hover:bg-card-secondary/30">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">{row.starter}</td>
                      <td className="p-4 text-center">{row.pro}</td>
                      <td className="p-4 text-center">{row.elite}</td>
                      <td className="p-4 text-center">{row.master}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Have Questions About Our Pricing?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the right challenge for your trading goals. 
            Get in touch for personalized recommendations.
          </p>
          <Button className="btn-gradient">
            Contact Support
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Pricing;
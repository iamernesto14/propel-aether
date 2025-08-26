import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Crown, Zap, Star, Info, HelpCircle } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("2-step");

  const planTabs = [
    { id: "2-step", label: "Elite 2-Step", active: true },
    { id: "1-step", label: "Elite 1-Step", active: false },
    { id: "instant", label: "Elite Instant", active: false, badge: "New" },
  ];

  const accountSizes = [
    { size: "$5,000", price: "$39", originalPrice: "$55" },
    { size: "$10,000", price: "$79", originalPrice: "$109" },
    { size: "$25,000", price: "$169", originalPrice: "$239" },
    { size: "$50,000", price: "$299", originalPrice: "$419" },
    { size: "$100,000", price: "$549", originalPrice: "$769" },
    { size: "$200,000", price: "$999", originalPrice: "$1399" },
  ];

  const challengeRules = [
    {
      name: "Phase 1 Profit Target",
      tooltip: "The profit target you need to achieve in the first evaluation phase",
      values: ["8%", "8%", "8%", "8%", "8%", "8%"]
    },
    {
      name: "Phase 2 Profit Target", 
      tooltip: "The profit target for the second evaluation phase",
      values: ["4%", "4%", "4%", "4%", "4%", "4%"]
    },
    {
      name: "Maximum Overall Loss",
      tooltip: "The maximum loss allowed during the entire challenge period",
      values: ["8% ($400)", "8% ($800)", "8% ($2,000)", "8% ($4,000)", "8% ($8,000)", "8% ($16,000)"]
    },
    {
      name: "Maximum Daily Loss",
      tooltip: "The maximum loss allowed in a single trading day",
      values: ["4% ($200)", "4% ($400)", "4% ($1,000)", "4% ($2,000)", "4% ($4,000)", "4% ($8,000)"]
    },
    {
      name: "News Trading",
      tooltip: "Whether you can trade during high-impact news events",
      values: ["✓", "✓", "✓", "✓", "✓", "✓"]
    },
    {
      name: "Performance Reward Upto",
      tooltip: "Maximum profit split percentage you can achieve",
      values: ["95%", "95%", "95%", "95%", "95%", "95%"]
    },
    {
      name: "Minimum Trading Days",
      tooltip: "Minimum number of days you must trade during the challenge",
      values: ["5 Days", "5 Days", "5 Days", "5 Days", "5 Days", "5 Days"]
    },
    {
      name: "First Withdrawal",
      tooltip: "When you can request your first withdrawal",
      values: ["21 Days", "21 Days", "21 Days", "21 Days", "21 Days", "21 Days"]
    },
    {
      name: "Refundable Fee",
      tooltip: "The refundable portion of your challenge fee upon successful completion",
      values: ["$32", "$59", "$139", "$229", "$399", "$758"]
    }
  ];

  return (
    <TooltipProvider>
      <section id="pricing" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose the Best{" "}
              <span className="text-gradient-primary">Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select from our range of funding challenges designed to accelerate your trading career.
              Each plan comes with industry-leading profit splits and comprehensive support.
            </p>
          </div>

          {/* Challenge Type Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-card-secondary/50 rounded-lg backdrop-blur-sm border border-card-border">
              {planTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-lg animate-scale-in'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card-secondary/50'
                  }`}
                >
                  {tab.label}
                  {tab.badge && (
                    <Badge className="ml-2 bg-secondary text-secondary-foreground text-xs">
                      {tab.badge}
                    </Badge>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <Card className="glass overflow-hidden animate-fade-in">
            <div className="overflow-x-auto">
              {/* Account Size Header */}
              <div className="bg-gradient-to-r from-accent/20 to-secondary/20 px-6 py-4 border-b border-card-border">
                <div className="grid grid-cols-7 gap-4">
                  <div className="text-left font-semibold text-foreground">Account Size</div>
                  {accountSizes.map((account, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-foreground animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                        {account.size}
                      </div>
                      <Button 
                        className="w-full mt-2 btn-gradient hover-scale transition-all duration-300"
                        size="sm"
                      >
                        Get Plan
                      </Button>
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="font-medium text-primary">{account.price}</span>
                        <span className="line-through ml-1">{account.originalPrice}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge Rules */}
              <div className="divide-y divide-card-border/50">
                {challengeRules.map((rule, ruleIndex) => (
                  <div 
                    key={ruleIndex} 
                    className="grid grid-cols-7 gap-4 p-4 hover:bg-card-secondary/30 transition-all duration-300 animate-fade-in"
                    style={{animationDelay: `${ruleIndex * 50}ms`}}
                  >
                    <div className="flex items-center gap-2 font-medium text-foreground">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-primary cursor-help transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{rule.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                      {rule.name}
                    </div>
                    {rule.values.map((value, valueIndex) => (
                      <div 
                        key={valueIndex} 
                        className="text-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {value === "✓" ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          value
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Compare Challenges Link */}
          <div className="mt-12 text-center">
            <Button variant="outline" className="btn-glass hover-scale">
              Compare Challenges
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 animate-fade-in">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              Our expert team is here to guide you towards the perfect challenge for your trading goals. 
              Get personalized recommendations based on your experience and risk tolerance.
            </p>
            <Button className="btn-gradient hover-scale animate-fade-in">
              Contact Our Experts
            </Button>
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </section>
    </TooltipProvider>
  );
};

export default Pricing;
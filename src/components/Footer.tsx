import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Team", href: "#team" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Blog", href: "#blog" }
      ]
    },
    {
      title: "Trading",
      links: [
        { name: "Challenges", href: "#challenges" },
        { name: "Pricing", href: "#pricing" },
        { name: "Rules", href: "#rules" },
        { name: "Payouts", href: "#payouts" },
        { name: "Scaling", href: "#scaling" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "FAQ", href: "#faq" },
        { name: "Live Chat", href: "#chat" },
        { name: "Tutorials", href: "#tutorials" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Risk Disclosure", href: "#risk" },
        { name: "Compliance", href: "#compliance" },
        { name: "Licenses", href: "#licenses" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-background-secondary border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="text-3xl font-bold text-gradient-primary mb-4">
                TradePro
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering traders worldwide with cutting-edge funding solutions. 
                Join thousands of successful traders who trust us with their trading careers.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">support@tradepro.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">New York, NY 10001</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={social.href} aria-label={social.name}>
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-card-border">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Get the latest trading insights and platform updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-card border-card-border"
                />
                <Button className="btn-gradient whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-card-border" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 TradePro. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>🔒 Regulated & Secure</span>
              <span>⚡ 24h Payouts</span>
              <span>🏆 95% Profit Split</span>
            </div>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="pb-6">
          <div className="text-xs text-muted-foreground text-center max-w-4xl mx-auto">
            <strong>Risk Warning:</strong> Trading foreign exchange and contracts for difference 
            on margin carries a high level of risk and may not be suitable for all investors. 
            The possibility exists that you could sustain a loss in excess of your deposited funds 
            and therefore you should not speculate with capital that you cannot afford to lose.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
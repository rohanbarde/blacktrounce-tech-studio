import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BarChart3, Brain, Database, TrendingUp, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms to analyze athlete performance, predict outcomes, and optimize training programs.",
    },
    {
      icon: Activity,
      title: "Performance Tracking",
      description: "Real-time monitoring systems that capture and analyze crucial performance metrics for athletes and teams.",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Intuitive dashboards and reporting tools that transform complex sports data into actionable insights.",
    },
    {
      icon: Database,
      title: "Sports Data Management",
      description: "Comprehensive data infrastructure solutions for storing, processing, and managing large-scale sports datasets.",
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Statistical models and simulations to forecast performance trends, injury risks, and game outcomes.",
    },
    {
      icon: Zap,
      title: "Real-Time Solutions",
      description: "High-performance systems for live game analysis, instant feedback, and on-the-spot decision support.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions tailored for the sports industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-lift border-2 bg-card hover:border-foreground/20 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const EngagementModels = () => {
  const models = [
    {
      title: "Project-Based",
      description: "Fixed scope, timeline, and budget for well-defined projects",
      features: [
        "Clear deliverables and milestones",
        "Predictable costs",
        "Dedicated project team",
        "Regular progress updates",
      ],
    },
    {
      title: "Time & Materials",
      description: "Flexible engagement for evolving requirements and ongoing development",
      features: [
        "Pay for actual hours worked",
        "Adaptable to changing needs",
        "Transparent billing",
        "Scalable team size",
      ],
    },
    {
      title: "Dedicated Team",
      description: "Long-term partnership with a team exclusively focused on your goals",
      features: [
        "Full-time dedicated resources",
        "Direct team management",
        "Deep domain expertise",
        "Long-term collaboration",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="engagement" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Engagement Models
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the collaboration approach that best fits your project needs and organizational structure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="border-2 hover-lift bg-card"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-display mb-2">{model.title}</CardTitle>
                <p className="text-muted-foreground">{model.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full mt-6 border-2"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, Rocket, Trophy } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Work on cutting-edge sports technology projects",
    },
    {
      icon: Trophy,
      title: "Growth Opportunities",
      description: "Continuous learning and professional development",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and supportive culture",
    },
    {
      icon: Briefcase,
      title: "Competitive Benefits",
      description: "Comprehensive compensation and benefits package",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="careers" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of a dynamic team shaping the future of sports technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2 text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-2 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-display">Open Positions</CardTitle>
            <CardDescription className="text-base">
              We're always looking for talented individuals to join our team
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold">Buisness Developemnt Executive</h3>
                <span className="text-sm text-muted-foreground">Full-time</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Drive sales growth by identifying new opportunities and building strong client relationships
              </p>
              <Button onClick={scrollToContact} variant="outline">Apply Now</Button>
            </div>

            <div className="border-2 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold">Software Developer</h3>
                <span className="text-sm text-muted-foreground">Full-time</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Develop machine learning models for performance prediction and analysis
              </p>
              <Button onClick={scrollToContact} variant="outline">Apply Now</Button>
            </div>

            <div className="border-2 rounded-lg p-6 hover:border-foreground/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-display font-bold">Trainee Software Developerr</h3>
                <span className="text-sm text-muted-foreground">Full-time</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Create responsive web applications for sports technology solutions
              </p>
              <Button onClick={scrollToContact} variant="outline">Apply Now</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Careers;

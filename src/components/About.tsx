import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb } from "lucide-react";
import maheshImg from "../assets/MaheshGadade.jpeg";
import mansiImg from "../assets/MansiH.jpeg";


const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize the sports industry through innovative technology solutions that enhance performance, efficiency, and decision-making.",
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of technology experts, sports enthusiasts, and data scientists dedicated to pushing the boundaries of sports tech.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "To become the leading sports technology partner, empowering athletes and organizations worldwide with cutting-edge solutions.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About Blacktrounce
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Blacktrounce Tech Studio, we're passionate about transforming the sports landscape
            through innovative technology. Our team combines deep sports knowledge with technical
            expertise to deliver solutions that make a real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-2 bg-card text-center hover-lift"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Placeholder for leadership team */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-display font-bold mb-8">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-8">
                <img
                  src={maheshImg}
                  alt="Mahesh Gadade"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border"
                />
                <h4 className="text-xl font-display font-bold mb-2">Mahesh Gadade</h4>
                <p className="text-muted-foreground">Founder & CEO</p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="pt-8">
                <img
                  src={mansiImg}
                  alt="Manasi H"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border"
                />
                <h4 className="text-xl font-display font-bold mb-2">Manasi H</h4>
                <p className="text-muted-foreground">Chief Technology Officer</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

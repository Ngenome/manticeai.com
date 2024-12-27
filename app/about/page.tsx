import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Target, Globe } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description:
      "Pushing the boundaries of AI technology to create powerful, accessible tools.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description:
      "Building solutions that genuinely improve how people work and create.",
  },
  {
    icon: Target,
    title: "Quality & Precision",
    description:
      "Delivering accurate, reliable results that professionals can trust.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Making advanced AI technology accessible to users worldwide.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "/team/sarah.jpg",
  },
  {
    name: "Michael Roberts",
    role: "CTO & Co-founder",
    image: "/team/michael.jpg",
  },
  {
    name: "David Kim",
    role: "Head of AI",
    image: "/team/david.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    image: "/team/elena.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Transforming Work Through
              <span className="text-primary"> Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to democratize AI technology, making powerful
              tools accessible to creators, developers, and businesses
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2023, Mantice AI emerged from a simple observation:
                while AI technology was becoming increasingly powerful, it
                remained inaccessible to many who could benefit from it.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we're proudly serving users across 150+ countries,
                helping them leverage AI to enhance their creativity,
                productivity, and capabilities.
              </p>
              <Button className="gap-2">
                Join Our Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
              <Image
                src="/office.jpg"
                alt="Mantice AI Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and shape our product
              development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative rounded-xl border p-8 bg-background hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the people behind Mantice AI who are passionate about making
              AI accessible and useful for everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">
              Join Us in Shaping the Future
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Whether you're a developer, creator, or business leader, there's a
              place for you in our growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="gap-2">
                <a href="https://app.manticeai.com/register">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="/careers">View Open Positions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

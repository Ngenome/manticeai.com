import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Bot,
  Code,
  Image as ImageIcon,
  FileText,
  CheckCircle2,
  Mail,
  Twitter,
  Github,
  Linkedin,
  ExternalLink,
  Stars,
  Repeat,
  Gauge,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chat Assistant",
    description:
      "Intelligent conversations and instant assistance for any task",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Code,
    title: "Code Generation",
    description: "Transform ideas into production-ready code instantly",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: ImageIcon,
    title: "Image Generation",
    description: "Create stunning visuals and artwork with AI",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: FileText,
    title: "Content Writing",
    description: "Generate engaging content for any purpose",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const toolHighlights = [
  {
    title: "Intelligent Processing",
    description: "Advanced AI models for accurate outputs",
    icon: Stars,
  },
  {
    title: "Continuous Updates",
    description: "Regular improvements and new features",
    icon: Repeat,
  },
  {
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes",
    icon: Gauge,
  },
  {
    title: "Secure & Private",
    description: "Enterprise-grade security for your data",
    icon: Lock,
  },
];

const pricingCards = [
  {
    title: "Starter",
    price: "$10",
    credits: "1,000",
    features: [
      "Access to all basic tools",
      "Standard processing speed",
      "Email support",
      "7-day history",
    ],
  },
  {
    title: "Pro",
    price: "$49",
    credits: "5,500",
    popular: true,
    features: [
      "Access to all advanced tools",
      "Priority processing",
      "Priority support",
      "30-day history",
      "API access",
    ],
  },
  {
    title: "Enterprise",
    price: "$199",
    credits: "25,000",
    features: [
      "Custom tool integration",
      "Dedicated infrastructure",
      "24/7 phone support",
      "90-day history",
      "Team management",
      "Custom API limits",
    ],
  },
];

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "API", href: "/api" },
    { label: "Documentation", href: "/docs" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Security", href: "/security" },
    { label: "Status", href: "/status" },
  ],
};

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-32 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white/10" />
          </div>
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <Sparkles className="h-3.5 w-3.5 mr-2" />
                Powered by Advanced AI Models
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Transform Your Work with Intelligent AI Tools
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access powerful AI tools for code generation, content creation,
                image generation, and more. Experience the future of
                productivity today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="gap-2 text-base">
                  <a href="https://app.manticeai.com/register">
                    Start Free Trial
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-base"
                >
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {toolHighlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-primary/5"
                  >
                    <highlight.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">{highlight.title}</h3>
                    <p className="text-xs text-muted-foreground text-center">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20" id="features">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Everything You Need in One Place
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive suite of AI tools designed to enhance your
                productivity and creativity. Built for professionals, easy for
                everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group relative rounded-xl border p-8 hover:border-primary/50 transition-colors"
                >
                  <div
                    className={`h-12 w-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-6`}
                  >
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Simple, Usage-Based Pricing
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your needs. Only pay for what you
                use, with no hidden fees or long-term commitments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingCards.map((card) => (
                <div
                  key={card.title}
                  className={`relative rounded-xl border bg-background p-8 ${
                    card.popular ? "border-primary shadow-lg" : ""
                  }`}
                >
                  {card.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{card.price}</span>
                    <span className="text-muted-foreground"> /month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {card.credits} credits included
                  </p>
                  <ul className="space-y-4 mb-8">
                    {card.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={card.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-foreground opacity-10" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Work?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users already benefiting from our AI tools.
                Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a
                    href="https://app.manticeai.com/register"
                    className="gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://app.manticeai.com/contact">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

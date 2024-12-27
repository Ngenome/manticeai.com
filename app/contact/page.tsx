import SiteLayout from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageSquare, Building, ArrowRight, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Chat Support",
    description: "Get instant help from our team",
    action: "Start Chat",
    link: "https://app.manticeai.com/support",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    action: "Send Email",
    link: "mailto:support@manticeai.com",
  },
  {
    icon: Building,
    title: "Enterprise Support",
    description: "Dedicated support for business",
    action: "Contact Sales",
    link: "/enterprise",
  },
];

const offices = [
  {
    city: "Nairobi",
    country: "Kenya",
    address: "001 Moi Avenue",
    timezone: "EAT (UTC+3)",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team for support, sales inquiries, or
              general questions. We're always happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card key={method.title} className="group">
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    variant="outline"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <a href={method.link} className="gap-2">
                      {method.action}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div>
            <h3 className="text-xl font-bold mb-6">Our Offices</h3>
            <div className="space-y-8">
              {offices.map((office) => (
                <div key={office.city} className="rounded-lg border p-6">
                  <h4 className="font-semibold mb-2">
                    {office.city}, {office.country}
                  </h4>
                  <p className="text-muted-foreground mb-4">{office.address}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Timezone: {office.timezone}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border p-6 bg-primary/5">
              <h4 className="font-semibold mb-2">Enterprise Support</h4>
              <p className="text-muted-foreground mb-4">
                For enterprise inquiries and dedicated support options, please
                contact our sales team.
              </p>
              <Button variant="outline" asChild>
                <a href="mailto:enterprise@manticeai.com" className="gap-2">
                  Contact Enterprise Sales
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Lock,
  Key,
  Server,
  BookLock,
  FileKey,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
  },
  {
    icon: Key,
    title: "Access Control",
    description:
      "Role-based access control and multi-factor authentication options.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Hosted on enterprise-grade cloud infrastructure with regular security audits.",
  },
  {
    icon: BookLock,
    title: "Compliance",
    description:
      "Adherence to international security standards and regulations.",
  },
  {
    icon: FileKey,
    title: "Data Privacy",
    description:
      "Strong data privacy controls and transparent data handling practices.",
  },
  {
    icon: Shield,
    title: "24/7 Monitoring",
    description: "Continuous security monitoring and threat detection systems.",
  },
];

const certifications = [
  "SOC 2 Type II Certified",
  "ISO 27001 Certified",
  "GDPR Compliant",
  "CCPA Compliant",
  "HIPAA Compliant",
  "regular penetration testing",
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              Security First, Always
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We take security seriously at every level. Learn about our
              comprehensive approach to protecting your data and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is built with security at its core, implementing
              industry best practices at every layer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary/50 to-primary" />
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Certifications & Compliance
            </h2>
            <p className="text-muted-foreground mb-12 text-center">
              We maintain the highest standards of security certifications and
              regularly undergo independent audits.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-4 p-4 rounded-lg border bg-background"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium capitalize">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-20">
        <div className="container">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Security Contact</CardTitle>
              <CardDescription>
                For security inquiries or to report vulnerabilities, please
                contact our security team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We take all security reports seriously and will respond promptly
                to investigate any potential vulnerabilities.
              </p>
              <Button asChild>
                <a href="mailto:security@manticeai.com" className="gap-2">
                  Contact Security Team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

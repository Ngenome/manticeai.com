import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  ArrowRight,
  ExternalLink,
  Mail,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-of-service" },
    { label: "Security", href: "/security" },
    { label: "Status", href: "/status" },
  ],
};

export default function SiteLayout({
  children,
  showHeaderCta = true,
}: {
  children: React.ReactNode;
  showHeaderCta?: boolean;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Mantice AI"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">Mantice AI</span>
          </Link>
          <div className="flex items-center gap-4">
            <ModeToggle />
            {showHeaderCta && (
              <Button asChild>
                <a
                  href="https://app.manticeai.com"
                  className="gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch App
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-background to-primary/5 border-t">
        <div className="container py-12 md:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Mantice AI"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                <h3 className="text-2xl font-bold">Mantice AI</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Transform your workflow with intelligent AI tools. Experience
                the future of work today.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/manticeai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/manticeai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/manticeai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section with Gradient Line */}
          <div className="relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted-foreground">
                  © {currentYear} Mantice AI. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    href="mailto:info@manticeai.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    info@manticeai.com
                  </a>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://app.manticeai.com/register"
                      className="gap-2"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

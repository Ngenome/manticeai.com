import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Zap, InfoIcon, CreditCard, Check } from "lucide-react";
import Link from "next/link";
export const metadata = {
  title: "Pricing - Pay As You Go AI Tools",
  description:
    "Simple, transparent pricing for AI tools. Pay only for what you use with our credit-based system. No subscriptions, no hidden fees.",
};
const PricingPage = () => {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pay only for what you use with our credit-based system. No
          subscriptions, no hidden fees.
        </p>
      </div>

      {/* Pay As You Go Card */}
      <Card className="border-2 border-primary">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Pay As You Go</CardTitle>
          <CardDescription>
            Purchase credits and use them anytime
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold">$0.01</div>
            <div className="text-sm text-muted-foreground">per credit</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Credits never expire</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No monthly commitments</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Purchase in any amount starting at $5</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Volume discounts available</span>
            </div>
          </div>
          <Link href="/tools">
            <Button className="w-full mt-6">Get Started</Button>
          </Link>
        </CardContent>
      </Card>

      {/* Volume Discounts */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-center">
          Volume Discounts
        </h2>
        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Purchase Amount</TableHead>
                  <TableHead>Bonus Credits</TableHead>
                  <TableHead>Effective Price Per Credit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>$20 - $49</TableCell>
                  <TableCell>+5% bonus credits</TableCell>
                  <TableCell>$0.0095 per credit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$50 - $99</TableCell>
                  <TableCell>+10% bonus credits</TableCell>
                  <TableCell>$0.0091 per credit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>$100+</TableCell>
                  <TableCell>+15% bonus credits</TableCell>
                  <TableCell>$0.0087 per credit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* How It Works */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-center">
          How Credits Work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Credits</CardTitle>
              <CardDescription>
                Buy credits in any amount starting at $5. Credits are added
                instantly to your account.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Use Tools</CardTitle>
              <CardDescription>
                Each tool shows its credit cost upfront. Credits are deducted
                only when you use a tool.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top Up Anytime</CardTitle>
              <CardDescription>
                Add more credits whenever you need them. No automatic renewals
                or subscriptions.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Do credits expire?</CardTitle>
              <CardDescription>
                No, your credits never expire. Use them at your own pace without
                any time pressure.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Can I get a refund?</CardTitle>
              <CardDescription>
                Unused credits can be refunded within 30 days of purchase.
                Contact support for assistance.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How are credit costs calculated?</CardTitle>
              <CardDescription>
                Each tool has a base cost plus additional credits based on the
                complexity and resources used.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What payment methods are accepted?</CardTitle>
              <CardDescription>
                We accept all major credit cards and process payments securely
                through Paystack.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Enterprise Section */}
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Looking for enterprise pricing?</AlertTitle>
        <AlertDescription>
          Contact us for custom pricing and volume discounts for larger
          organizations.
        </AlertDescription>
      </Alert>

      {/* Safe and Secure */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <CreditCard className="h-5 w-5" />
          <span className="text-sm text-muted-foreground">
            Secure payments through Paystack
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

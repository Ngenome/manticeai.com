import SiteLayout from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Bell,
} from "lucide-react";

// This would typically come from your status monitoring service
const systems = [
  {
    name: "API",
    status: "operational",
    uptime: "99.99%",
    lastIncident: null,
  },
  {
    name: "Web App",
    status: "operational",
    uptime: "99.98%",
    lastIncident: null,
  },
  {
    name: "Database",
    status: "operational",
    uptime: "99.99%",
    lastIncident: null,
  },
  {
    name: "File Storage",
    status: "operational",
    uptime: "99.99%",
    lastIncident: null,
  },
  {
    name: "AI Processing",
    status: "operational",
    uptime: "99.95%",
    lastIncident: null,
  },
  {
    name: "Authentication",
    status: "operational",
    uptime: "100%",
    lastIncident: null,
  },
];

const recentIncidents = [
  {
    date: "2024-03-15",
    title: "Increased API Latency",
    status: "resolved",
    duration: "23 minutes",
    description:
      "We experienced elevated API response times due to increased traffic. The issue has been resolved by scaling our infrastructure.",
  },
  {
    date: "2024-03-10",
    title: "Scheduled Maintenance",
    status: "completed",
    duration: "45 minutes",
    description:
      "Completed planned maintenance to upgrade our database infrastructure.",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "operational":
      return "text-green-500";
    case "degraded":
      return "text-yellow-500";
    case "outage":
      return "text-red-500";
    default:
      return "text-muted-foreground";
  }
};

export default function StatusPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
              <h1 className="text-4xl font-bold tracking-tight">
                All Systems Operational
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              Track the current status of Mantice AI services and view detailed
              system metrics.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <a href="#subscribe" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Subscribe to Updates
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#history" className="gap-2">
                  <Clock className="h-4 w-4" />
                  View Incident History
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Current Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systems.map((system) => (
              <Card key={system.name}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">{system.name}</CardTitle>
                  <CheckCircle2
                    className={`h-5 w-5 ${getStatusColor(system.status)}`}
                  />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uptime: {system.uptime}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-12" id="history">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {recentIncidents.map((incident) => (
              <Card key={incident.date}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <CardTitle>{incident.title}</CardTitle>
                      <CardDescription>
                        {incident.date} · Duration: {incident.duration}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium capitalize">
                        {incident.status}
                      </span>
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {incident.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 bg-muted/50" id="subscribe">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Subscribe to Status Updates</CardTitle>
              <CardDescription>
                Get notified about system status changes and planned
                maintenance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <a
                  href="https://status.manticeai.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  Subscribe to Status Updates
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>30-Day Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-500">99.99%</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Last 30 days average
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">245ms</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Global average
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">0</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Currently monitoring
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Information */}
      <section className="py-12 border-t">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              If you're experiencing issues not reflected in our status page,
              please contact our support team.
            </p>
            <Button variant="outline" asChild>
              <a href="mailto:support@manticeai.com" className="gap-2">
                Contact Support
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

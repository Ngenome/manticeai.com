"use client";

import React from "react";
import Lottie from "lottie-react";
import developmentModeLottie from "@/lottie/developmentMode.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Construction } from "lucide-react";

const SectionUnderDevelopment = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Section Under Development
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Alert variant="warning">
          <Construction className="h-4 w-4" />
          <AlertTitle>Work in Progress</AlertTitle>
          <AlertDescription>
            We're working hard to bring you new features. Please check back
            soon!
          </AlertDescription>
        </Alert>
        <Lottie animationData={developmentModeLottie} className="w-48 h-48" />
        <p className="text-sm text-muted-foreground text-center">
          Our team is actively developing this section. We appreciate your
          patience.
        </p>
      </CardContent>
    </Card>
  );
};

export default SectionUnderDevelopment;

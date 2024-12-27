// components/ui/charts.tsx
"use client";

import { ReactNode } from "react";
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  Legend,
  Rectangle,
} from "recharts";
import { Monitor, Smartphone } from "lucide-react";

// Types
export interface ChartConfig {
  [key: string]: {
    label: string;
    icon?: any;
    color: string;
    theme?: {
      light: string;
      dark: string;
    };
  };
}

// Chart Container Component
interface ChartContainerProps {
  children: ReactNode;
  config?: ChartConfig;
  className?: string;
}

export function ChartContainer({
  children,
  config,
  className,
}: ChartContainerProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
}

// Chart Tooltip Component
interface ChartTooltipContentProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  labelKey?: string;
  nameKey?: string;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  labelKey = "name",
  nameKey,
  hideLabel,
  hideIndicator,
  indicator = "dot",
}: ChartTooltipContentProps) {
  if (!active || !payload) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {!hideLabel && (
        <div className="px-3 py-2">
          <div className="text-sm text-muted-foreground">
            {labelKey ? payload[0]?.payload[labelKey] : label}
          </div>
        </div>
      )}
      <div className="px-3 pb-2">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2">
            {!hideIndicator && (
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
            )}
            <span className="text-sm font-medium">
              {nameKey ? entry.payload[nameKey] : entry.name}:
            </span>
            <span className="text-sm font-medium">
              {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Chart Legend Component
interface ChartLegendContentProps {
  payload?: any[];
  nameKey?: string;
}

export function ChartLegendContent({
  payload,
  nameKey,
}: ChartLegendContentProps) {
  if (!payload) {
    return null;
  }

  return (
    <div className="flex gap-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm font-medium">
            {nameKey ? entry.payload[nameKey] : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// Custom Bar Chart
interface BarChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  yAxisWidth?: number;
  className?: string;
}

export function BarChart({
  data,
  categories,
  index,
  colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"],
  valueFormatter = (value: number) => value.toString(),
  yAxisWidth = 56,
  className,
}: BarChartProps) {
  return (
    <ChartContainer className={className}>
      <RechartsBarChart data={data}>
        <CartesianGrid vertical={false} className="stroke-muted" />
        <XAxis
          dataKey={index}
          tick={{ fill: "hsl(var(--foreground))" }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          width={yAxisWidth}
          tick={{ fill: "hsl(var(--foreground))" }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => valueFormatter(value)}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
            />
          )}
        />
        {categories.map((category, index) => (
          <Bar
            key={category}
            dataKey={category}
            fill={colors[index % colors.length]}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
}

// Custom Line Chart
interface LineChartProps {
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  yAxisWidth?: number;
  className?: string;
}

export function LineChart({
  data,
  categories,
  index,
  colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"],
  valueFormatter = (value: number) => value.toString(),
  yAxisWidth = 56,
  className,
}: LineChartProps) {
  return (
    <ChartContainer className={className}>
      <RechartsLineChart data={data}>
        <CartesianGrid vertical={false} className="stroke-muted" />
        <XAxis
          dataKey={index}
          tick={{ fill: "hsl(var(--foreground))" }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          width={yAxisWidth}
          tick={{ fill: "hsl(var(--foreground))" }}
          axisLine={false}
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => valueFormatter(value)}
        />
        <Tooltip
          content={({ active, payload, label }) => (
            <ChartTooltipContent
              active={active}
              payload={payload}
              label={label}
            />
          )}
        />
        {categories.map((category, index) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[index % colors.length]}
            strokeWidth={2}
            dot={false}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
}

"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "UI/UX", desktop: 100 },
  { month: "Branding", desktop: 90 },
  { month: "Audiovisual", desktop: 90 },
  { month: "Photography", desktop: 73 },
  { month: "Illustration", desktop: 90 },
  { month: "Social Media", desktop: 90 },
]

const chartConfig = {
  desktop: {
    label: "Expertise",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Component() {
  return (        <section className="py-16 md:py-16">
    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 sm:gap-0">
            <div className="relative space-y-4 md:pt-12 sm:pt-0">
                <Card>
                    <CardHeader>
                        <CardTitle>Areas of expertise</CardTitle>
                        <CardDescription>I have some years of experience working on several areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            layout="vertical"
                            margin={{
                            left: 30,
                            }}
                        >
                            <XAxis type="number" dataKey="desktop" hide />
                            <YAxis
                            dataKey="month"
                            type="category"
                            tickLine={false}
                            tickMargin={6}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 12)}
                            />
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
                        </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="relative space-y-4 md:pt-12 sm:pt-0">
                <Card>
                    <CardHeader>
                        <CardTitle>Bar Chart - Horizontal</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            layout="vertical"
                            margin={{
                            left: -20,
                            }}
                        >
                            <XAxis type="number" dataKey="desktop" hide />
                            <YAxis
                            dataKey="month"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={5} />
                        </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                        Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                        Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </div>
</section>
 
  )
}

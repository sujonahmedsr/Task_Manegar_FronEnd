"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Calculation from "@/utils/Calculation"


export function Chart() {
  const {totalTask, completeTask, inCompleteTask} = Calculation()
  const chartData = [{completeTask: completeTask,  InProgress: inCompleteTask}]

const chartConfig = {
  completeTask: {
    label: "completeTask",
    color: "hsl(var(--chart-1))",
  },
  InProgress: {
    label: "InProgress",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

  return (
    <Card className="flex flex-col h-72 overflow-hidden">
      <CardHeader className="items-center">
        <CardTitle>Comleted vs Pending Tasks
        </CardTitle>
        <CardDescription>Task completion status.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalTask}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Task
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="completeTask"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-completeTask)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="InProgress"
              fill="var(--color-InProgress)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}

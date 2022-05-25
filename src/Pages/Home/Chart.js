import React from "react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const Chart = () => {
  const data = [
    {
      Name: "TOLSEN Pliers",
      A: 55000,
      B: 30000,
    },
    {
      Name: "TOLSEN HAMMER",
      A: 65000,
      B: 36000,
    },
    {
      Name: "TOLSEN Phillips Screwdriver",
      A: 135000,
      B: 120000,
    },
    {
      Name: "TOLSEN 100w Glue Gun",
      A: 75595,
      B: 64560,
    },
    {
      Name: "Professional Electric Drill",
      A: 60690,
      B: 45800,
    },
    {
      Name: "Wrench Cr-V",
      A: 86450,
      B: 74860,
    },
  ];
  return (
    <div className="flex !justify-center sm:overflow-hidden">
      <RadarChart outerRadius={90} width={1100} height={350} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="Name" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="2021 total sells (piece)"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="2022 total sells (piece)"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </div>
  );
};

export default Chart;

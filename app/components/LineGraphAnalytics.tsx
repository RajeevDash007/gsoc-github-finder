"use client";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineGraphAnalytics = ({
  organizationData,
}: {
  organizationData: any[];
}) => {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  const getAllTechnologies = () => {
    const technologyCount: { [key: string]: number } = {};

    organizationData.forEach((data) => {
      data.data.organizations.forEach((org: any) => {
        org.technologies.forEach((tech: string) => {
          technologyCount[tech] = (technologyCount[tech] || 0) + 1;
        });
      });
    });

    return Object.entries(technologyCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, showAllTechnologies ? 50 : 10)
      .map(([tech]) => tech);
  };
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
    }
  }, []);
  
  const defaultTechnology = getAllTechnologies()[0] || null;
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    defaultTechnology
  );

  const handleShowMoreClick = () => {
    setShowAllTechnologies(true);
  };

  const handleShowLessClick = () => {
    setShowAllTechnologies(false);
  };

  const handleTechnologyChange = (tech: string) => {
    setSelectedTechnology(tech);
  };

  const getTechnologyDataForYear = (year: string, technology: string) => {
    const organizations =
      organizationData.find((data) => data.year === year)?.data.organizations ||
      [];
    return organizations.reduce((count: number, org: any) => {
      if (org.technologies.includes(technology)) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const years = [
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];
  const data = years.map((year) => {
    const entry: { year: string; [key: string]: any } = { year };

    if (selectedTechnology) {
      const count = getTechnologyDataForYear(year, selectedTechnology);
      entry[selectedTechnology] = count;
    }

    return entry;
  });
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 lg:mt-20 mb-20">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="text-blue-600 dark:text-blue-500">Top 50</span>{" "}
        Technologies Trend
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-10 justify-center mb-4 gap-2 w-11/12">
        {getAllTechnologies().map((tech) => (
          <button
            key={tech}
            onClick={() => handleTechnologyChange(tech)}
            className={`py-2 px-4 rounded-md transition-colors duration-300 ${
              selectedTechnology === tech
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>
      {!showAllTechnologies ? (
        <div className="flex justify-center">
          <button
            onClick={handleShowMoreClick}
            className="bg-blue-400 mb-4 text-gray-700 py-1 px-2 rounded-md hover:bg-blue-300"
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={handleShowLessClick}
            className="bg-blue-400 mb-4 text-gray-700 py-1 px-2 rounded-md hover:bg-blue-300"
          >
            Show Less
          </button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          backgroundColor: "#131517",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 12px rgba(255, 252, 252, 0.867)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <LineChart
            width={
              window.innerWidth < 768
                ? window.innerWidth - 80
                : window.innerWidth < 1024
                ? window.innerWidth - 100
                : 800
            }
            height={400}
            data={data}
            margin={{ top: 20, right: 50, left: 5, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eef1f4"
            />
            <XAxis dataKey="year" tick={{ fill: "#9CA3AF",color: "white" }} />
            <YAxis tick={{ fill: "#9CA3AF" }} />
            <Tooltip
              cursor={{ stroke: "red", strokeWidth: 2 }}
              contentStyle={{ backgroundColor: "#1f2937", color: "#F3F4F6" }}
            />
            <Legend
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ color: "#F3F4F6", fontSize: "14px" }}
            />
            {selectedTechnology && (
              <Line
                type="monotone"
                dataKey={selectedTechnology}
                stroke={getRandomColor()}
                strokeWidth={2}
                dot={{ stroke: "#F3F4F6", strokeWidth: 5, fill: "#1f2937" }}
              />
            )}
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default LineGraphAnalytics;

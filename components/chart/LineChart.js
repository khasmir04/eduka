import { Line } from "react-chartjs-2";
import React from "react";

const LineChart = () => {
  return (
    <Line
      data={{
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Months",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            backgroundColor: "rgba(142, 234, 255, 0.2)",
            pointBackgroundColor: "#8EEAFF",
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      }}
      width={50}
      height={50}
      options={{
        position: "bottom",
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtzero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default LineChart;

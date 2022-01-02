import React from "react";
import { useParams, Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GoalContext, IGoalContext } from "../../../context";
import Progressbar from "../Progress_bar/Progress_bar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart: React.FC = (): JSX.Element => {
  const { goals, setGoals } = React.useContext<IGoalContext>(GoalContext);
  const params = useParams();

  return (
    <>
      {goals.length > 0 ? (
        goals.map(
          (goal) =>
            JSON.stringify(goal.id) === params.id && (
              <div
                key={goal.id}
                style={{
                  width: "90vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1>{goal.nameOfGoal}</h1>
                <Progressbar
                  bgcolor="#f0f"
                  height={20}
                  progress={JSON.stringify(goal.percentage)}
                />
                <Line
                  datasetIdKey="id"
                  data={{
                    labels: goal.dates,
                    datasets: [
                      {
                        //@ts-ignore
                        id: 1,
                        label: goal.nameOfGoal,
                        data: goal.percentages,
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        borderColor: "#3a3a3a",
                        borderWidth: 4,
                        pointBorderWidth: 9,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        labels: {
                          font: {
                            size: 24,
                            weight: "bold",
                          },
                        },
                      },
                    },
                    layout: {
                      padding: 20,
                    },
                    scales: {
                      y: {
                        ticks: {
                          color: "#00f",
                          font: {
                            size: 24,
                          },
                        },
                      },
                      x: {
                        ticks: {
                          color: "#0f0",
                          font: {
                            size: 24,
                          },
                        },
                      },
                    },
                  }}
                />
              </div>
            )
        )
      ) : (
        <>
          <h1>No goals found</h1>
          <Link to="/">Home</Link>
        </>
      )}
    </>
  );
};

export default Chart;

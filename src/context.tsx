import React from "react";

export interface IGoal {
  id: number;
  nameOfGoal: string;
  dateOfGoal: Date;
  detailsOfGoal: string;
  percentage: number;
  percentages: number[];
  dates: string[];
}

export interface IGoalContext {
  goals: IGoal[];
  setGoals: React.Dispatch<React.SetStateAction<IGoal[]>>;
}
export const GoalContext = React.createContext<any | IGoalContext>(null);

const GoalContextProvider: React.FC = ({ children }): JSX.Element => {
  const [goals, setGoals] = React.useState<IGoal[]>([]);
  return (
    <GoalContext.Provider value={{ goals: goals, setGoals: setGoals }}>
      {children}
    </GoalContext.Provider>
  );
};

export default GoalContextProvider;

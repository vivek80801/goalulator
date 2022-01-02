import React from "react";
import { GoalContext, IGoalContext } from "../../../context";
import home from "./home.module.scss";

const Home: React.FC = (): JSX.Element => {
  const [nameOfGoal, setNameOfGoal] = React.useState("");
  const [dateOfGoal, setDateOfGoal] = React.useState(new Date());
  const [detailsOfGoal, setDetailsOfGoal] = React.useState("");
  const { goals, setGoals } = React.useContext<IGoalContext>(GoalContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGoals([
            ...goals,
            {
              id: goals.length > 0 ? goals[goals.length - 1].id + 1 : 1,
              nameOfGoal: nameOfGoal,
              dateOfGoal: dateOfGoal,
              detailsOfGoal: detailsOfGoal,
              percentage: 0,
              percentages: [0],
              dates: [new Date().toISOString().substring(0, 10)],
            },
          ]);
          setNameOfGoal("");
          setDateOfGoal(new Date());
          setDetailsOfGoal("");
        }}
        className={home.desktop}
      >
        <h1>goalulator</h1>
        <input
          type="text"
          placeholder={"enter name of goal"}
          onChange={(e) => setNameOfGoal(e.target.value)}
          value={nameOfGoal}
          required
        />
        <input
          type="date"
          placeholder={"when you are planing to achive this goal"}
          onChange={(e) => setDateOfGoal(new Date(e.target.value))}
          value={dateOfGoal.toISOString().substring(0, 10)}
          required
        />
        <textarea
          cols={30}
          rows={10}
          placeholder={"enter description of goal"}
          onChange={(e) => setDetailsOfGoal(e.target.value)}
          value={detailsOfGoal}
        ></textarea>
        <button type={"submit"}>save</button>
      </form>
    </>
  );
};

export default Home;

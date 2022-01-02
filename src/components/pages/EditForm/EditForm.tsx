import React from "react";
import { GoalContext, IGoalContext, IGoal } from "../../../context";

interface IProps extends IGoal {
  showEdit: boolean;
  setShowEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditForm: React.FC<IProps> = ({
  id,
  nameOfGoal,
  dateOfGoal,
  detailsOfGoal,
  percentage,
  percentages,
  showEdit,
  setShowEdit,
  dates,
}): JSX.Element => {
  const [editNameOfGoal, setEditNameOfGoal] = React.useState(nameOfGoal);
  const [editDateOfGoal, setEditDateOfGoal] = React.useState(dateOfGoal);
  const [editDetailsOfGoal, setEditDetailsOfGoal] = React.useState(
    detailsOfGoal
  );
  const [editPercentOfGoal, setEditPercentOfGoal] = React.useState(percentage);
  const { goals, setGoals } = React.useContext<IGoalContext>(GoalContext);
  return (
    <>
      {showEdit && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowEdit(false);
            setGoals([
              ...goals.map((goal) =>
                id === goal.id
                  ? {
                      id: id,
                      nameOfGoal: editNameOfGoal,
                      dateOfGoal: editDateOfGoal,
                      detailsOfGoal: editDetailsOfGoal,
                      percentage: editPercentOfGoal,
                      percentages: [...percentages, editPercentOfGoal],
                      dates: [
                        ...dates,
                        new Date().toISOString().substring(0, 10),
                      ],
                    }
                  : {
                      id: goal.id,
                      nameOfGoal: goal.nameOfGoal,
                      dateOfGoal: goal.dateOfGoal,
                      detailsOfGoal: goal.detailsOfGoal,
                      percentage: goal.percentage,
                      percentages: [...goal.percentages],
                      dates: [...goal.dates],
                    }
              ),
            ]);
          }}
        >
          <input
            type="text"
            placeholder={"enter name of goal"}
            onChange={(e) => setEditNameOfGoal(e.target.value)}
            defaultValue={editNameOfGoal}
            required
          />
          <input
            type="date"
            placeholder={"when you are planing to achive this goal"}
            onChange={(e) => setEditDateOfGoal(new Date(e.target.value))}
            defaultValue={editDateOfGoal.toISOString().substring(0, 10)}
            required
          />
          <textarea
            cols={30}
            rows={10}
            placeholder={"enter description of goal"}
            onChange={(e) => setEditDetailsOfGoal(e.target.value)}
            defaultValue={editDetailsOfGoal}
          ></textarea>
          <input
            type="number"
            placeholder={"enter percent of progress of goal"}
            onChange={(e) => setEditPercentOfGoal(parseInt(e.target.value))}
            defaultValue={JSON.stringify(editPercentOfGoal)}
            min={0}
            max={100}
          />
          <button type={"submit"}>save</button>
        </form>
      )}
    </>
  );
};

export default EditForm;

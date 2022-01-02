import React from "react";
import { Link } from "react-router-dom";
import editGoals from "./editGoals.module.scss";
import { GoalContext, IGoalContext } from "../../../context";
import EditForm from "../EditForm/EditForm";
import Progressbar from "../Progress_bar/Progress_bar";

const EditGoals: React.FC = (): JSX.Element => {
  const [showEdit, setShowEdit] = React.useState(false);
  const [editId, setEditId] = React.useState(1);
  const [editNameOfGoal, setEditNameOfGoal] = React.useState("ramu");
  const [editDateOfGoal, setEditDateOfGoal] = React.useState(new Date());
  const [editDetailsOfGoal, setEditDetailsOfGoal] = React.useState("");
  const [editPercentOfGoal, setEditPercentOfGoal] = React.useState(0);
  const [editPercentages, setEditPercentages] = React.useState<number[]>([0]);
  const [editDates, setEditDates] = React.useState([
    new Date().toISOString().substring(0, 10),
  ]);
  const { goals, setGoals } = React.useContext<IGoalContext>(GoalContext);

  React.useEffect(() => {
    if (showEdit) {
      document.body.style.backgroundColor = "#3a3a3a";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
  }, [showEdit]);

  return (
    <>
      <div className={editGoals.desktop}>
        {goals.length > 0 ? (
          goals.map(
            ({
              id,
              nameOfGoal,
              detailsOfGoal,
              dateOfGoal,
              percentage,
              percentages,
              dates,
            }) => (
              <div
                key={id}
                style={showEdit ? { display: "none" } : { display: "flex" }}
              >
                <h1>{nameOfGoal}</h1>
                <h2>{dateOfGoal.toDateString()}</h2>
                <Progressbar
                  bgcolor="#39e165"
                  progress={JSON.stringify(percentage)}
                  height={30}
                />
                <p>{detailsOfGoal}</p>
                <button
                  onClick={() => {
                    setEditId(id);
                    setEditNameOfGoal(nameOfGoal);
                    setEditDateOfGoal(dateOfGoal);
                    setEditPercentOfGoal(percentage);
                    setEditDetailsOfGoal(detailsOfGoal);
                    setEditPercentages([...percentages]);
                    setEditDates([...dates]);
                    setShowEdit(true);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() =>
                    setGoals([...goals.filter((go) => id !== go.id)])
                  }
                >
                  delete
                </button>
                <Link to={`/chart/${id}`}>
                  <button>view chart</button>
                </Link>
              </div>
            )
          )
        ) : (
          <>
            <h1 style={{ width: "100vw", textAlign: "center" }}>
              you have not set any goals yet.
            </h1>
          </>
        )}
        {showEdit && (
          <EditForm
            id={editId}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
            nameOfGoal={editNameOfGoal}
            dateOfGoal={editDateOfGoal}
            percentage={editPercentOfGoal}
            percentages={editPercentages}
            detailsOfGoal={editDetailsOfGoal}
            dates={editDates}
          />
        )}
      </div>
    </>
  );
};

export default EditGoals;

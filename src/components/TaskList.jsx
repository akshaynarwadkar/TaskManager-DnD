import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItem from "./Task/TaskItem";
import styled from "styled-components";

const TaskList = ({ tasks, setTasks }) => {
  const [added, setAdded] = useState([]);
  const [started, setStarted] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const fAdded = tasks.filter((task) => task.status === "added");
    const fStarted = tasks.filter((task) => task.status === "started");
    const fComplete = tasks.filter((task) => task.status === "completed");

    setAdded(fAdded);
    setStarted(fStarted);
    setCompleted(fComplete);
  }, [tasks]);

  const statuses = ["added", "started", "completed"];

  return (
    <FlexContainer>
      {statuses.map((status) => {
        const newId = uuidv4();
        return (
          <TaskItem
            status={status}
            key={newId}
            tasks={tasks}
            setTasks={setTasks}
            added={added}
            started={started}
            completed={completed}
          />
        );
      })}
    </FlexContainer>
  );
};
export default TaskList;

const FlexContainer = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    /* Styles for smaller screens (phones) */
    flex-direction: column; /* Stack columns vertically */
  }

  @media (min-width: 768px) and (max-width: 992px) {
    /* Styles for tablets */
    flex-direction: row; /*  Change back to row for tablets */
    justify-content: space-between; /* Distribute columns evenly */
  }
`;

import { useDrop } from "react-dnd";
import TaskHeader from "./TaskHeader";
import TaskDetails from "./TaskDetails";
import toast from "react-hot-toast";
import styled from "styled-components";

const TaskItem = ({ status, tasks, setTasks, added, started, completed }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let bg = "#718096";
  let tasksToMap = added;
  let text = "added";

  if (status === "started") {
    bg = "#9F7AEA";
    text = "Started";
    tasksToMap = started;
  }
  if (status === "completed") {
    bg = "#48BB78";
    text = "completed";
    tasksToMap = completed;
  }

  function addItemToSection(id) {
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          if (t.status === status) {
            toast("Ahh , It is in the same status❗");
          } else {
            toast.success("Task Status changed ");
          }
          return { ...t, status: status };
        }

        return t;
      });

      localStorage.setItem("tasks", JSON.stringify(mTasks));

      // toast("Task Status changed 😮");

      return mTasks;
    });
  }

  return (
    <DropContainer ref={drop} isOver={isOver}>
      <TaskHeader text={text} bg={bg} count={tasksToMap.length} />
      {tasksToMap.length > 0 &&
        tasksToMap.map((task) => {
          return (
            <div style={{ margin: "1px" }}>
              <TaskDetails
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            </div>
          );
        })}
    </DropContainer>
  );
};

export default TaskItem;

const DropContainer = styled.div`
  width: 16rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  background-color: ${(props) => (props.isOver ? "#a6c4e4" : "transparent")};
`;

import { useDrag } from "react-dnd";
import styled from "styled-components";

import toast, { Toaster } from "react-hot-toast";
const TaskDetails = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(isDragging);

  const handleDelete = (id) => {
    const fTasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(fTasks));
    setTasks(fTasks);
    toast.success("Task removed ", { position: "top-right" });
  };
  return (
    <>
      <DragContainer ref={drag} isDragging={isDragging}>
        <p> {task.name}</p>
        <DeleteButton onClick={() => handleDelete(task.id)}>
          <StyledDeleteIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </StyledDeleteIcon>
        </DeleteButton>
      </DragContainer>
    </>
  );
};

export default TaskDetails;

const DragContainer = styled.div`
  opacity: ${(props) => (props.isDragging ? 0.25 : 1)};
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 1rem;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  cursor: grab;
  background-color: #f3f4f6;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledDeleteIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  stroke-width: 1.5;
  fill: none;
  /* stroke: ${(props) => props.theme.textColor}; */
  stroke: #000;
`;

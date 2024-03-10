import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

const TaskForm = ({ tasks, setTasks }) => {
  const newId = uuidv4();

  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "added",
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (task.name.length < 3) {
      toast.error("Min. three characters required ", {
        position: "top-right",
      });
    } else {
      setTasks((prev) => {
        const list = [...prev, task];
        localStorage.setItem("tasks", JSON.stringify(list));
        return list;
      });
      setTask({
        id: "",
        name: "",
        status: "added",
      });
      toast.success("Task added successfully 😎 ", { position: "top-right" });
    }
  };

  return (
    <div>
      <Toaster />
      <Form onSubmit={handleClick}>
        <Input
          type="text"
          value={task.name}
          onChange={(e) =>
            setTask({ id: newId, name: e.target.value, status: "added" })
          }
        />
        <Button>Add Task </Button>
      </Form>
    </div>
  );
};
export default TaskForm;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 2px solid #cbd5e0;
  background-color: #edf2f7;
  border-radius: 0.375rem;
  margin-right: 1rem;
  height: 3rem;
  width: 16rem;
  padding: 0.25rem;
`;

const Button = styled.button`
  background-color: #2b6cb0;
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  height: 3rem;
  color: #fff;
  border: none;
`;

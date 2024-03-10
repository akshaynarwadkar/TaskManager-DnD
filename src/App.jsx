import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { v4 as uuidv4 } from "uuid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styled from "styled-components";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const newId = uuidv4();
  useEffect(() => {
    const tasksFromStorage = localStorage.getItem("tasks");
    if (tasksFromStorage) setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <div>
      <StyledHeading>Task Management Portal</StyledHeading>
      <DndProvider backend={HTML5Backend}>
        <Container>
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} setTasks={setTasks} />;
        </Container>
        //{" "}
      </DndProvider>
    </div>
  );
};
export default App;

const StyledHeading = styled.h1`
  height: 5rem; 
  font-size: 2rem; 
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 1280px) {
    font-size: 3rem; 
  }
  text-align: center;
  background-image: linear-gradient(
    to right,
    #8b5cf6,
    #3490dc
  ); 
  -webkit-background-clip: text; 
  color: transparent; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #cbd5e0; 
  width: 100vw; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem; 
  gap: 4rem; 
  padding-top: 4rem; 
`;

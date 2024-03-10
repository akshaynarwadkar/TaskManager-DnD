import styled from "styled-components";
const TaskHeader = ({ text, bg, count }) => {
  return (
    <Container bg={bg}>
      {text}
      <CountContainer>{count}</CountContainer>
    </Container>
  );
};

export default TaskHeader;

const Container = styled.div`
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  padding-left: 1rem;
  border-radius: 0.375rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  color: #fff;
`;
const CountContainer = styled.div`
  background-color: #fff;
  margin-left: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
`;

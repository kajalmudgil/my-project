
import { useState } from "react";
import styled from "styled-components";

const ToDo =() =>{
const [todos, setTodos] = useState([]);
const [task, setTask] = useState('');
};

const addTodo = () => {
  if (task.trim() === '') return;
  setTodos([...todos, task]);
  setTask('');
}

const deleteTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
}

return (
  <Container>
    <h1>To-Do List</h1>
    <InputContainer>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={addTodo}>Add</button>
    </InputContainer>
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </ListItem>
      ))}
    </List>
  </Container>
);

export default ToDo;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
`;
const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 10px 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;

  button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #c82333;
    }
  }
`;
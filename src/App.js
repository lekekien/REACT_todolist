import './App.css';
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button';
import Todolist from './components/Todolist';
import { useState } from 'react';
import {v4} from 'uuid';
function App() {
  const [todoList,setTodoList] = useState([]);
  const [textInput,setTextInput] = useState("");

  const onTextInputChange = (e) =>{
    setTextInput(e.target.value);
  }

  const onclickButtonAdd = (e) => {
    setTodoList([...todoList,{id:v4(),name:textInput, isCompleted : false}]);
  }
  return (
    <>
      <h3>Danh sách cần làm</h3>
      <Textfield name='add-todo' placeholder='Thêm việc cần làm ...' elemAfterInput={
        <Button isDisabled={!textInput} appearance='primary' onClick={onclickButtonAdd}>Thêm</Button>
      }
      css = {{padding:"2px 4px 2px"}}
      onChange={onTextInputChange}
      ></Textfield>
      <Todolist todoList={todoList}></Todolist>
    </>
  );
}

export default App;

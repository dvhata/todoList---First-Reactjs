import "./App.css";
import TodoList from "/components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { v4 } from "uuid"; //unique uuid
import React, {useCallback, useState} from "react"; // first, we've imported useEffect from react

function App() {
  // Lưu các item 1 dưới dạng mảng
  const [todoList, setTodoList] = useState([]); // return array[luu tru state,method cap nhat]
  // Text input trong text field
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    // e.target.value : noi dung nguoi dung nhap trong the input
    setTextInput(e.target.value)
  },[]);

  
  const onAddTextButtonClick = (e) => {
    // them text input vao danh sach todoList (ben tren)
    setTodoList([...todoList,{id:v4,name: textInput, isCompleted: false}]);
  };

  return (
    <>
      <h3> Danh sách cần làm </h3>
      <Textfield
        name="add-todo"
        placeholder="Thêm việc cần làm ..."
        elemAfterInput={
          <Button isDisabled={!textInput} appearance="primary" onClick={onAddTextButtonClick} >
            Thêm
          </Button>
        }
        css={{padding: '2px 4px 2px'}}
         // tren phai duoi
        value = {textInput}
        onChange = {onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} /> {/* todoList la props */}
    </>
  );
}

export default App;

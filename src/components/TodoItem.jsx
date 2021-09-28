import { useRef } from 'react';
import { IconContext } from "react-icons";
import {
  AiFillLike,
  AiFillCheckCircle,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";


export default function TodoItem(props) {
    const { item, updateTodoItem, removeTodoItem, completeTodoItem } = props;
    const inputRef = useRef(true)
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    const update = (e, id, value) => {
        if(e.which === 13){
            updateTodoItem({ id, todoContent: value });
            inputRef.current.disabled = true
        }
    }
    return (
      <li
        key={item.id}
        className={item.emergency ? "todo_item emergent" : "todo_item normal"}
      >
        <textarea
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.todoContent}
          onKeyPress={(e) => update(e, item.id, inputRef.current.value)}
        />
        <div className="ctrl_btns">
          <IconContext.Provider value={{ color: "#eff1ed" }}>
            <button onClick={() => changeFocus()}>
              <AiFillEdit />
            </button>
            <button onClick={() => completeTodoItem(item.id)}>
              {item.completed ? <AiFillLike /> : <AiFillCheckCircle />}
            </button>
            <button onClick={() => removeTodoItem(item.id)}>
              <AiFillDelete />
            </button>
          </IconContext.Provider>
        </div>
      </li>
    );
}

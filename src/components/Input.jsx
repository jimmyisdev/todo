import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from '../redux/todoReducer'
import { v4 as uuidv4 } from "uuid";
import { ImPlus } from "react-icons/im";
import { FcHighPriority } from "react-icons/fc";



const mapStateToProps = (state) => {
    return {
      todos: state.todo,
      global: state.global,

    };
  };
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
  };
};

function Input(props) {
  const [todoContent, setTodoContent] = useState("")
  const [emergent, setEmergent] = useState(false)
  let userName = props.global.user.toUpperCase();

  const add = () => {
    if (!todoContent) {
      alert("input value");
      setEmergent(false);
    } else {
      props.addTodo({
        id: uuidv4(),
        todoContent: todoContent,
        emergency: emergent,
        completed: false,
      });
      setTodoContent("");
      setEmergent(false);
    }
  }



    return (
      <section className="inputSec">
        <div className="inputSec_content">
          <input
            type="text"
            placeholder={`${userName && userName} add some tasks!`}
            onChange={(e) => setTodoContent(e.target.value)}
            value={todoContent}
          />
          <label>
            <FcHighPriority />
            <input
              className="emerg"
              type="radio"
              checked={emergent}
              onChange={() => setEmergent(!emergent)}
            />
          </label>
          <button className="input_add" onClick={() => add()}>
            <ImPlus />
          </button>
        </div>
      </section>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);

import { useState } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { addTodo, removeTodo, updateTodo, completeTodo } from "./../redux/todoReducer"



const mapStateToProps = (state) => {
    return {
      todos: state,
      global: state.global,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
      addTodoItem: (obj) => dispatch(addTodo(obj)),
      removeTodoItem: (id) => dispatch(removeTodo(id)),
      updateTodoItem: (obj) => dispatch(updateTodo(obj)),
      completeTodoItem: (id) => dispatch(completeTodo(id)),
    };
}
function TodoContainer(props) {
    const [ condition, setCondition ] = useState("all");
    let totalTasks = props.todos.todo.length;
    let userName = props.global.user.toUpperCase();
    return (
      <section className="display">
        {/*--------------- control todos condition--------------- */}
        <div className="ctrl_btns">
          <button className="cond" onClick={() => setCondition("all")}>
            <h2>ALL</h2>
          </button>
          <button className="cond" onClick={() => setCondition("completed")}>
            <h2>COMPLETED</h2>
          </button>
          <button className="cond" onClick={() => setCondition("uncompleted")}>
            <h2>UNCOMPLETED</h2>
          </button>
        </div>

        <ul className="todo_container">
          {/*--------------- show all todos --------------- */}
          {totalTasks > 0 && condition === "all"
            ? props.todos.todo.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodoItem={props.removeTodoItem}
                    updateTodoItem={props.updateTodoItem}
                    completeTodoItem={props.completeTodoItem}
                  />
                );
              })
            : null}
          {/*--------------- show completed todos --------------- */}
          {totalTasks > 0 && condition === "completed"
            ? props.todos.todo.map((item) => {
                return (
                  item.completed && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodoItem={props.removeTodoItem}
                      updateTodoItem={props.updateTodoItem}
                      completeTodoItem={props.completeTodoItem}
                    />
                  )
                );
              })
            : null}

          {/*--------------- show completed todos --------------- */}
          {totalTasks > 0 && condition === "uncompleted"
            ? props.todos.todo.map((item) => {
                return (
                  item.completed || (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodoItem={props.removeTodoItem}
                      updateTodoItem={props.updateTodoItem}
                      completeTodoItem={props.completeTodoItem}
                    />
                  )
                );
              })
            : null}
        </ul>

        <div className="todo_count">
          <h2>
            {userName && `${userName}!!`} You have {totalTasks}{" "}
            {totalTasks > 1 ? "tasks" : "task"} in total
          </h2>
        </div>
      </section>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
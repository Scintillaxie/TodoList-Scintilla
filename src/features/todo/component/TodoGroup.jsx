import { useSelector } from "react-redux";
import TodoItem from "./TodoItem/TodoItem";

function TodoGroup(){
  const todos = useSelector(state => state.todo.todos);
  const todoList = todos.map((todo,index)=> <TodoItem key={todo.id} context={todo.context} index={index} done={todo.done}/>)

  return(
    <div>
      {todoList}
    </div>
  )
}

export default TodoGroup;
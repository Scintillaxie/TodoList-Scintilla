// import React from "react";
// import TodoItem from "./TodoItem/TodoItem";

// export default function TodoGroup(props) {
//   const itemList = props.inputArray;
//   console.log(itemList);
//   return (
//     <div>
//       {itemList.map((itemValue, index) => {
//         return <TodoItem key={index} itemValue={itemValue} />;
//       })}
//     </div>
//   );
// }

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem/TodoItem";

function TodoGroup(){
  const todos = useSelector(state => state.todo.todos);
  const todoList = todos.map((todo)=> <TodoItem key={todo.id} context={todo.context} />)

  return(
    <div>
      {todoList}
    </div>
  )
}

export default TodoGroup;
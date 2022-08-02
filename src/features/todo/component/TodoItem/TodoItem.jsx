import { useDispatch } from "react-redux/es/exports";
import {toggle,deleteItem} from "../../todoSlice";
import "./index.css";

function TodoItem(props) {
    const { index,context,done } = props;
  

    const dispatch = useDispatch();

    const onToggle = function(event){
      dispatch(toggle(index));
      event.target.style.textDecoration=done?"none":"line-through";
    }

    const onDelete = function(){
      dispatch(deleteItem(index));
    }

    
    return(
      <div onClick={onToggle} >
        <span className='container'>{context}</span>

        <button type="button" onClick={onDelete} className="textButton">
        ×
        </button>

      </div>
      
      
    ) 
}
export default TodoItem;
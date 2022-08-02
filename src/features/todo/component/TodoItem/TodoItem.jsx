// import './index.css'


// export default function TodoItem(props) {
//     const { itemValue } = props;
//   return <div className='container'>{itemValue}</div>;
//   }


function TodoItem(props) {
    const { context } = props;
    return <div className='container'>{context}</div>;
}
export default TodoItem;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todos, handleDelete, handleEdit}) => {

    return ( 
        <div>
        {todos.map((todo)=>{
            return(
            <div className="border-solid border border-black rounded-md p-4 my-2" key={todo.id}>
                <div className="flex flex-row">
                <p className='flex grow'>{todo.task}</p>
                <button 
                    className="ms-2 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
                    onClick={()=>handleEdit(todo.id)}
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button 
                    className="ms-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                    onClick={()=> handleDelete(todo.id)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            </div>
            );
        })}
        </div>
     );
}
 
export default TodoList;
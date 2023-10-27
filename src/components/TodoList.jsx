import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from "react-redux";
import { setTodoStatus } from "../redux/todoSlice";

const TodoList = ({handleDelete, handleEdit}) => {

    const tasks = useSelector((state)=>{
		return state.todos;
	});

    const dispatch = useDispatch();

    return ( 
        <div className=''>
        {tasks.map((itm)=>{
            return(
            <div className="p-2 my-2 bg-white" key={itm.id}>
                <div className="flex flex-row items-center">
                    <input 
                        type="checkbox"
                        className="w-4 h-4" 
                        value={itm.completed}  
                        onChange={() => {
                            dispatch(
                                setTodoStatus({ 
                                    completed: !itm.completed,
                                    id: itm.id })
                            );
                        }}
                    />
                    <p className={`ms-4 grow ${itm.completed ? "line-through" : "decoration-none"}`}>{itm.name}</p>
                    <button 
                        className="px-2 py-1 text-sky-500 ms-2"
                        onClick={()=>handleEdit(itm.id)}
                    >
                        <FontAwesomeIcon icon={faPenToSquare} style={{height: 20}}/>
                    </button>
                    <button 
                        className="px-2 py-1 text-red-500"
                        onClick={()=> handleDelete(itm.id)}
                    >
                        <FontAwesomeIcon icon={faTrash} style={{height: 20}}/>
                    </button>
                </div>
            </div>
            );
        })}
        </div>
     );
}
 
export default TodoList;
import { useState } from "react";
import TodoList from "./TodoList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo, setTodoStatus } from "../redux/todoSlice";
import EditTodo from "./EditTodo";
import { useRef } from "react";

const TodoForm = () => {
    const[todo, setTodo] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [todoId, setTodoId] = useState();
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();
    const ref = useRef();

    function handlesubmit(e){
        e.preventDefault()

        if(todo.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}
          dispatch(
			addTodo({
                task: todo,
                completed: isChecked
			})
		);
        ref.current.reset();
          
    }

    function handleDelete(id){
        dispatch(
			deleteTodo({
				id: id
			})
		)
    }

    function handleEdit(id){
         setTodoId(id);
         setIsOpen(true);
     }

     function handleChange(e){
        setTodo({...todo, [e.target.name]: e.target.value})
        //console.log(todo)
     }
     
     function handleUpdate(id){
        //console.log(todo.task)
        dispatch(
            updateTodo({
                id: id,
                task: todo.task,
            })
        )
    }
 
    return ( 
        <div className="max-w-xl mx-auto rounded">
            <div className="mb-4 text-3xl font-semibold text-white">Task</div>
            <div className="mb-4">
                <form onSubmit={handlesubmit} ref={ref}>
                    <div className="flex flex-row gap-1">
                        <input 
                            className="px-3 py-2 placeholder-gray-500 shadow grow focus:outline-none focus:border-black focus:ring-1 focus:ring-black" 
                            placeholder="Enter a task"
                            onChange={(e)=> setTodo(e.target.value)}
                            required
                        />
                        <button 
                            className="w-24 text-white bg-[#343434]"
                        >   
                            <FontAwesomeIcon icon={faAdd} className="me-3"/>
                            Add
                        </button>
                    </div>
                </form>
            </div>
            <TodoList 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            <EditTodo
                isOpen={isOpen}
                setIsOpen={setIsOpen} 
                todoId={todoId}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
            />
        </div>
     );
}
 
export default TodoForm;
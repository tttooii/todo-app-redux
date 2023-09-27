import { useState } from "react";
import TodoList from "./TodoList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";

const TodoForm = () => {
    const [todos, setTodos] = useState([]);
    const[todo, setTodo] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [todoId, setTodoId] = useState();
    const [currTodo, setCurrTodo] = useState();

    function handlesubmit(e){
        e.preventDefault()
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo },
          ]);
    }

    function handleDelete(id){
        const newTodos = todos.filter((item) => {
            return item.id !== id
        })
        setTodos(newTodos);   
    }

    function handleEdit(id){
        setIsOpen(true);
        setTodoId(id);
    }

    function handleTodoChange(e){
        setCurrTodo({ ...currTodo, task:e.target.value });

    }

    function handleUpdate(id){
        const newTodo = todos.map(itm => {
            if(itm.id === id){
                return {...itm, task: currTodo.task};
            }
            return itm;
        });
        setTodos(newTodo);

    }
    return ( 
        <div className="mx-auto max-w-md py-8">
            <div className="shadow-md rounded-md bg-slate-50">
                <div className="p-4">
                    <h2 className="text-3xl mb-4 text-center">Todo</h2>
                    <form className="mb-8" onSubmit={handlesubmit}>
                        <div className="flex flex-row space-x-2">
                            <input 
                                className="shadow rounded-md bg-gray-200 px-2 py-1 grow" 
                                placeholder="Enter a task"
                                onChange={(e)=> setTodo(e.target.value)}
                                required
                            />
                            <button 
                                className="rounded-md bg-green-500 px-2 py-1 text-white hover:bg-green-600"
                            >   
                                <FontAwesomeIcon icon={faAdd} className="me-2"/>
                                Add
                            </button>
                        </div>
                    </form>
                    <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit}
                    /> 
                    <EditTodo 
                        isOpen={isOpen} 
                        setIsOpen={setIsOpen} 
                        todos={todos}
                        todoId={todoId}
                        handleTodoChange={handleTodoChange}
                        handleUpdate={handleUpdate}
                    />      
                </div>
            </div>
        </div>
     );
}
 
export default TodoForm;
import { useSelector } from "react-redux";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react'

const EditTodo = ({isOpen, setIsOpen, todoId, handleChange, handleUpdate}) => {
    
    const tasks = useSelector((state)=>{
		return state.todos;
	});

    return ( 
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white rounded shadow-xl">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Edit task
                  </Dialog.Title>
                  <div className="mt-2">
                    {tasks.filter(todo => todo.id === todoId).map((item)=> {
                        return(
                            <div key={item.id}>
                                <input
                                    defaultValue={item.name}
                                    className="w-full px-2 py-1 bg-gray-200 rounded focus:outline-none"
                                    name="task"
                                    onChange={handleChange}
                                />
                            </div>
                        )
                    })}
                  </div>
                  <div className="mt-4">
                    <button
                        className="inline-flex justify-center px-3 py-1 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md me-2 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={()=> handleUpdate(todoId)}
                    >
                        Save
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-3 py-1 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Exit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition> 
     );
}
 
export default EditTodo;
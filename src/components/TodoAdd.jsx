import { useState, useContext } from "react";
import { TodoContext } from "../redux/TodoContext";

export const TodoAdd = () => {
    const [todoText, setTodoText] = useState("");
    const [buttonStatus, setButtonStatus] = useState(false);
    const { dispatch } = useContext(TodoContext);

    const handleInputChange = (event) => {
        setTodoText(event.target.value);
        if (event.target.value.length > 3) {
            setButtonStatus(true);
        } else {
            setButtonStatus(false);
        }
    };

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false,
        };

        dispatch({ type: "ADD_TODO", payload: newTodo });
        setTodoText("");
        setButtonStatus(false);
    };

    return (
        <div className="flex justify-between">
            <input
                className="p-2 rounded mr-2 w-full"
                type="text"
                value={todoText}
                onChange={handleInputChange}
            />
            <button
                className={`py-2 px-4 rounded font-semibold transition-colors duration-500 ${
                    buttonStatus
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-400 text-gray-600 pointer-events-none"
                }`}
                onClick={handleAddTodo}
            >
                Add
            </button>
        </div>
    );
};

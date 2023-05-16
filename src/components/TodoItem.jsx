import { useContext } from "react";
import { TodoContext } from "../redux/TodoContext";

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    const handleToggle = () => {
        dispatch({ type: "TOGGLE_TODO", payload: todo.id });
    };

    const handleDelete = () => {
        dispatch({ type: "DELETE_TODO", payload: todo.id });
    };

    return (
        <li className="mb-1 ml-4">
            <span
                className="mr-1 text-lg"
                style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={handleToggle}
            >
                {todo.text}
            </span>
            <button
                className="py-1 px-2 rounded text-black font-semibold"
                onClick={handleDelete}
            >
                🗑
            </button>
        </li>
    );
};

export default TodoItem;

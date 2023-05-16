import { useContext } from "react";
import { TodoContext } from "../redux/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { state } = useContext(TodoContext);

    return (
        <ul className="mt-4">
            {state.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;

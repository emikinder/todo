import { createContext, useReducer } from "react";

const initialState = {
    todos: [],
};

export const TodoContext = createContext();

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

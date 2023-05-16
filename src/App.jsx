import { useState } from "react";
import { TodoAdd } from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./redux/TodoContext";

function App() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <TodoProvider>
            <div
                className={`flex justify-center items-center h-screen transition-colors duration-300 ${
                    isChecked ? "bg-black" : "bg-white"
                }`}
            >
                <div className="w-4/12 p-5 rounded bg-gradient-to-r from-[#0BAB64] to-[#3BB78F]">
                    <div className="flex justify-between">
                        <h1 className="text-2xl font-bold mb-4">TODO 🚀</h1>
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="form-tick appearance-none h-3 w-3 border border-gray-300 rounded-full checked:bg-yellow-500 checked:border-transparent focus:outline-none"
                                checked={isChecked}
                                onChange={handleChange}
                            />
                            <span>{isChecked ? "🌙" : "☀"}</span>
                        </label>
                    </div>
                    <TodoAdd />
                    <TodoList />
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;

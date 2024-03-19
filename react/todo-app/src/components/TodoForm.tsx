import { SetStateAction, useRef } from "react";
import { TodoList } from "../entities";

interface Props {
    setTodo: (todo: SetStateAction<TodoList[]>) => void;
}

const TodoForm = ({setTodo}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const date = Date.now();
        const newTodo: TodoList = {
            item: ref.current?.value,
            date: new Date(date),
            id: date,
        }
        setTodo((toDoList: TodoList[]) => [...toDoList, newTodo]);
    }
    return (
    <form className="w-5/6 md:w-3/6 h-8 md:text-base text-sm" onSubmit={onSubmit}>
        <input className="w-5/6 px-2 h-full rounded-bl-lg rounded-tl-lg bg-slate-300" ref={ref} type="text" name="todo" placeholder="todo item" required/>
        <input className="w-1/6 h-full cursor-pointer bg-blue-700 rounded-br-lg rounded-tr-lg text-white" type="submit" value="ToDo"/>
    </form>
  )
}

export default TodoForm
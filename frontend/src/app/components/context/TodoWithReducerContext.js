import {useContext, useReducer, useState} from "react";
import {addTodoAction, delTodoAction, todoReducer, updateTodoAction} from "@/app/components/TodoWithReducer";
import {DispatchContext} from "@/app/components/context/DispatchContext";

let initTodos = [
    {
        id:1,
        title: 'Task 1'
    },
    {
        id:2,
        title: 'Task 2'
    }
];
let id = 3;
function TodoInput()
{
    const dispatcher = useContext(DispatchContext);
    console.log('Dispatcher ',dispatcher);
    const [todoText, setTodoText] = useState("");
    const btnOnChangeHandler = (e)=> setTodoText(e.target.value);
    const btnAddHandler = () => {
        console.log("addTodoHandler Running");
        const newTodo = {id:id, title: todoText};
        id++;
        dispatcher.dispatch(addTodoAction(newTodo));
        setTodoText('');
    }

    return(<div>
        <input  type = {"text"} value = {todoText} onChange = {btnOnChangeHandler}/>
        <button type='button' className={"btn btn-primary"} onClick={btnAddHandler}>Add Todo</button>
    </div>)
}

function TodoList({todos})
{
    return(<div>
        Todo List
        {
            todos.map(todo=><div key={todo.id}>
                <Todo todo={todo}/>
                            </div>)
        }
    </div>);
}

function Todo({todo})
{
    const dispatcher = useContext(DispatchContext);
    const [editMode, setEditMode] = useState(false);
    const [todoText, setTodoText] = useState(todo.title);
    const btnDeleteHandler = ()=> {
        dispatcher.dispatch(delTodoAction(todo));
    }
    const btnUpdateHandler = () => {
        todo.title += " Update";
        dispatcher.dispatch(updateTodoAction(todo));
    }
    const btnOnChangeHandler = (e)=> setTodoText(e.target.value);
    const btnEditHandler = () => {
        if(editMode){
            dispatcher.dispatch(updateTodoAction({
                ...todo,
                title:todoText,
            }));
        }
        setEditMode(!editMode);
    }
    return(<div>
        {editMode?
            <input type={"text"} value={todoText} onChange={btnOnChangeHandler}/> : todo.title}
        &nbsp;
        <button type='button' className={"btn btn-primary"} onClick={btnDeleteHandler}>Delete</button>
        {/*&nbsp;*/}
        {/*<button type='button' className={"btn btn-primary"} onClick={btnUpdateHandler}>Update</button>*/}
        &nbsp;
        <button type='button' className={"btn btn-primary"} onClick={btnEditHandler}>{editMode?"Update":"Edit"}</button>
    </div>);
}

export default function TodoWithReducerContext(Component) {
    const [todos, dispatch] = useReducer( todoReducer, initTodos);
    return(<div>
        <h2>Todo with reducer context</h2>
        &nbsp;
        <DispatchContext.Provider value={{dispatch: dispatch}}>
            <TodoInput/>
            &nbsp;
            <TodoList todos={todos}/>
        </DispatchContext.Provider>
    </div>)
}
import {useReducer} from "react";
import {error} from "next/dist/build/output/log";

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
export function nextTodos()
{
    let todoId = id++;
    return {
        id: todoId  ,
        title: `Task ${todoId}`
    }

}


/*
 function updateTodo(action)
 {
     return {id: action.payload.id, title: action.payload.title+" Update"};
 }
 */         //  todos is oldState and action is just obj contain type and payload => { type : 'ADD Todo', payload : todo}



export function todoReducer(todos, action)
{
    console.log("Todos ", todos, "Action ", action);
    switch (action.type)
    {
        case "ADD_TODO":
            return [...todos, action.payload];
        case "UPDATE_TODO":
            return todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
        case "DELETE_TODO":
            return todos.filter(todo => todo.id !== action.payload.id);
        default:
            return todos;
    }
    return todos;
}
//Action func is HOC ( accepted the newTodo and return the Action Obj that contain Type and Payload include newTodo
export function addTodoAction(todo)
{
    return {
        type : "ADD_TODO",
        payload : todo
    }
}

export function delTodoAction(todo)
{
    return {
        type : "DELETE_TODO",
        payload : todo
    }
}

export function updateTodoAction(todo)
{
    console.log(todo);
    return {
        type : "UPDATE_TODO",
        payload : todo
    }

}
export default function TodoWithReducer(Component)
{
    const [todos, dispatch ] = useReducer( todoReducer, initTodos)

    //handlers
    const addTodoHandler = () => {
        console.log("addTodoHandler Running");
        let newTodo = nextTodos();
        console.log('New Todo', newTodo);
        dispatch(addTodoAction(newTodo));
        /*
         dispatch({
             type: "ADD_TODO",
             payload : newTodo
         })
        */
    }

    const delTodoHandler = (todo) =>{
        console.log("delTodoHandler Running", todo);
        dispatch(delTodoAction(todo));
    }

    const updateTodoHandler = (todo) =>{
        /*
         console.log("updateTodoHandler Running", todo);
         const updatedTodo = updateTodo(todo);
         console.log("new Todos ", updatedTodo);
        */
        todo.title += " Update";
        dispatch(updateTodoAction(todo));
    }
    console.log("Render");
    return(<div>
        <h2>Todo with Reducer</h2>
        &nbsp;
        <div>
            <button type='button' className={"btn btn-primary"} onClick={addTodoHandler}>Add ToDo</button>
        </div>
        &nbsp;
        {
            todos.map(todo => <div key={todo.id}>
                {todo.title}
                &nbsp;
                <button type='button' className={"btn btn-primary"} onClick={()=>updateTodoHandler(todo)}>Update</button>
                &nbsp;
                <button type='button' className={"btn btn-primary"} onClick={()=>delTodoHandler(todo)}>Delete</button>
            </div>)
        }
    </div>)
}
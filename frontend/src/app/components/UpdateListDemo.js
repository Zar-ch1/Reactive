import {useState} from "react";

let initItems = [
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
function nextTodo(text)
{
    let todoId = id++;
    return {
        id: todoId  ,
        title: `${text} ${todoId}`
    }

}

function TodoItem({todo, updateTodo, deleteTodo}) {
    //console.log(todo);
    const btnUpdateHandler = ()=> {
        todo.title += "  Update";
        updateTodo(todo); //callback func for parent
    }

    const btnDeleteHandler = ()=> {
        deleteTodo(todo);
    }
    return (<div>
        {todo.title} &nbsp;
        <button type='button' onClick={btnUpdateHandler} >Update</button>
        &nbsp;
        <button type='button' onClick={btnDeleteHandler}>Delete</button>
    </div>);
}

export default function UpdateListDemo()
{
    //state declaration
    const [todos, setTodos] = useState(initItems);
    //state with input (each state for each input
    const [todoText, setTodoText] = useState("");
    //handler function
    const addTodoHandler = () => {
        console.log("addTodoHandler Running");
        let newTodo = nextTodo(todoText);
        setTodos([...todos, newTodo]);
    }
    //rendering
    console.log("Render");
    //State management
    //CAllBACK fun for giving from child to parent
    function updateTodo(updateTodo)
    {
        console.log("Updated Todo", updateTodo);
        const newTodos = todos.map(todo=>todo.id == updateTodo.id ? updateTodo : todo);
        console.log("new Todos ", newTodos);
        setTodos(newTodos);

    }
    //State management
    //DeleteTodo with Callback
    function deleteTodo(todoToDelete){
        console.log("deleteTodo", todoToDelete);
        const newTodos = todos.filter(todo=>todo.id !== todoToDelete.id);
        setTodos(newTodos);
    }
    //input with State Management
    //todoText onChange Handler
    const todoTextOnChangeHandler = (e)=>{
        console.log("event's target", e.target.value);
        setTodoText(e.target.value)
    };

    return(<div>
        <h1>Todo List</h1>
        <input type={"text"} value={todoText} onChange={todoTextOnChangeHandler}/>
        <button type='button' className={"btn btn-primary"} onClick={addTodoHandler}>Add ToDo</button>
        &nbsp;
        {
            todos.map(todo=><TodoItem key={todo.id}
                                      todo={todo}
                                      updateTodo={updateTodo}
                                      deleteTodo={deleteTodo}

            />)
        }
    </div>);
}
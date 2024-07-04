import {useEffect, useState} from "react";

export default function FetchTodo()
{

     useEffect(() => {
         console.log('calling the fetch');
         fetch('https://jsonplaceholder.typicode.com/todos')
             .then(response => response.json())
             .then((json)=>setTodos(json));
     }, []);

    /*
     fetch('https://jsonplaceholder.typicode.com/todos')
         .then(response => response.json())
         .then((json)=>setTodos(json));

         that also cause the recursive just like
         useEffect with no dependencies
    */

    const [todos, setTodos] = useState([]);
    console.log('Render');
    return(<div>
        Todo List
        {todos.map(todo=><div key={todo.id}>{todo. title}</div>)}
    </div>)
}
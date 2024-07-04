// Service must accept -- Pure Data Input --
var Todos = require('../model/todosModel');
const {del} = require("express/lib/application");

let todos = [
    {id:1, title: 'Task_1'},
    {id:2, title: 'Task_2'},
    {id:3, title: 'Task_3'}];

async function getAllTodo() {
    return Todos.find();
}

/*
//get userID
function getTodoById(id) {
    return todos.filter(todo=> todo.id == id);
}
*/

async function getTodoById(id){
    return Todos.findById(id);
}

/*
function saveTodo(todo){
    todos.push(todo);
    return todo;
}
*/
async function saveTodo(todo){
    let newToDo = new Todos(todo);
    //console.log(newToDo);
    return newToDo.save(); //save and return id
}

async function updateTodo(todoId, todo){
    let updateTodo = await Todos.findByIdAndUpdate(todoId, todo, {new:true});
    return updateTodo;
}

async function deleteTodo(id){

    let todo = await Todos.findById(id);
    if(!todo)
    {
        throw new Error('Todo id not found');
    }

    let delTodo = await Todos.findByIdAndDelete(id);
    return delTodo;
}


/*
function delTodoById(id) {

    todos.splice( todos.indexOf(), 1);
    return todos;
}
*/





module.exports = {
    getAllTodo,
    getTodoById,
    saveTodo,
    updateTodo,
    deleteTodo,};

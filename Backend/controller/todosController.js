let toDoService  = require('./../service/todosService');
//const {delTodoById} = require("../service/todosService");

/*
function getAllToDo(req, res, next) {
    console.log('Calling get allToDo');
    res.json(toDoService.getAllTodo());
}
*/

async function getAllTodo(req, res, next){
    //wait until done
    let todos = await toDoService.getAllTodo();
    //console.log('Todos from services ', todos);
    res.json(todos);
}

/*
//get userId
function getTodoById(req, res, next) {
    console.log('Getting User ID  '+req.params.todoId);
    let id = req.params.todoId;
    res.json(toDoService.getTodoById(id));
}
*/

async function getTodoById(req, res, next){
    console.log('User_ID', req.params['todoId']);
    let id = req.params['todoId']; //obj destructing

    try
    {
        let todo = await toDoService.getTodoById(id);
        if(todo)
        {
            res.status(200).json(todo);
        }
    }
    catch(error)
    {
        res.status(404).json({
            error
        });
    }

}


/*
//saveTodo
async function saveTodo(req, res, next){
    let todo = req.body;
    console.log('todo body', todo);
    res.json(toDoService.saveTodo(todo));
}
*/

async function saveTodo(req, res, next) {
    let todo = req.body;
    try
    {
        let savedTodo = await toDoService.saveTodo(todo);
        console.log('todo', todo);
        if(savedTodo)
        {
            res.status(201).json(savedTodo);
        }
        else
        {
            res.status(400).json(savedTodo);
        }
    }
    catch(err)
    {
        res.status(400).json({ Error : err});
    }
}

/*
//delete by todoID
function delById(req, res, next){
    let id = req.params.todoId;
    console.log('deleting todos ID  '+id);
    res.json(toDoService.delTodoById(id));
}

*/
//Updating todo
async function updateTodo(req, res, next) {
    console.log('todo_ID', req.params['todoId']);
    let todoId = req.params['todoId']; //obj destructing
    let todo = req.body;
    console.log('todo', todo);
    try {
        let updateTodo = await toDoService.updateTodo(todoId, todo);
        if (updateTodo) {
            res.status(200).json(updateTodo);
        }
    } catch (error) {
        res.status(400).json({
            error
        });
    }
}


//Deleting todo
async function deleteTodo(req, res, next) {
    console.log('todo_ID', req.params['todoId']);
    let id = req.params['todoId'];
    try
    {
        let delTodo = await toDoService.deleteTodo(id);
        if(delTodo)
        {
            res.status(200).json(delTodo);
        }

    }
    catch (e)
    {

        res.status(400).json({ Error : e.reason.toString() });
    }
}





module.exports = {getAllTodo, getTodoById, saveTodo, updateTodo, deleteTodo };
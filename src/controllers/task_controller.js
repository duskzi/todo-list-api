// ----------
// CONTROLLER 
// ----------

import * as task_service from "../services/task_service.js";

// Parse req body content
const get_request_body =
(req) => {
    return new Promise(
        (resolve, reject) => {
            let body = "";

            req.on("data", chunk => {
                body += chunk.toString();
            });

            req.on("end", () => {
                resolve(JSON.parse(body));
            });
        });
};


// Create task
const create_task = 
async (req, res) => {

    const body = await get_request_body(req);

    const task = task_service.add_task(body.title);

    res.statusCode = 201;
    res.end(JSON.stringify(task));
};

// List tasks to JSON
const list_tasks =
(req, res) => {
    const tasks = task_service.get_tasks();

    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
}

// Edit task
const update_task =
async (req, res, id) => {
    
    const body = await get_request_body(req);
    const task = task_service.update_task(id, body.title);

    // Handling if task not found
    if(!task){
        res.statusCode = 404;
        return res.end(JSON.stringify({message: "Not found"}));
    };

    // Task updated
    res.end(JSON.stringify(task));
}

// Edit status
const status_task =
async (req, res, id) => {
    
    const body = await get_request_body(req);
    const task = task_service.status_task(id, body.completed);

    // Handling if task not found
    if(!task){
        res.statusCode = 404;
        return res.end(JSON.stringify({message: "Not found"}));
    };

    // Task updated
    res.end(JSON.stringify(task));
}

// Delete task
const delete_task =
(req, res, id) => {

    const sucess = task_service.delete_task(id);

    if(!sucess){
        res.statusCode = 404;
        return res.end(JSON.stringify({message: "Task not found"}));
    };

    res.end(JSON.stringify({message: `Task ${id} removed`}));
};

export {
    create_task,
    list_tasks,
    update_task,
    status_task,
    delete_task
};
// --------
// SERVICES
// --------

import create_task from "../models/task_model.js";

// Setting up storage vars
let tasks = [];
let id_counter = 1;

const add_task = 
(title) => {
    const task = create_task(id_counter++, title);
    tasks.push(task);
    return task;
}


// Get tasks
const get_tasks = 
() => {
    return tasks;
};

// Update and return task
const update_task = 
(id, title) => {

    // Finding task by ID
    const task = tasks.find(t => t.id == id);

    if(!task) return null;

    task.title = title;
    return task;
};

// Delete task by ID
const delete_task = 
(id) => {
    // Find index
    const index = tasks.findIndex(t => t.id == id);
    if(index === -1) return false;

    tasks.splice(index, 1);
    return true;
}

export {
    add_task,
    get_tasks,
    update_task,
    delete_task
};
// --------
// SERVICES
// --------

import create_task from "../models/task_model.js";
import fs from "fs";

// Save tasks into /data folder
const save_tasks =
(tasks_array) => {

    fs.writeFile("../data/todolist.json", JSON.stringify(tasks_array), (err) => {

        if(err){
            throw err;
        }

        console.log("Files was saved");
    });
} 

const load_tasks =
() => {

    try {
        // Parse and store into tasks[]
        const data = fs.readFileSync("../data/todolist.json");
        tasks = JSON.parse(data);
    }
    // If tasks is empty
    catch{

        tasks = [];
    }
}

// Add tasks and save
const add_task = 
(title) => {
    const task = create_task(id_counter++, title);
    tasks.push(task);
    save_tasks(tasks);
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
    save_tasks(tasks);
    return task;
};

// Update status and return task
const status_task = 
(id, status) => {

    // Finding task by ID
    const task = tasks.find(t => t.id == id);

    if(!task) return null;

    task.completed = status;
    save_tasks(tasks);
    return task;
};

// Delete task by ID
const delete_task = 
(id) => {
    // Find index
    const index = tasks.findIndex(t => t.id == id);
    if(index === -1) return false;

    tasks.splice(index, 1);
    save_tasks(tasks);
    return true;
}

// Setting up storage vars
let tasks = [];
let id_counter = 1;

// Read files from ../data/ and get saved tasks
load_tasks();

export {
    add_task,
    get_tasks,
    update_task,
    status_task,
    delete_task
};
// ------
// ROUTES 
// ------

import * as task_controller from "../controllers/task_controller.js";

const task_route = (req, res) => {

    const url = req.url;
    const method = req.method;

    // GET /tasks
    if(url === "/tasks" && method === "GET"){
        return task_controller.list_tasks(req, res);
    }

    // POST /tasks
    if(url === "/tasks" && method === "POST"){
        return task_controller.create_task(req, res);
    }

    // PUT /tasks/:id/status
    if (url.startsWith("/tasks/") && url.endsWith("/status") && method === "PUT"){

        const id = url.split("/")[2];
        return task_controller.status_task(req, res, id);
    }

    // PUT /tasks/:id
    if (url.startsWith("/tasks/") && method === "PUT"){

        const id = url.split("/")[2];
        return task_controller.update_task(req, res, id);
    }

    // DELETE /tasks/:id
    if(url.startsWith("/tasks/") && method === "DELETE"){

        const id = url.split("/")[2];

        return task_controller.delete_task(req, res, id);
    }

    res.statusCode = 404;
    res.end(JSON.stringify({message: "Rota não encontrada..."}));
};

export default task_route;
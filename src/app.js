/*
 __  __       ______   ______    ______    __  __        ______    ______   __    
/\ \/ /      /\__  _\ /\  __ \  /\  ___\  /\ \/ /       /\  __ \  /\  == \ /\ \   
\ \  _"-.    \/_/\ \/ \ \  __ \ \ \___  \ \ \  _"-.     \ \  __ \ \ \  _-/ \ \ \  
 \ \_\ \_\      \ \_\  \ \_\ \_\ \/\_____\ \ \_\ \_\     \ \_\ \_\ \ \_\    \ \_\ 
  \/_/\/_/       \/_/   \/_/\/_/  \/_____/  \/_/\/_/      \/_/\/_/  \/_/     \/_/ 
  
    Por Kühl
*/

import http from "http";
import task_route from "./routes/task_route.js";

const server = http.createServer((req, res) => {
  
    res.setHeader("Content-Type", "application/json");
    task_route(req, res);

});

const PORT = 3000;

server.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);
});

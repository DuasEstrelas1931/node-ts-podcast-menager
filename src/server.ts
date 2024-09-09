import * as http from "http";
import { app } from "./app";


const server = http.createServer(app);

const port = process.env.PORT
const host = process.env.HOST

server.listen(port,  () => {
    console.log(`Server is running on port ${host}:${port}`);
})
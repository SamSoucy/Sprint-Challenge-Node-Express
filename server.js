const express = require("express");

const helmet = require("helmet");


const projectsRouter = require("./projects/project-router")
const actionsRouter = require("./actions/action-router")

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRouter)
server.use("/api/actions", actionsRouter)

module.exports = server;

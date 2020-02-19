const express = require("express");

const DbRouter = require("./data/Db-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", DbRouter);

module.exports = server;

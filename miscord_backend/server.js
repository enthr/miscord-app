import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const PORT = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server Listening on ${PORT}`));
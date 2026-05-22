import express from "express";
import {
    getClients
    // getClientsById,
    // postClients,
    // patchClientsById,
    // deleteClientsById
} from "../controllers/clientController.js"
const clientRoutes = express.Router();
clientRoutes.get("/", getClients);
export default clientRoutes;
import clientModel from "../models/clientModel.js";

export const getClients = async (req, res) => {
    try {

        const clients = await clientModel.getClients();
        res.status(200).json({
            success: true,
            data: clients
        });
    } catch (error) {
        console.error("Controller Error:", error);
        res.status(500).json({ success: false, error: "Failed to fetch clients" });
    }
};
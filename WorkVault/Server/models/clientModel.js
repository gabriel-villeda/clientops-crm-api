import pool from "../config/db.js"

const getClients = async() => {
    try {
        const result = await pool.query('SELECT * FROM Clients');
        return result.rows;
    } catch (error) {
        console.error("Error in getClients model:", error);
        throw error;
    }
};

export default {
    getClients
}




const { Pool } = require('pg'); // Importing the PostgreSQL client

// Create a new pool instance for connecting to the database
const pool = new Pool({
    user: process.env.DB_USER, // Database user from environment variables
    host: process.env.DB_HOST, // Database host from environment variables
    database: process.env.DB_NAME, // Database name from environment variables
    password: process.env.DB_PASSWORD, // Database password from environment variables
    port: process.env.DB_PORT, // Database port from environment variables
});

// Function to execute a query
const executeQuery = async (query, params) => {
    try {
        const result = await pool.query(query, params);
        return result.rows; // Return the rows from the result
    } catch (error) {
        throw error; // Throw error if query execution fails
    }
};

// Function to close the database connection
const closeConnection = async () => {
    await pool.end(); // Close the pool connection
};

module.exports = {
    executeQuery,
    closeConnection,
};
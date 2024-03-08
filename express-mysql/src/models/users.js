const dbpool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbpool.execute(SQLQuery);
    }

    const createNewUser = () => {
        const SQLQuery = `INSERT INTO users (name, email, address) 
                           VALUES ('${body.name}', '${body.email}', '${body.address}')`;
                           return dbpool.execute(SQLQuery);
    }
    module.exports = {
        getAllUsers,
        createNewUser,

    }
    

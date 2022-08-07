const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongoUri: `mongodb+srv://${process.env.API_User}:${process.env.API_URL}@crmdb.dh0lfp5.mongodb.net/?retryWrites=true&w=majority`,
    jwt: 'dev-jwt',
    age: 18
}
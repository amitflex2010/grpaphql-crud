const express = require('express');
const graphqlHTTP = require('express-graphql');
const dotenv = require('dotenv');
const mongoDB = require('./config/db');
dotenv.config({ path: './config/config.env'});
const cors = require('cors');
const schema = require('./schema/schema');


const app = express();
app.use(cors());

mongoDB();


app.use('/graphql', graphqlHTTP({
schema: schema,
graphiql: true,
}));

const  PORT = process.config.PORT || 5000

app.listen(PORT, console.log(`Server is litening on port${PORT}`));
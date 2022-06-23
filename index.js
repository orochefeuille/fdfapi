require('dotenv').config();
const express = require('express');
const mongoose  = require('mongoose');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const { buildSchema, graphql, GraphQLSchema } = require('graphql');
const RootQuery = require('./graphql/queries');
const RootMutation = require('./graphql/mutations');

mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }, ()=>console.log('Mongodb is connected'));

app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query: RootQuery, mutation: RootMutation}),
    graphiql: true,
}));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
    GraphQLNonNull
} = require('graphql');

const CheeseType = new GraphQLObjectType({
    name: 'Cheese',
    fields: ()=> ({
      id: {type: new GraphQLNonNull(GraphQLID)},
      name: {type: new GraphQLNonNull(GraphQLString)}
    }),
});

module.exports = { CheeseType };

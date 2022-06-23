const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLID,
} = require('graphql');

const CheeseType = new GraphQLObjectType({
    name: 'Cheese',
    fields: ()=> ({
      id: {type: GraphQLID},
      name: {type: GraphQLString}
    }),
});

module.exports = { CheeseType };

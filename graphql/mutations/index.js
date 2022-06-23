const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { CheeseType } = require("../types");
const Cheese = require('../../models/Cheese') 

const addCheese = {
    name: 'addCheese',
    type: CheeseType,
    args: { name: {type: GraphQLString}},
    resolve: async(parent, { name }, context) => {
        const cheese = new Cheese({ name });
        const newCheese = await cheese.save();
        return newCheese;
    }
};

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        addCheese,
    }
});

module.exports = RootMutation;
const { GraphQLObjectType, GraphQLList, GraphQLID } = require("graphql");
const { CheeseType } = require("../types");
const Cheese = require('../../models/Cheese') 

const cheeses = {
    name: "Cheeses",
    type: new GraphQLList(CheeseType),
    resolve: async (parent, args, context) => {
        const cheeses = await Cheese.find();
        return cheeses;
    }
};

const cheese = {
    name: "Cheese",
    type: CheeseType,
    args: { id: { type: GraphQLID }},
    resolve: async (parent, { id }, context) => {
        const cheese = await Cheese.findById( id );
        return cheese;
    }
};

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        cheeses,
        cheese
    }
})

module.exports = RootQuery;
const { GraphQLObjectType } = require("graphql");
const { CheeseType } = require("../types");

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        cheese: {
            name: "CheeseType",
            type: CheeseType,
            resolve: (parent, args, context) => ({
                id: 1,
                name: "camembert",
            })
        }
    }
})

module.exports = RootQuery;
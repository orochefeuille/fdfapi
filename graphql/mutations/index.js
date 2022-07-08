const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");
const { CheeseType } = require("../types");
const Cheese = require('../../models/Cheese') 

const addCheese = {
    name: 'addCheese',
    type: CheeseType,
    args: { name: {type: GraphQLString}, milk: {type: GraphQLString}},
    resolve: async(parent, { name, milk }, context) => {
        const cheese = new Cheese({ name, milk });
        const newCheese = await cheese.save();
        return newCheese;
    }
};

const deleteCheese = {
    name: 'deleteCheese',
    type: CheeseType,
    args: { id: { type: GraphQLID }},
    resolve: async(parent, { id }, context) => {
        const deletedCheese = await Cheese.findByIdAndRemove( id );
        return deletedCheese;
    }
};

const updateCheese = {
    name: 'updateCheese',
    type: CheeseType,
    args: { id: { type: GraphQLID }, name: { type: GraphQLString }, milk: { type: GraphQLString }},
    resolve: async(parent, { id, name, milk }, context) => {
        const updatedCheese = await Cheese.findByIdAndUpdate( id, { name, milk } );
        return updatedCheese;
    }
};

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        addCheese,
        deleteCheese,
        updateCheese
    }
});

module.exports = RootMutation;
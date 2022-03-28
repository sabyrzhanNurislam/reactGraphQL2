"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_USER = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        const { name, username, password } = args;
        return args;
    }
};

import { GraphQLList } from 'graphql'
import { Users } from '../../Entities/Users'
import {UserType} from '../TypeDefs/User'


export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(): any {
        return Users.find();
    }
}
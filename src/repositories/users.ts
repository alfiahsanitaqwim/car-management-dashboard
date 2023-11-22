import { UserModel } from "../models/User";

interface Payload {
    email: string;
    password: string;
}

export default class UserRepository {
    async post(param: Payload){
        const email = param.email;
        const password = param.password;

        return await UserModel.query().insert({email, password}).returning("*")
    }
}
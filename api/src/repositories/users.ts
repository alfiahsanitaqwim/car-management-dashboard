import { UserModel } from "../models/User";

interface Payload {
    email: string;
    password?: string;
}

export default class UserRepository {
    async post(param: Payload){
        const email  = param.email;
        const password  = param.password;

        return await UserModel.query().insert({email, password, id_role: 3}).returning("*"); 
    };

    async get(email: string){
        return await UserModel.query().findOne({email}).returning("*");
    }


    async getById(param: number | string){
        console.log({param})
        return await UserModel.query().findOne({user_id: param}).returning("*")
    }
}
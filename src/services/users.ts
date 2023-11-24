import UserRepository from "../repositories/users";

interface Payload{
    email: string;
    password: string;
}

// class for database connection need

export default class UserService {
    #userRepository: UserRepository;

    constructor(){
        this.#userRepository = new UserRepository();
    }

    async post(param: Payload){
        return await this.#userRepository.post(param);
    }
}
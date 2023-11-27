import CarRepository from "../repositories/cars";
import { Request, Response } from "express";

export default class CarService {
    #carRepository: CarRepository;

    constructor(){
        this.#carRepository = new CarRepository();
    }

   async getAll(){
        return await this.#carRepository.getAll();
    }

    async getById(id:any){
        return await this.#carRepository.getById(id);
    }

    async post(req: Request){
        return await this.#carRepository.post(req);
    }

    async delete(id: any, req: Request){
        return await this.#carRepository.delete(id, req);
    }

    async update(req: Request){
        return await this.#carRepository.update(req);
    }
}
import { Model, ModelObject } from "objection";

export class CarsDataModel extends Model {
  id_car!: number;
  car_name!: string;
  availability!: boolean;
  capacity!: number;
  image_url!: string;
  price!: number;
  description!: string;
  id_car_type!: string;
  id_car_brand!: string;
  id_customer!: string;

  static get tableName() {
    return "cars";
  }
}

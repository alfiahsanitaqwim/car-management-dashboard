import {Model, ModelObject} from "objection";
import { CarsModel } from './Cars';

export class CarBrandsModel extends Model {
  id_car_brand!: number;
  brand_name!: string;

  static get tableName() {
    return 'car_brands';
  }

  static get relationMappings() {
    return {
      cars: {
        relation: Model.HasManyRelation,
        modelClass: CarsModel,
        join: {
          from: 'car_brands.id_car_brand',
          to: 'cars.id_car_brand',
        },
      },
    };
  }
}



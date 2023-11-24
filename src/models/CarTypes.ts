import {Model, ModelObject} from "objection";
import { CarsModel } from './Cars';

export class CarTypesModel extends Model {
  id_car_type!: number;
  type_name!: string;

  static get tableName() {
    return 'car_types';
  }

  static get relationMappings() {
    return {
      cars: {
        relation: Model.HasManyRelation,
        modelClass: CarsModel,
        join: {
          from: 'car_types.id_car_type',
          to: 'cars.id_car_type',
        },
      },
    };
  }
}



import { Model, ModelObject } from 'objection';
import { CarBrandsModel } from './CarBrands'; // Import your CarBrandModel
import { CarTypesModel } from './CarTypes'; // Import your CarTypeModel

export class CarsModel extends Model {
  id_car!: number;
  car_name!: string;
  availability!: boolean;
  capacity!: number;
  image_url!: string;
  price!: number;
  descrption!: string;
  id_car_brand!: number;
  id_car_type!: number;

  static get tableName() {
    return 'cars';
  }

  static get relationMappings() {
    return {
      carBrand: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarBrandsModel,
        join: {
          from: 'cars.id_car_brand',
          to: 'car_brands.id_car_brand',
        },
      },
      carType: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarTypesModel,
        join: {
          from: 'cars.id_car_type',
          to: 'car_types.id_car_type',
        },
      },
    };
  }
}


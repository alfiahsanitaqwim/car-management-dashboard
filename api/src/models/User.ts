import {Model} from 'objection';

export class UserModel extends Model {
	email!: string;
	password!: string;
	id_role!: number;

	static get tableName(){
		return 'users';
	}
}


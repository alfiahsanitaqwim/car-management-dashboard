import {Model} from 'objection';

export class LogActivitiesModel extends Model {
	id_user!: number;
	description!: string;

	static get tableName(){
		return 'log_activities';
	}
}




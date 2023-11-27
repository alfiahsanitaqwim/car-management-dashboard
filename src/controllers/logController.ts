import { LogActivitiesModel } from "../models/LogActivities";

export const LogAct = async (id: number, desc: string) => {
    return await LogActivitiesModel.query().insert({
        id_user : id,
        description: desc
    }).returning("*");
}


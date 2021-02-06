import{PersonalDetails} from "../../models/PersonalDetails";
import {getRepository} from "typeorm";
import { Status } from "../../dto/Status";
import { CreatePersonalInput } from "../../inputs/CreatePersonalDetailsInput";
export class PersonalDetailsManager {
    static async createPersonalDetails(data:CreatePersonalInput) {
  
    var status = new Status()
    const personal = await getRepository(PersonalDetails)
    .createQueryBuilder("personal")
    .where("personal.code = :code", { code: data.code })
    .getOne();

    if(personal){
        personal.respCode = '400';
        personal.respMessage='Employee already exsit'
        return personal;
    }

    const personalRes =  PersonalDetails.create(data)
    await personalRes.save();

    personalRes.respCode = '200';
    personalRes.respMessage='EmployeSaved successfully'
    return personalRes;
        
  }
  
}
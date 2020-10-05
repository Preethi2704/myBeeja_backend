import { CreateEmployeeInput } from "../../inputs/CreateEmployeeInput";
import { EmployeeDetails } from "../../models/EmployeeDetails";
import {getRepository} from "typeorm";
import { Status } from "../../dto/Status";

export class EmployManager {
  static async createEmployee(data:CreateEmployeeInput) {

    var status = new Status()
    const employee = await getRepository(EmployeeDetails)
    .createQueryBuilder("employee")
    .where("employee.code = :code", { code: data.code })
    .getOne();

    if(employee){
        employee.respCode = '400';
        employee.respMessage='Employee already exsit'
        return employee;
    }

    const employeeRes =  EmployeeDetails.create(data)
    await employeeRes.save();

    employeeRes.respCode = '200';
    employeeRes.respMessage='EmployeSaved successfully'
    return employeeRes;
        
  }
  
}
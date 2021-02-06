import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { EmployeeDetails } from "../models/EmployeeDetails";
import { CreateEmployeeInput } from "../inputs/CreateEmployeeInput";
import { UpdateEmployeeInput } from "../inputs/UpdateEmployeeInput";
import { EmployManager } from "./manager/EmployeeManager";

@Resolver()
export class EmployeeResolver {
  
  @Query(() => [EmployeeDetails])
  employeeList() {
    return EmployeeDetails.find();
  }

  @Query(() => EmployeeDetails)
  employee(@Arg("id") id: string) {
    return EmployeeDetails.findOne({ where: { id } });
  }

  @Mutation(() => EmployeeDetails)
  async createEmployee(@Arg("data") data: CreateEmployeeInput) {
   return EmployManager.createEmployee(data)
    // const employee = EmployeeDetails.create(data);
    // await employee.save();
    // return employee;
  }

  @Mutation(() => EmployeeDetails)
  async updateEmployee(@Arg("id") id: string, @Arg("data") data: UpdateEmployeeInput) {
    const employee = await EmployeeDetails.findOne({ where: { id } });
     console.log(employee);
    if (!employee) throw new Error("Employee not found!");
    let tempObj:any = {}
    Object.assign(tempObj,data);
    console.log("tempObj",tempObj);
    let finalObj: any = {}
    Object.keys(tempObj).forEach((key: string)=>{
      let val = tempObj[key];
      if(val!=null && val!='' && val.trim()!= ''){
        finalObj[key]=val;
      }
    });
    console.log("Final",finalObj);
    Object.assign(employee,finalObj)    
     await employee.save();
    return employee;
  }
  
  @Mutation(() => EmployeeDetails)
  async deleteEmployee(@Arg("id") id: string) {
    const employee = await EmployeeDetails.findOne({ where: { id } });
    if (!employee) throw new Error("Employee not found!");
    await employee.remove();
    return employee;
  }
}

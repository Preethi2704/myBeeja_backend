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
    if (!employee) throw new Error("Employee not found!");
    Object.assign(employee, data);
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

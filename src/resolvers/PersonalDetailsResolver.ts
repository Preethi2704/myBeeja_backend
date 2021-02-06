import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreatePersonalInput } from "../inputs/CreatePersonalDetailsInput";
import {PersonalDetails} from "../models/PersonalDetails";
import {PersonalDetailsManager} from "./manager/PersonalDetailsManager";
import{UpdatePersonalInput} from "../inputs/UpdatePersonalDetails";

@Resolver()
export class PersonalDetailsResolver {
  
  @Query(() => [PersonalDetails])
  personalList() {
    return PersonalDetails.find();
  }

  @Query(() => PersonalDetails)
  personal(@Arg("id") id: string) {
    return PersonalDetails.findOne({ where: { id } });
  }

  @Mutation(() => PersonalDetails)
  async createPersonalDetails(@Arg("data") data:CreatePersonalInput) {
   return PersonalDetailsManager.createPersonalDetails(data)
  }

  @Mutation(() => PersonalDetails)
  async deletePersonalDetails(@Arg("id") id: string) {
    const personal = await PersonalDetails.findOne({ where: { id } });
    if (!personal) throw new Error("Employee not found!");
    await personal.remove();
    return personal;
  }

//   @Mutation(() => PersonalDetails)
//   async personalUpdate(@Arg("id") id: string, @Arg("data") data: UpdatePersonalInput){
//     const personal = await PersonalDetails.findOne({ where: { id } });
//      console.log(personal);
//     if (!personal) throw new Error("Employee not found!");   
//     Object.assign(personal)  
//     await personal.save();
//     return personal;
// }

@Mutation(() => PersonalDetails)
async updatepersonalDetail(@Arg("id") id: string, @Arg("data") data: UpdatePersonalInput) {
  const employee = await PersonalDetails.findOne({ where: { id } });
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

}

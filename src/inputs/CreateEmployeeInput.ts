import { InputType, Field } from "type-graphql";
import { Column } from "typeorm";

@InputType()
export class CreateEmployeeInput {

  @Field({nullable:true})
  name: string;

  @Field({nullable:true})
  code: string;

  @Field({nullable:true})
  email: string;

  @Field({nullable:true})
  
  mobileNo: string;

  @Field({nullable:true})
  department: string;

  @Field({nullable:true})
  role: string;

  @Field({nullable:true})
  
  joinedDate: string

  }

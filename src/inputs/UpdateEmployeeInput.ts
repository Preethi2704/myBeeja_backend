import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateEmployeeInput {
 
  @Field({ nullable: true })
  Name?: string;

  @Field({ nullable: true })
  Employee_Id?: string;

  @Field({ nullable: true })
  Email?: string;

  @Field({ nullable: true })
  Moblie_Number?: string;

  @Field({ nullable: true })
  Department?: string;

  @Field({ nullable: true })
  Role?: string;

  @Field({ nullable: true })
  Joining_Date?: string;

}

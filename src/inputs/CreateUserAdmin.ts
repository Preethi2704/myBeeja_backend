import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserAdmin {
  
  @Field()
  UserName: string;

  @Field()
  Password: string;
 
}
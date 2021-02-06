import { InputType, Field } from "type-graphql";
import { Column } from "typeorm";

@InputType()
export class CreatePersonalInput {

  @Field({nullable:true})
  name: string;

  @Field({nullable:true})
  code: string;

  @Field({nullable:true})
  email: string;

  @Field({nullable:true})
  role: string;

  @Field({nullable:true})
  pan_No: string;

  @Field({nullable:true})
  account_No: string;

  @Field({nullable:true})
  ifsc_code: string;

  }

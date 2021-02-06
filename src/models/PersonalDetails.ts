import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class PersonalDetails extends BaseEntity {
  
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  name: string ;

  @Field({nullable:true})
  @Column({nullable:true,  type: 'varchar'})
  code: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  email: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  role: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  pan_No: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  account_No: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  ifsc_code: string 


  @Field({nullable:true})
  respCode:string
  @Field({nullable:true})
  respMessage:string
}
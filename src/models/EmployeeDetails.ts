import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class EmployeeDetails extends BaseEntity {
  
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
  moblieNo: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  department: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  role: string 

  @Field({nullable:true})
  @Column({nullable:true, type: 'varchar'})
  joinedDate: string 


  @Field({nullable:true})
  respCode:string
  @Field({nullable:true})
  respMessage:string
}

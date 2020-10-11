import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserAdmin } from "../models/UserAdmin";
import { CreateUserAdmin } from "../inputs/CreateUserAdmin";


@Resolver()
export class UserAdminResolver {
  
  @Query(() => [UserAdmin])
  users() {
    return UserAdmin.find();
  }

  @Query(() => UserAdmin)
  user(@Arg("id") id: string) {
    return UserAdmin.findOne({ where: { id } });
  }

  @Mutation(() => UserAdmin)
  async createBook(@Arg("data") data: CreateUserAdmin) {
    const user = UserAdmin.create(data);
    await user.save();
    return user;
  }

  
 
  
}

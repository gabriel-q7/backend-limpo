import { Elysia } from "elysia";
import UserRepositoryMemory from "./external/memory/UserRepository.memory";
import InsertUser from "./core/user/service/InsertUser";
import InsertUserController from "./adapters/InsertUser.controller";
import UserRepositoryPrismaPg from "./external/prisma/UserRepository.prisma-pg";
import GetUsers from "./core/user/service/getUsers";
import GetUsersController from "./adapters/getUsers.controller";
import GetUserById from "./core/user/service/getUserById";
import GetUserByIdController from "./adapters/getUserById";

const app = new Elysia();

/**
 * Registry routes
 */

//const userRepository = new UserRepositoryMemory()
const userRepository = new UserRepositoryPrismaPg()

const insertUser = new InsertUser(userRepository)
new InsertUserController(app, insertUser)

const getAllUsers = new GetUsers(userRepository)
new GetUsersController(app, getAllUsers)

const getUserById = new GetUserById(userRepository)
new GetUserByIdController(app, getUserById)

app.listen(3000);

console.log(
  `App is running at ${app.server?.hostname}:${app.server?.port}`
);

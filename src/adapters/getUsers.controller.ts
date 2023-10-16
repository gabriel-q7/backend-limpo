import Elysia from "elysia";
import GetUsers from "../core/user/service/getUsers";

export default class GetUsersController {
    constructor(
        readonly server: Elysia,
        readonly useCase: GetUsers
    ) {
        server.get('/users', async () => {
            return await useCase.execute()
        })
    }
}
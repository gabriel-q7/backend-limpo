import Elysia from "elysia";
import InsertUser from "../core/user/service/InsertUser";
import { UserData } from "../core/shared/types";

export default class InsertUserController {
    constructor(
        readonly server: Elysia,
        readonly useCase: InsertUser
    ) {
        server.post('/users', async ({body}) => {
            const { name, email, password } = body as UserData;
            await this.useCase.execute({
                name, email, password
            })

            return {
                status: 201,
                body: {
                    message: "User created"
                }
            }
        })
    }

}
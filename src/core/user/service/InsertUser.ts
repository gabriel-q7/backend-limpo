import UseCase from "../../shared/UseCase";
import { UserData } from "../../shared/types";
import UserRepository from "./User.repository";

export default class InsertUser implements UseCase<UserData, void>{
    /**
     * @param repository: ANY kind of UserRepository
     */
    constructor(private readonly repository: UserRepository) {}

    async execute(data: UserData): Promise<void> {
        const { name, email, password } = data;
        
        const existentUser = await this.repository.findByEmail(email);

        if (existentUser) {
            console.error("[InsertUser] User already exists");
            throw new Error("User already exists");
        }

        await this.repository.insert({
            name, email, password
        })
    }

}
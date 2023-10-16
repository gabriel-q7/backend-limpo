import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "./User.repository";

export default class GetUserById implements UseCase<number, User | null> {
    constructor(private readonly repository: UserRepository) {}

    async execute(id: number): Promise<User | null> {
        return this.repository.findById(id);
    }
}
import UseCase from "../../shared/UseCase";
import User from "../model/User";
import UserRepository from "./User.repository";

export default class GetUsers implements UseCase<void, User[]> {
    constructor(private readonly repository: UserRepository) {}

    async execute(): Promise<User[]> {
        return this.repository.findAll();
    }
}
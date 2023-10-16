import User from "../model/User";

/**
 * No external dependencies
 */
export default interface UserRepository {
    findAll(): Promise<User[]>
    findByEmail(email: string): Promise<User | null>
    insert(user: User): Promise<User | void>
    findById(id: number): Promise<User | null>
}
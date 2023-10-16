import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/User.repository";

export default class UserRepositoryMemory implements UserRepository {
    
    private readonly users: User[] = [];

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find(user => user.email === email) ?? null;
    }

    async findById(id: number): Promise<User | null> {
        return this.users.find(user => user.id === id) ?? null;
    }

    async insert(user: User): Promise<User> {
        const newUser = {
            id: Math.random(),
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }
    
}
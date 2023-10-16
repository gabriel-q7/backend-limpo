import { PrismaClient } from "@prisma/client";
import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/User.repository";

export default class UserRepositoryPrismaPg implements UserRepository {
    private prisma: PrismaClient;

    constructor () {
        this.prisma = new PrismaClient();
    }
    findById(id: number): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }
    
    insert(user: User): Promise<void | User> {
        return this.prisma.user.create({
            data: user
        })
    }
    
}
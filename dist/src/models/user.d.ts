import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Business } from './business';
interface UserAttributes {
    id: number;
    name: string;
    lastName: string;
    number: string;
    mail: string;
    isAdmin: boolean;
    businessId: number;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> {
    name: string;
    lastName: string;
    number?: string;
    mail: string;
    isAdmin: boolean;
    static preventAdminChange(instance: User): void;
    createdAt: Date;
    updatedAt: Date;
    businessId: number;
    business: Business;
}
export {};
//# sourceMappingURL=user.d.ts.map
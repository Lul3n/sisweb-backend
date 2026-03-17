import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from './user';
interface BusinessAttributes {
    id: number;
    type: string;
    name: string;
    description: string;
    contactNumber: string;
    contactMail: string;
}
interface BusinessCreationAttributes extends Optional<BusinessAttributes, 'id'> {
}
export declare class Business extends Model<BusinessAttributes, BusinessCreationAttributes> {
    type: string;
    name: string;
    description?: string;
    contactNumber: string;
    contactMail: string;
    createdAt: Date;
    updatedAt: Date;
    user: User[];
}
export {};
//# sourceMappingURL=business.d.ts.map
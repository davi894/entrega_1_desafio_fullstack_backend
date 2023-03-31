import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    CreateDateColumn,
    OneToMany
} from "typeorm";
import { CustomerContacts } from "./customerContacts";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({})
    name: string;

    @Column({})
    email: string;

    @Column()
    phone: string;
/* 
    @Column({ default: true })
    is_active: boolean; */

    @Column({ default: true })
    is_client: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => CustomerContacts, (cc) => cc.id)
    @JoinColumn()
    CustomerContacts_: CustomerContacts[];

}

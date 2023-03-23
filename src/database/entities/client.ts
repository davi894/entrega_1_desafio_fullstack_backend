import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    CreateDateColumn,
    OneToMany,
    BeforeUpdate,
    BeforeInsert
} from "typeorm";
import { CustomerContacts } from "./customerContacts";
import { hashSync, getRounds } from "bcryptjs";

@Entity()
export class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({})
    name: string;

    @Column({})
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column({ default: true })
    is_active: boolean;

    @Column({ default: true })
    is_client: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => CustomerContacts, (cc) => cc.id)
    @JoinColumn()
    CustomerContacts_: CustomerContacts[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";
import { Client } from "./client";

@Entity()
export class CustomerContacts {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({})
    name: string;

    @Column({})
    email: string;

    @Column()
    phone: string;

  /*   @Column({ default: true })
    is_active: boolean; */

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Client, (c) => c.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    client_: Client;

}
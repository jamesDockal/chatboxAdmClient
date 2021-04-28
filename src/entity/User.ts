import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from "typeorm";
import { Message } from "./Message";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true
    })
    name: string;

    @OneToMany(type=>Message, user=> User)
    @JoinColumn()
    message: Message

    @Column()
    email: string;

}

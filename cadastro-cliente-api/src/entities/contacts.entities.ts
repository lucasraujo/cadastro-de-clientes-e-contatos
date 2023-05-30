import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Client from "./client.entities";

@Entity("contact")
class Contact{
    @PrimaryGeneratedColumn()
    id:number|string;

    @Column({ length: 120})
    fullName: string;

    @Column({length: 120})
    email: string;

    @Column({length: 15})
    phoneNumber: string;

    @CreateDateColumn({type:'date'})
    RegistrationDate: Date; 

    @ManyToOne(() => Client, (client)=> client.contacts)
    client :  Client;
}

export default Contact
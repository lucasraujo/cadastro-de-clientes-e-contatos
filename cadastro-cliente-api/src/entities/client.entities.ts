import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import Company from "./company.entities";
import Contact from "./contacts.entities";

@Entity("client")
class Client{

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

    @ManyToOne(() => Company, (company)=> company.clients)
    company: Company;

    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[];
    
}

export default Client
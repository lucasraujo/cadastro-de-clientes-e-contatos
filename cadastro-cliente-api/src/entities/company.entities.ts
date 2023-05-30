import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import Client from "./client.entities"
import { getRounds, hashSync } from "bcrypt";

@Entity("company")
class Company{

    @PrimaryGeneratedColumn()
    id:number|string;

    @Column({unique: true, length: 120})
    companyName:string

    @Column({length: 120})
    email: string;

    @Column({length:120})
    password:string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        try {
            getRounds(this.password)
        } catch (error) {
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Client, (client) => client.company)
    clients: Client[];

}

export default Company
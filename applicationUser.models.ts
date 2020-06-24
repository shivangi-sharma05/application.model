import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";
import { baseEntity } from "../entities";
class user{
    @Column()
    userName: string;
    
    @Column()
    adminId: ObjectID;
}
class level {
    @Column()
    rewardPoint: number;
    
    @Column()
    points: number;

    @Column()
        level: number;
        
        @Column()
        startdate: Date;

        @Column()
        endate: Date;

}
    

   
@Entity()
export class application extends baseEntity
 {

    @ObjectIdColumn()
    itemId: ObjectID;

    @ObjectIdColumn()
    identifiedBy: ObjectID;
  


}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import Role from './role.enum';

@Entity()
class User {

  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  public email: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User
  })
  public role: Role

  @Column()
  public name: string;

  @Column()
  public password: string;

  @Column({
    nullable: true
  })
  @Exclude()
  public currentHashedRefreshToken?: string;
  
}

export default User;

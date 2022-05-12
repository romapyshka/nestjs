import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Todo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public content: string;
}

export default Todo;
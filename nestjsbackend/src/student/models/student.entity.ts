import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student')
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: -1 })
  age: number;
}

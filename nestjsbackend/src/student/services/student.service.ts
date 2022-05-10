import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from '../models/student.entity';
import { Student } from '../models/student.interface';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentRepository: Repository<StudentEntity>,
  ) {}

  addStudent(student: Student) {
    return this.studentRepository.save(student);
  }

  getAllStudents() {
    return this.studentRepository.find();
  }
  // getAllStudents() {
  //   return this.studentRepository.find({
  //     order: {
  //       id: 'ASC',
  //     },
  //   });
  // }

  getStudentById(id: number) {
    return this.studentRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  removeStudent(id: number) {
    return this.studentRepository.delete(id);
  }

  updateStudent(id, student) {
    return this.studentRepository.update(id, student);
  }
}

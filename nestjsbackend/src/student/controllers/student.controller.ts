import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Student } from '../models/student.interface';
import { StudentService } from '../services/student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post()
  addStudent(@Body() student: Student) {
    return this.studentService.addStudent(student);
  }

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: number) {
    return this.studentService.getStudentById(id);
  }

  @Delete(':id')
  removeStudent(@Param('id') id: number) {
    return this.studentService.removeStudent(id);
  }

  @Put(':id')
  updateStudent(@Param('id') id: number, @Body() student: Student) {
    return this.studentService.updateStudent(id, student);
  }
}

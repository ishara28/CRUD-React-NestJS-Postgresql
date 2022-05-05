import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './models/student.entity';
import { StudentService } from './services/student.service';
import { StudentController } from './controllers/student.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}

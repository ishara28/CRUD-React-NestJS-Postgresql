import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from '../services/student.service';
import { StudentController } from './student.controller';

describe('StudentController', () => {
  let controller: StudentController;

  const mockStudentService = {
    addStudent: jest.fn((student) => {
      return {
        ...student,
        id: expect.any(Number),
      };
    }),

    getAllStudents: jest.fn(() => {
      return [{}];
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    })
      .overrideProvider(StudentService)
      .useValue(mockStudentService)
      .compile();

    controller = module.get<StudentController>(StudentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a students', () => {
    expect(
      controller.addStudent({
        name: 'Ishara',
        age: 25,
        email: 'ish@gmail.com',
      }),
    ).toEqual({
      name: 'Ishara',
      age: 25,
      email: 'ish@gmail.com',
      id: expect.any(Number),
    });

    expect(mockStudentService.addStudent).toHaveBeenCalledWith({
      name: 'Ishara',
      age: 25,
      email: 'ish@gmail.com',
    });
  });

  it('should get all the students', () => {
    
  });
});

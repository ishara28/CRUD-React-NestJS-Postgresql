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

    getStudentById: jest.fn((id) => {
      return {
        id: id,
        name: expect.any(String),
        email: expect.any(String),
        age: expect.any(Number),
      };
    }),

    updateStudent: jest.fn().mockImplementation((id, data) => {
      return {
        id,
        ...data,
      };
    }),

    getAllStudents: jest.fn().mockImplementation(() => {}),
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

  describe('addStudent', () => {
    const mockData = {
      name: 'Ishara',
      age: 25,
      email: 'ish@gmail.com',
    };

    it('should create a student', () => {
      expect(controller.addStudent(mockData)).toEqual({
        ...mockData,
        id: expect.any(Number),
      });
      expect(mockStudentService.addStudent).toHaveBeenCalled();
    });
  });

  describe('getStudentById', () => {
    it('should return student details for given id', () => {
      const id = 1;
      expect(controller.getStudentById(id)).toEqual({
        id: id,
        name: expect.any(String),
        email: expect.any(String),
        age: expect.any(Number),
      });
    });
  });

  describe('updateStudent', () => {
    it('should update student', () => {
      const mockData = {
        name: 'Ishara',
        age: 25,
        email: 'ish@gmail.com',
      };
      expect(controller.updateStudent(1, mockData)).toEqual({
        id: 1,
        name: 'Ishara',
        age: 25,
        email: 'ish@gmail.com',
      });
    });
  });

  describe('getAllStudents', () => {
    it('should return all the students', async () => {
      const mockResult = [
        { id: 43, name: 'Test', email: 'egeg', age: 342 },
        { id: 44, name: 'Name ', email: 'name@gmail.com', age: 12 },
      ];

      jest
        .spyOn(mockStudentService, 'getAllStudents')
        .mockImplementation(() => mockResult);
      expect(await controller.getAllStudents()).toBe(mockResult);
    });
  });
});

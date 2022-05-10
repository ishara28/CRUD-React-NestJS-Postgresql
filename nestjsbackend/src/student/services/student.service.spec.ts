import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { StudentEntity } from '../models/student.entity';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  let mockStudentRepository = {
    save: jest
      .fn()
      .mockImplementation((student) =>
        Promise.resolve({ id: expect.any(Number), ...student }),
      ),

    findOne: jest.fn().mockImplementation(({ where: { id: id } }) =>
      Promise.resolve({
        id: id,
        name: 'Ishara',
        email: 'ish@gmail.com',
        age: 24,
      }),
    ),

    find: jest.fn().mockImplementation(() => {
      const mockResponse = [
        { id: 1, name: 'Ishara', email: 'ishara@gmail.com', age: 23 },
      ];
      return mockResponse;
    }),

    update: jest.fn().mockImplementation((id, student) => {
      return {
        id,
        ...student,
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(StudentEntity),
          useValue: mockStudentRepository,
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addStudent', () => {
    it('should add new student', async () => {
      const mockData = {
        name: 'ishara',
        email: 'ish97@gmail.com',
        age: 25,
      };
      expect(await service.addStudent(mockData)).toEqual({
        id: expect.any(Number),
        ...mockData,
      });
    });
  });

  describe('getStudentById', () => {
    it('should get studend by id', async () => {
      expect(await service.getStudentById(1)).toEqual({
        id: 1,
        name: expect.any(String),
        email: expect.any(String),
        age: expect.any(Number),
      });
    });
  });

  describe('updateStudent', () => {
    it('should update student', async () => {
      const modkData = {
        name: 'Ishara',
        email: ' ish@gmail.com',
        age: 20,
      };
      expect(await service.updateStudent(1, modkData)).toEqual({
        ...modkData,
        id: 1,
      });
    });
  });

  describe('getAllStudents', () => {
    it('should return all the students', async () => {
      const mockResponse = [
        {
          id: expect.any(Number),
          name: expect.any(String),
          email: expect.any(String),
          age: expect.any(Number),
        },
      ];
      // jest.spyOn(mockStudentRepository, 'find').mockImplementation(() => {
      //   mockResponse;
      // });

      expect(await service.getAllStudents()).toEqual(mockResponse);
    });
  });
});

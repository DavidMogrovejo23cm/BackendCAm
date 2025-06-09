import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employees.module';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  create(data: Partial<Employee>) {
    const employee = this.employeeRepo.create(data);
    return this.employeeRepo.save(employee);
  }

  findAll() {
    return this.employeeRepo.find();
  }

  findOne(id: number) {
    return this.employeeRepo.findOneBy({ id });
  }

  update(id: number, data: Partial<Employee>) {
    return this.employeeRepo.update(id, data);
  }

  remove(id: number) {
    return this.employeeRepo.delete(id);
  }
}

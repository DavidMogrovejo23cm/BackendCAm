import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  create(@Body() data) {
    return this.employeesService.create(data);
  }

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.employeesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.employeesService.remove(+id);
  }
}

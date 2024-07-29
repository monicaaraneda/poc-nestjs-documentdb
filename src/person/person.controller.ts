import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.interface';

@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() person: Person) {
    return this.personService.create(person);
  }

  @Get()
  async findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.personService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() person: Person) {
    return this.personService.update(id, person);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.personService.delete(id);
  }
}

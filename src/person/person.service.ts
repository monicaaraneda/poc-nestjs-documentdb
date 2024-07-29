import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './person.interface';

@Injectable()
export class PersonService {
  constructor(@InjectModel('Person') private readonly personModel: Model<Person>) {}

  async create(person: Person): Promise<Person> {
    const newPerson = new this.personModel(person);
    return newPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async findById(id: string): Promise<Person> {
    return this.personModel.findById(id).exec() as Promise<Person>;
  }

  async update(id: string, person: Person): Promise<Person> {
    return this.personModel.findByIdAndUpdate(id, person, { new: true }).exec() as Promise<Person>;
  }

  async delete(id: string): Promise<any> {
    return this.personModel.findByIdAndRemove(id).exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, SortOrder } from 'mongoose';

import { ICar } from '../interfaces';
import { CarDocument, CarModel } from '../model';

@Injectable()
export class CarRepoitory {
  public constructor(
    @InjectModel(CarModel.name) private carModel: Model<CarModel>,
  ) { }

  public async findAll(): Promise<CarDocument[]> {
    return await this.carModel.find();
  }

  public async findSortedBy(
    name: SortOrder,
    brand: SortOrder,
  ): Promise<CarDocument[]> {
    return await this.carModel.find().sort({ name, brand });
  }

  public async create(data: ICar): Promise<CarDocument> {
    return await this.carModel.create(data);
  }
}

import { Injectable } from '@nestjs/common';
import { SortOrder } from 'mongoose';

import { ICar } from 'src/datasourse/interfaces';
import { CarDocument } from 'src/datasourse/model';
import { CarRepoitory } from 'src/datasourse/repository';

@Injectable()
export class CarService {
  constructor(private readonly carRepoitory: CarRepoitory) {}

  /**
   *
   * @param data
   * @returns
   */
  public async create(data: ICar): Promise<CarDocument> {
    return this.carRepoitory.create(data);
  }

  /**
   *
   * @returns
   */
  public async findAll(): Promise<CarDocument[]> {
    return this.carRepoitory.findAll();
  }

  /**
   *
   * @param name
   * @param brand
   * @returns
   */
  public async findSortedBy(
    name: string,
    brand: string,
  ): Promise<CarDocument[]> {
    return this.carRepoitory.findSortedBy(
      name as SortOrder,
      brand as SortOrder,
    );
  }
}

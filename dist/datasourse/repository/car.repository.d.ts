import { Model, SortOrder } from 'mongoose';
import { ICar } from '../interfaces';
import { CarDocument, CarModel } from '../model';
export declare class CarRepoitory {
    private carModel;
    constructor(carModel: Model<CarModel>);
    findAll(): Promise<CarDocument[]>;
    findSortedBy(name: SortOrder, brand: SortOrder): Promise<CarDocument[]>;
    create(data: ICar): Promise<CarDocument>;
}

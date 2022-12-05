import { ICar } from 'src/datasourse/interfaces';
import { CarDocument } from 'src/datasourse/model';
import { CarRepoitory } from 'src/datasourse/repository';
export declare class CarService {
    private readonly carRepoitory;
    constructor(carRepoitory: CarRepoitory);
    create(data: ICar): Promise<CarDocument>;
    findAll(): Promise<CarDocument[]>;
    findSortedBy(name: string, brand: string): Promise<CarDocument[]>;
}

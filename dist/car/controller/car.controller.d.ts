import { ICar } from 'src/datasourse/interfaces';
import { CarService } from '../service';
import { CarPresenter } from './presenter';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    findAll(): Promise<CarPresenter[]>;
    findSortedBy(name: string, brand: string): Promise<CarPresenter[]>;
    create(body: ICar): Promise<CarPresenter>;
}

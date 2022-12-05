import { ICar } from 'src/datasourse/interfaces';
export declare class CarPresenter implements ICar {
    constructor(partial: Partial<ICar>);
    brand: string;
    name: string;
    production_year: number;
    price: number;
}

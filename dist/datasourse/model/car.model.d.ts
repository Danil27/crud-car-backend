import mongoose from 'mongoose';
import { ICar } from '../interfaces';
export declare class CarModel implements ICar {
    brand: string;
    name: string;
    production_year: number;
    price: number;
}
export declare const CarSchema: mongoose.Schema<CarModel, mongoose.Model<CarModel, any, any, any, any>, {}, {}, {}, {}, "type", CarModel>;
export type CarDocument = CarModel & mongoose.Document;

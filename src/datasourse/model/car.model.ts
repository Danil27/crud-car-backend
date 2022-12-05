import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { ICar } from '../interfaces';

@Schema({
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class CarModel implements ICar {
  @Prop({ type: mongoose.Schema.Types.String, required: true })
  brand: string;

  @Prop({ type: mongoose.Schema.Types.String, required: true })
  name: string;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  production_year: number;

  @Prop({ type: mongoose.Schema.Types.Number, required: true })
  price: number;
}

export const CarSchema = SchemaFactory.createForClass(CarModel);
export type CarDocument = CarModel & mongoose.Document;

import { ApiProperty } from '@nestjs/swagger';

import { ICar } from 'src/datasourse/interfaces';

export class CarPresenter implements ICar {
  constructor(partial: Partial<ICar>) {
    this.brand = partial.brand;
    this.name = partial.name;
    this.price = partial.price;
    this.production_year = partial.production_year;
  }

  @ApiProperty({
    description: '',
    type: String,
    example: 'Toyota',
  })
  brand: string;

  @ApiProperty({
    description: '',
    type: String,
    example: 'Raw 4',
  })
  name: string;

  @ApiProperty({
    description: '',
    type: Number,
    example: 2014,
  })
  production_year: number;

  @ApiProperty({
    description: '',
    type: Number,
    example: 200000,
  })
  price: number;
}

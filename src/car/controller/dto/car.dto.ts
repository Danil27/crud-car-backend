import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { ICar } from 'src/datasourse/interfaces';

export class CarDto implements ICar {
  @IsString()
  @ApiProperty({ description: 'Бренд', type: String, required: false })
  brand: string;

  @IsString()
  @ApiProperty({ description: 'Название', type: String, required: false })
  name: string;

  @IsNumber()
  @ApiProperty({ description: 'Год выпуска', type: Number, required: false })
  production_year: number;

  @IsNumber()
  @ApiProperty({ description: 'Цена', type: Number, required: false })
  price: number;
}

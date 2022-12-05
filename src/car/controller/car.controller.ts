import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { factory } from 'src/utils/factory';
import { CarService } from '../service';
import { CarDto } from './dto';
import { CarPresenter } from './presenter';

@ApiTags('Car')
@Controller({ path: 'car' })
export class CarController {
  constructor(private readonly carService: CarService) {}

  @ApiResponse({
    status: 200,
    type: CarPresenter,
  })
  @ApiOperation({
    description: 'Получить список всех авто',
  })
  @Get('')
  public async findAll(): Promise<CarPresenter[]> {
    const result = await this.carService.findAll();
    return factory(result, CarPresenter);
  }

  @ApiResponse({
    status: 200,
    type: CarPresenter,
  })
  @ApiOperation({
    description: 'Получить список всех авто',
  })
  @Get('name=:name&brand=:brand')
  public async findSortedBy(
    @Param('name') name: string,
    @Param('brand') brand: string,
  ): Promise<CarPresenter[]> {
    const result = await this.carService.findSortedBy(name, brand);
    return factory(result, CarPresenter);
  }

  @ApiResponse({
    status: 200,
    type: CarPresenter,
  })
  @ApiOperation({
    description: 'Добавить авто',
  })
  @Post('')
  public async create(@Body() body: CarDto): Promise<CarPresenter> {
    return new CarPresenter(await this.carService.create(body));
  }
}

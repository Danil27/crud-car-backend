import { Module } from '@nestjs/common';
import { DatasourceModule } from 'src/datasourse/datasourse.module';

import { CarController } from './controller';
import { CarService } from './service';

@Module({
  imports: [DatasourceModule],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}

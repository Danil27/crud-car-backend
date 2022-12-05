import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.model';
import { configOptions } from './config';
import { DatasourceModule } from './datasourse/datasourse.module';

@Module({
  imports: [ConfigModule.forRoot(configOptions), DatasourceModule, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

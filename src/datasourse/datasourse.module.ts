import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MongooseConfigService } from 'src/config';
import { CarModel, CarSchema } from './model';
import { CarRepoitory } from './repository';

@Module({
  imports: [
    MongooseModule.forRootAsync({ useClass: MongooseConfigService }),
    MongooseModule.forFeature([{ name: CarModel.name, schema: CarSchema }]),
  ],
  providers: [CarRepoitory],
  exports: [CarRepoitory],
})
export class DatasourceModule {}

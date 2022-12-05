import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  public constructor(private readonly configService: ConfigService) {}

  public createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('MONGODB_DSN'),
      maxPoolSize: 100,
      connectTimeoutMS: 5000,
    };
  }
}

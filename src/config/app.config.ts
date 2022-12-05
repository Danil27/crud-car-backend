import { config } from 'dotenv';
config();

import type { ConfigModuleOptions } from '@nestjs/config';
export const configOptions: ConfigModuleOptions = {
  envFilePath: '.env',
  isGlobal: true,
  cache: true,
};

export const PORT = Number(process.env.APP_PORT ?? 3030);
export const HOST = String(process.env.APP_HOST ?? '127.0.0.1');

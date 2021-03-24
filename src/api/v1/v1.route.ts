import { Routes } from 'nest-router';
import { PingModule } from './ping/ping.module';

export const V1Routes: Routes = [
  {
    path: '/ping',
    module: PingModule,
  },
];

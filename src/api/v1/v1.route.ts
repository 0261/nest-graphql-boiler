import { Routes } from 'nest-router';
import { PingModule } from './ping/ping.module';
import { UserModule } from './user/user.module';

export const V1Routes: Routes = [
  {
    path: '/ping',
    module: PingModule,
  },
  {
    path: '/user',
    module: UserModule,
  },
];

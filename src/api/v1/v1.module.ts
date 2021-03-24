import { Module } from '@nestjs/common';
import { PingModule } from './ping';

@Module({
  imports: [PingModule],
})
export class V1Module { }

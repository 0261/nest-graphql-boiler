import { Module } from '@nestjs/common';
import { ArticleModule } from './article';
import { PingModule } from './ping';
import { UserModule } from './user';

@Module({
  imports: [PingModule, UserModule, ArticleModule],
})
export class V1Module { }

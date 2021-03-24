import { Module } from '@nestjs/common';
import { ArticleModule } from './article';
import { UserModule } from './user';

@Module({
  imports: [ArticleModule, UserModule],
})
export class ResolverModule { }

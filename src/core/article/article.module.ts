import { Global, Module } from '@nestjs/common';
import { ArticleService } from './article.service';

@Global()
@Module({
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule { }

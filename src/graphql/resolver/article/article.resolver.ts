import { Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { IQuery, GetArticlesInput } from '__generated__/types';

@Resolver('article')
export class ArticleResolver {
  private logger: Logger = new Logger(ArticleResolver.name, true);

  @Query()
  public getArticle(@Args('id') id: number): ReturnType<IQuery['getArticle']> {
    this.logger.debug(id);
    return {
      id: 'Article#1',
      title: 'Dan Article',
    };
  }
  @Query()
  public getArticles(@Args() args: GetArticlesInput): ReturnType<IQuery['getArticles']> {
    this.logger.debug(args);
    return {
      edges: [],
      pageInfo: {
        hasNextPage:false,
        hasPreviousPage:false,
      },
    };
  }
}

import { Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { IQuery } from '__generated__/types';

@Resolver('user')
export class UserResolver {
  private logger: Logger = new Logger(UserResolver.name, true);

  @Query()
  public getUser(@Args('id') id: number): ReturnType<IQuery['getUser']> {
    this.logger.verbose(id);
    return {
      id: 'User#1',
      name: 'dan',
    };
  }
}

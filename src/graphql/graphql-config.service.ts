import { Injectable, Logger } from '@nestjs/common';
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Request } from 'express';
import { join } from 'path';
import { AuthenticationService } from '~domain/authentication';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  private readonly logger: Logger = new Logger(GraphqlConfigService.name, true);

  public constructor(
    private readonly authentication: AuthenticationService,
  ) { }

  /**
   * @returns GqlModuleOptions
   */
  public createGqlOptions(): GqlModuleOptions {
    return {
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/__generated__/types.ts'),
        outputAs: 'interface',
      },
      context: async (context: { req: Request; }) => {

        this.logger.verbose('=====Context======');

        await this.authentication.contextAuthenticate(context.req);

        this.logger.verbose('==================');
        return context;
      },
    };
  }
}

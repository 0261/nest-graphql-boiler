import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ArticleModule } from '~domain/article';
import { AuthenticationModule } from '~domain/authentication';
import { UserModule } from '~domain/user/user.module';
import { GraphqlConfigService } from './graphql-config.service';

@Module({
  imports: [
    //graphql
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
    }),

    // domain
    AuthenticationModule,
    UserModule,
    ArticleModule,

  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ArticleModule } from '~domain/article';
import { UserModule } from '~domain/user/user.module';

@Module({
  imports: [
    //graphql
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/__generated__/types.ts'),
        outputAs: 'interface',
      },
    }),

    // core
    UserModule,
    ArticleModule,

  ],
})
export class AppModule {}

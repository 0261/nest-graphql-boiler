import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ArticleModule } from '~core/article';
import { UserModule } from '~core/user/user.module';

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

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RouterModule } from 'nest-router';
import { join } from 'path';
import { ArticleModule } from '~core/article';
import { UserModule } from '~core/user/user.module';
import { AppRoutes } from './app.route';
import { V1Module } from './v1/v1.module';

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

    // route
    RouterModule.forRoutes(AppRoutes),
    V1Module,

  ],
})
export class AppModule {}

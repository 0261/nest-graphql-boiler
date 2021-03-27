import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ArticleModule } from '~domain/article';
import { UserModule } from '~domain/user/user.module';
import { AppRoutes } from './app.route';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [
    // domain
    UserModule,
    ArticleModule,

    // route
    RouterModule.forRoutes(AppRoutes),
    V1Module,

  ],
})
export class AppModule {}

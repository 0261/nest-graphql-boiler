import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { ArticleModule } from '~core/article';
import { UserModule } from '~core/user/user.module';
import { AppRoutes } from './app.route';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [
    // core
    UserModule,
    ArticleModule,

    // route
    RouterModule.forRoutes(AppRoutes),
    V1Module,

  ],
})
export class AppModule {}

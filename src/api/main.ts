import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(9821);
}
void bootstrap();

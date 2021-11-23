import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.APPPORT);
  console.log('Running on: http://localhost:' + process.env.APPPORT);
}
bootstrap();

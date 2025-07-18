import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// src/main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.USER_SERVICE_PORT || 3001;
  await app.listen(port, '0.0.0.0');   // thêm '0.0.0.0' ở đây
  console.log(`Listening on 0.0.0.0:${port}`);
}
bootstrap();

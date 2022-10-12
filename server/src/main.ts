import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  //  검증을 통과한 뒤, 대상 객체에서 검증 규칙이 정의되어있지 않은 프로퍼티를 제거해주는 옵션
  app.useGlobalFilters(new HttpExceptionFilter());

  //cors origin 허용
  app.enableCors({
    origin: true,
    credentials: true,
  });

  const PORT = process.env.PORT;
  // eslint-disable-next-line no-console
  console.log(`${PORT}포트로 서버가 동작 중 입니다.`);
  await app.listen(PORT);
}
bootstrap();

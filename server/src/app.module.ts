import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      // db이름
      // 파일명과 일치해야함
      entities: [Product],
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    // consumer.apply(LoggerMiddleware).forRoutes('products');  products 라우터에만 쓰겠다는 의미
    // consumer.apply(LoggerMiddleware).forRoutes('*'); 로 하면 전체 라우터(전체 엔드포인트)에 적용됨
  }
}

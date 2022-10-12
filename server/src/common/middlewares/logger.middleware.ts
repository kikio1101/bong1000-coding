import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger();

  use(req: Request, res: Response, next: NextFunction) {
    // response가 완료됬을 때 미들웨어가 동작해 로깅을 적용시키기 위함
    res.on('finish', () => {
      // 응답이 완료됬을 때의 이벤트를 등록해줌
      // 이를 통해 응답이 완료되었을 때 로깅처리를 할 수 있게됨 (특히 res객체를 이용할 수 있게됨)
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
    });

    next();
  }
}

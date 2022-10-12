import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
// 예외처리 필터
// 컨트롤러 >> 서비스 >> post-request 인터셉터 (라우트 인터셉터,컨트롤러 인터셉터, 글로벌 인터셉터) >>  예외처리 필터 >> Server resoponse

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 실행환경 컨텍스트
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    // req와 res를 가져옴
    const status = exception.getStatus();

    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | string[] };

    // 컨트롤러의 라우터에서 발생한 에러를 가져옴

    // error 타입이 객체로 오면 nest 자체에서 json형식으로 넘어오는 에러고
    // 문자 타입으로 넘어오면 사용자가 만든 에러
    // 에러 객체의 message 속성이 경우 타입이 string으로 올수도 있고 string배열로 올수도 있음

    // express로 치면
    // res.status(400).json({키:밸류})

    if (typeof error === 'string') {
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        path: request.url,
        error,
      });
    } else {
      //에러가 객체 형태로 넘어오는 경우(nest 자체적으로 넘어오는 에러)
      response.status(status).json({
        success: false,
        timestamp: new Date().toISOString(),
        ...error,
      });
    }
  }
}

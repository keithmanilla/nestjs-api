import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { statusCode: number; message: string } {
    const newMessage: string = 'Hello World!';
    return {
      statusCode: 200,
      message: newMessage,
    };
  }
}

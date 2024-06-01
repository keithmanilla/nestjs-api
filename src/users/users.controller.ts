import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('api/v1/users')
export class UsersController {
  @Get()
  @HttpCode(200)
  return() {
    try {
      const users: any[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ];
      return { statusCode: 200, users: users };
    } catch (error) {
      return { statusCode: 200, ...error };
    }
  }

  @Post('/add')
  @HttpCode(201)
  created() {
    return { statusCode: 201, message: 'User created' };
  }
}

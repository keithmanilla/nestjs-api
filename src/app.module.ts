import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductsModule } from './products/products.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [ProductsModule, MessageModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}

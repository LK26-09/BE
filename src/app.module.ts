import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BookModule],
})
export class AppModule {}

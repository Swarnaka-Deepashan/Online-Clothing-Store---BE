import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ItemController } from './item/item.controller';

@Module({
  imports: [ItemModule],
  controllers: [AppController, ItemController],
  providers: [AppService],
})
export class AppModule {}

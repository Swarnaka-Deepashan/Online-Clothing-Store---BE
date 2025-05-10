import { Module } from '@nestjs/common';
import { ItemService } from './items.service';
import { ItemController } from './items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],

  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}

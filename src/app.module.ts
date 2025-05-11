import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryUnitsModule } from './inventory-units/inventory-units.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ItemModule,
    MongooseModule.forRoot('mongodb://localhost:27017/online-clothing-store'),
    InventoryUnitsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

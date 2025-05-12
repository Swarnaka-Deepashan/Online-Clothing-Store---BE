import { Module } from '@nestjs/common';
import { InventoryUnitsService } from './inventory-units.service';
import { InventoryUnitsController } from './inventory-units.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  InventoryUnit,
  InventoryUnitSchema,
} from './schemas/inventory-unit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InventoryUnit.name, schema: InventoryUnitSchema },
    ]),
  ],
  controllers: [InventoryUnitsController],
  providers: [InventoryUnitsService],
})
export class InventoryUnitsModule {}

import { Module } from '@nestjs/common';
import { InventoryUnitsService } from './inventory-units.service';
import { InventoryUnitsController } from './inventory-units.controller';
import {
  InventoryUnit,
  InventoryUnitSchema,
} from 'src/schemas/inventory-unit.schema';
import { MongooseModule } from '@nestjs/mongoose';

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

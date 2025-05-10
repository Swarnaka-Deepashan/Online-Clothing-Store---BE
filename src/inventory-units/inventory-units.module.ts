import { Module } from '@nestjs/common';
import { InventoryUnitsService } from './inventory-units.service';
import { InventoryUnitsController } from './inventory-units.controller';

@Module({
  controllers: [InventoryUnitsController],
  providers: [InventoryUnitsService],
})
export class InventoryUnitsModule {}

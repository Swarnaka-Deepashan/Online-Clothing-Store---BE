import { Test, TestingModule } from '@nestjs/testing';
import { InventoryUnitsController } from './inventory-units.controller';
import { InventoryUnitsService } from './inventory-units.service';

describe('InventoryUnitsController', () => {
  let controller: InventoryUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryUnitsController],
      providers: [InventoryUnitsService],
    }).compile();

    controller = module.get<InventoryUnitsController>(InventoryUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

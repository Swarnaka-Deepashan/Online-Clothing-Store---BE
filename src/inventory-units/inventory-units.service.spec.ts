import { Test, TestingModule } from '@nestjs/testing';
import { InventoryUnitsService } from './inventory-units.service';

describe('InventoryUnitsService', () => {
  let service: InventoryUnitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryUnitsService],
    }).compile();

    service = module.get<InventoryUnitsService>(InventoryUnitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

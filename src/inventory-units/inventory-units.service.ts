import { Injectable } from '@nestjs/common';
import { CreateInventoryUnitDto } from './dto/create-inventory-unit.dto';
import { UpdateInventoryUnitDto } from './dto/update-inventory-unit.dto';

@Injectable()
export class InventoryUnitsService {
  create(createInventoryUnitDto: CreateInventoryUnitDto) {
    return 'This action adds a new inventoryUnit';
  }

  findAll() {
    return `This action returns all inventoryUnits`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventoryUnit`;
  }

  update(id: number, updateInventoryUnitDto: UpdateInventoryUnitDto) {
    return `This action updates a #${id} inventoryUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventoryUnit`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateInventoryUnitDto } from './dto/create-inventory-unit.dto';
import { UpdateInventoryUnitDto } from './dto/update-inventory-unit.dto';
import { InventoryUnit } from 'src/schemas/inventory-unit.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInventoryUnitBatchDto } from './dto/create-inventory-unit-batch.dto';

@Injectable()
export class InventoryUnitsService {
  constructor(
    @InjectModel(InventoryUnit.name)
    private inventoryUnitModel: Model<InventoryUnit>,
  ) {}

  create(createInventoryUnitDto: CreateInventoryUnitDto) {
    const createdInventoryUnit = new this.inventoryUnitModel(
      createInventoryUnitDto,
    );
    return createdInventoryUnit.save();
  }

  async createBatch(
    createInventoryUnitBatchDto: CreateInventoryUnitBatchDto,
  ): Promise<InventoryUnit[]> {
    const docArray: InventoryUnit[] = [];
    const { quantity, ...createInventoryUnitDto } = createInventoryUnitBatchDto;
    for (let i = 0; i < quantity; i++) {
      const inventoryUnit: InventoryUnit = new this.inventoryUnitModel(
        createInventoryUnitDto,
      );
      docArray.push(inventoryUnit);
    }
    return this.inventoryUnitModel.insertMany(docArray);
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

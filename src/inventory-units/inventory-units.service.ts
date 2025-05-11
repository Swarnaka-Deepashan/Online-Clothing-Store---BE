import { Injectable } from '@nestjs/common';
import { CreateInventoryUnitDto } from './dto/create-inventory-unit.dto';
import { UpdateInventoryUnitDto } from './dto/update-inventory-unit.dto';
import { InventoryUnit } from 'src/schemas/inventory-unit.schema';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInventoryUnitBatchDto } from './dto/create-inventory-unit-batch.dto';

@Injectable()
export class InventoryUnitsService {
  constructor(
    @InjectModel(InventoryUnit.name)
    private inventoryUnitModel: Model<InventoryUnit>,
  ) {}

  async create(
    createInventoryUnitDto: CreateInventoryUnitDto,
  ): Promise<InventoryUnit> {
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

  async findAll(): Promise<InventoryUnit[]> {
    return this.inventoryUnitModel.find().exec();
  }

  async findOne(id: ObjectId): Promise<InventoryUnit | null> {
    return this.inventoryUnitModel.findById(id);
  }

  update(id: number, updateInventoryUnitDto: UpdateInventoryUnitDto) {
    return `This action updates a #${id} inventoryUnit`;
  }

  async remove(id: ObjectId): Promise<InventoryUnit | null> {
    return this.inventoryUnitModel.findByIdAndDelete(id);
  }
}

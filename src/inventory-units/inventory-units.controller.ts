import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryUnitsService } from './inventory-units.service';
import { CreateInventoryUnitDto } from './dto/create-inventory-unit.dto';
import { UpdateInventoryUnitDto } from './dto/update-inventory-unit.dto';
import { CreateInventoryUnitBatchDto } from './dto/create-inventory-unit-batch.dto';
import { ObjectId } from 'mongoose';

@Controller('inventory-units')
export class InventoryUnitsController {
  constructor(private readonly inventoryUnitsService: InventoryUnitsService) {}

  @Post()
  create(@Body() createInventoryUnitDto: CreateInventoryUnitDto) {
    return this.inventoryUnitsService.create(createInventoryUnitDto);
  }

  @Post('/batch')
  createBatch(
    @Body() createInventoryUnitBatchDto: CreateInventoryUnitBatchDto,
  ) {
    return this.inventoryUnitsService.createBatch(createInventoryUnitBatchDto);
  }

  @Get()
  findAll() {
    return this.inventoryUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.inventoryUnitsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateInventoryUnitDto: UpdateInventoryUnitDto,
  ) {
    return this.inventoryUnitsService.update(id, updateInventoryUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.inventoryUnitsService.remove(id);
  }
}

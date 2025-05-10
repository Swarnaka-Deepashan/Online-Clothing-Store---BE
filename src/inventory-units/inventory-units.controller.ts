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

@Controller('inventory-units')
export class InventoryUnitsController {
  constructor(private readonly inventoryUnitsService: InventoryUnitsService) {}

  @Post()
  create(@Body() createInventoryUnitDto: CreateInventoryUnitDto) {
    return this.inventoryUnitsService.create(createInventoryUnitDto);
  }

  @Get()
  findAll() {
    return this.inventoryUnitsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoryUnitsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryUnitDto: UpdateInventoryUnitDto,
  ) {
    return this.inventoryUnitsService.update(+id, updateInventoryUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryUnitsService.remove(+id);
  }
}

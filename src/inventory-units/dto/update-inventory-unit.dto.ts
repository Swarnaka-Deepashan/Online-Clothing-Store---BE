import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryUnitDto } from './create-inventory-unit.dto';

export class UpdateInventoryUnitDto extends PartialType(CreateInventoryUnitDto) {}

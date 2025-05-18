import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InventoryUnitsService } from 'src/inventory-units/inventory-units.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private readonly inventoryUnitsService: InventoryUnitsService,
  ) {}

  create(createOrderDto: CreateOrderDto) {

    this.inventoryUnitsService.handleInventory(createOrderDto.productRequests);

    // const inventoryUnitsArray: InventoryUnit[] = [];

    // variantsDetails.forEach((variantDetails) => {
    //   const temp = this.inventoryUnitsService.handleInventory(
    //     itemId,
    //     variantDetails.selectedSize,
    //     variantDetails.selectedColor,
    //     variantDetails.variantQuantity,
    //   );

    //   temp
    //     .then((array) => {
    //       inventoryUnitsArray.push(...array);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });

    return `This action returns all orders`;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

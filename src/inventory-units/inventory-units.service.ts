import { Injectable } from '@nestjs/common';
import { CreateInventoryUnitDto } from './dto/create-inventory-unit.dto';
import { UpdateInventoryUnitDto } from './dto/update-inventory-unit.dto';
import { Model, ObjectId, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateInventoryUnitBatchDto } from './dto/create-inventory-unit-batch.dto';
import { InventoryUnit } from './schemas/inventory-unit.schema';
import { productRequest } from 'src/orders/dto/create-order.dto';
import { variantDetailsSchema } from 'src/orders/schemas/variant-details.schema';
import { productAllocation } from 'src/orders/schemas/product-allocation.schema';

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

  async update(
    id: ObjectId,
    updateInventoryUnitDto: UpdateInventoryUnitDto,
  ): Promise<InventoryUnit | null> {
    return this.inventoryUnitModel.findByIdAndUpdate(
      id,
      updateInventoryUnitDto,
      {
        new: true,
      },
    );
  }

  async remove(id: ObjectId): Promise<InventoryUnit | null> {
    return this.inventoryUnitModel.findByIdAndDelete(id);
  }

  handleInventory(productRequests: productRequest[]) {
    const productAllocations: productAllocation[] = [];

    productRequests.forEach((productRequest) => {
      const itemId = productRequest.itemId;
      const varianDetails = productRequest.variantsDetails;

      const varianDetailsModified: variantDetailsSchema[] = [];

      const updatedInventoryUnitIdsFlattened: Types.ObjectId[] = [];

      varianDetails.forEach((varianDetailObj) => {
        const size = varianDetailObj.selectedSize;
        const color = varianDetailObj.selectedColor;
        const quantity = varianDetailObj.variantQuantity;

        let selectedInventoryUnitsArray: (InventoryUnit & {
          _id: Types.ObjectId;
        } & {
          __v: number;
        })[] = [];

        const availableInventoryUnitsArray = this.inventoryUnitModel.find({
          itemId,
          size,
          color,
        });

        availableInventoryUnitsArray
          .then((availableInventoryUnitsArray) => {
            selectedInventoryUnitsArray = availableInventoryUnitsArray.slice(
              0,
              quantity,
            );
          })
          .catch((error) => console.log(error));

        const updatedInventoryUnitsArray: (InventoryUnit & {
          _id: Types.ObjectId;
        } & {
          __v: number;
        })[] = [];

        selectedInventoryUnitsArray.forEach((selectedInventoryUnit) => {
          const updatedInventoryUnit =
            this.inventoryUnitModel.findByIdAndUpdate(
              selectedInventoryUnit._id,
              {
                status: 'sold',
              },
            );
          updatedInventoryUnit
            .then((updatedInventoryUnit) => {
              if (updatedInventoryUnit)
                updatedInventoryUnitsArray.push(updatedInventoryUnit);
            })
            .catch((error) => console.log(error));
        });

        const updatedInventoryUnitIds = updatedInventoryUnitsArray.map(
          (updatedInventoryUnit) => updatedInventoryUnit._id,
        );

        updatedInventoryUnitIdsFlattened.push(...updatedInventoryUnitIds);

        const varianDetailsModifiedObj = {
          selectedSize: size,
          selectedColor: color,
          variantQuantity: quantity,
          inventoryUnitIds: updatedInventoryUnitIds,
        };

        varianDetailsModified.push(varianDetailsModifiedObj);
      });
      const productAllocationObj = {
        itemId: itemId,
        itemName: productRequest.itemName,
        basePrice: productRequest.basePrice,
        variantsDetails: varianDetailsModified,
        inventoryUnitIds: updatedInventoryUnitIdsFlattened,
        quantity: productRequest.quantity,
      };

      productAllocations.push(productAllocationObj);
    });
  }

  // handleInventory(
  //   itemId: Schema.Types.ObjectId,
  //   variantsDetails: variantDetailsDto[],
  // ): (InventoryUnit & {
  //   _id: Types.ObjectId;
  // })[] {
  //   const updatedInventoryUnitsArray: (InventoryUnit & {
  //     _id: Types.ObjectId;
  //   })[] = [];

  //   variantsDetails.forEach((variant) => {
  //     const availableInventoryUnitsArray = this.inventoryUnitModel.find({
  //       itemId: itemId,
  //       size: variant.selectedSize,
  //       color: variant.selectedColor,
  //     });
  //     let selectedInventoryUnitsArray: (InventoryUnit & {
  //       _id: Types.ObjectId;
  //     })[] = [];
  //     availableInventoryUnitsArray
  //       .then((availableInventoryUnitsArray) => {
  //         selectedInventoryUnitsArray = availableInventoryUnitsArray.slice(
  //           0,
  //           variant.variantQuantity,
  //         );
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     for (let i = 0; i < selectedInventoryUnitsArray.length; i++) {
  //       const inventoryUnit = this.inventoryUnitModel.findByIdAndUpdate(
  //         selectedInventoryUnitsArray[i]._id,
  //         { status: 'sold' },
  //         { new: true },
  //       );

  //       inventoryUnit
  //         .then((inventoryUnit) => {
  //           if (inventoryUnit) {
  //             updatedInventoryUnitsArray.push(inventoryUnit);
  //           }
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   });
  //   return updatedInventoryUnitsArray;
  // }

  // async handleInventory(
  //   itemId: Schema.Types.ObjectId,
  //   selectedSize: string,
  //   selectedColor: string,
  //   quantity: number,
  // ): Promise<InventoryUnit[]> {
  //   try {
  //     const availableInventoryUnitsArray = await this.inventoryUnitModel
  //       .find({
  //         itemId: itemId,
  //         size: selectedSize,
  //         color: selectedColor,
  //       })
  //       .exec();
  //     if (availableInventoryUnitsArray.length >= quantity) {
  //       for (const inventoryUnit of availableInventoryUnitsArray) {
  //         await this.inventoryUnitModel.findByIdAndUpdate(
  //           inventoryUnit.id,
  //           { status: InventoryUnitStatus },
  //           { new: true },
  //         );
  //       }
  //       return availableInventoryUnitsArray;
  //     } else {
  //       return [];
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // }
}
